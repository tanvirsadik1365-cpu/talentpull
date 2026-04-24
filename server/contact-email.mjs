import nodemailer from "nodemailer";

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "talentpull.uk@gmail.com";
const SECURITY_ANSWER = "9";

const fieldLabels = {
  name: "Name",
  phone: "Mobile",
  email: "Email",
  postcode: "Postcode",
  business: "Business",
  website: "Website",
  message: "Message",
  lead_source: "Lead source",
  page: "Page",
};

const requiredFields = ["name", "phone", "email"];

const sendJson = (res, statusCode, payload) => {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
};

const readRawBody = (req) =>
  new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString("utf8");
    });

    req.on("end", () => resolve(body));
    req.on("error", reject);
  });

const parseBody = async (req) => {
  if (req.body && typeof req.body === "object") {
    return req.body;
  }

  if (typeof req.body === "string") {
    return JSON.parse(req.body);
  }

  const rawBody = await readRawBody(req);

  if (!rawBody) {
    return {};
  }

  const contentType = String(req.headers["content-type"] || "");

  if (contentType.includes("application/json")) {
    return JSON.parse(rawBody);
  }

  if (contentType.includes("application/x-www-form-urlencoded")) {
    return Object.fromEntries(new URLSearchParams(rawBody));
  }

  return {};
};

const cleanValue = (value) => String(value || "").trim();

const normaliseLead = (payload) =>
  Object.keys(fieldLabels).reduce((lead, key) => {
    lead[key] = cleanValue(payload[key]);
    return lead;
  }, {});

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const createEmailHtml = (lead) => {
  const rows = Object.entries(fieldLabels)
    .map(([key, label]) => {
      const value = lead[key] || "Not provided";

      return `
        <tr>
          <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#64748b;font-weight:700;width:150px;">${escapeHtml(label)}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#111827;">${escapeHtml(value).replace(/\n/g, "<br>")}</td>
        </tr>
      `;
    })
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;background:#f8fafc;padding:24px;">
      <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:14px;overflow:hidden;">
        <div style="background:#ff7a3d;color:#ffffff;padding:18px 22px;">
          <h1 style="margin:0;font-size:22px;">New TalentPull lead</h1>
          <p style="margin:6px 0 0;font-size:14px;">Submitted from talentpull.uk</p>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          ${rows}
          <tr>
            <td style="padding:10px 12px;color:#64748b;font-weight:700;">Submitted</td>
            <td style="padding:10px 12px;color:#111827;">${escapeHtml(new Date().toLocaleString("en-GB", { timeZone: "Europe/London" }))}</td>
          </tr>
        </table>
      </div>
    </div>
  `;
};

const createEmailText = (lead) => {
  const lines = Object.entries(fieldLabels).map(([key, label]) => {
    return `${label}: ${lead[key] || "Not provided"}`;
  });

  return [
    "New TalentPull lead",
    "",
    ...lines,
    "",
    `Submitted: ${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}`,
  ].join("\n");
};

const createTransport = () => {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS?.replace(/\s+/g, "");

  if (!smtpUser || !smtpPass) {
    throw new Error("SMTP_USER and SMTP_PASS are required.");
  }

  if ((process.env.SMTP_HOST || "smtp.gmail.com").includes("gmail.com") && smtpPass.length !== 16) {
    const error = new Error("Gmail App Password must be 16 characters.");
    error.code = "EAUTH";
    throw error;
  }

  const port = Number(process.env.SMTP_PORT || "465");
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465;

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port,
    secure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
};

export const handleContactRequest = async (req, res) => {
  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== "POST") {
    sendJson(res, 405, { message: "Method not allowed." });
    return;
  }

  try {
    const payload = await parseBody(req);

    if (cleanValue(payload._gotcha)) {
      sendJson(res, 200, { message: "Thanks, your request has been sent." });
      return;
    }

    const securityAnswer = cleanValue(payload.security);

    if (securityAnswer && securityAnswer !== SECURITY_ANSWER) {
      sendJson(res, 400, { message: "Please answer the security check correctly before sending." });
      return;
    }

    const lead = normaliseLead(payload);
    const missingField = requiredFields.find((field) => !lead[field]);

    if (missingField) {
      sendJson(res, 400, { message: `${fieldLabels[missingField]} is required.` });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
      sendJson(res, 400, { message: "Please enter a valid email address." });
      return;
    }

    const smtpUser = process.env.SMTP_USER;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || smtpUser;
    const transporter = createTransport();
    const subjectBusiness = lead.business ? ` - ${lead.business}` : "";

    await transporter.sendMail({
      to: CONTACT_TO_EMAIL,
      from: `"TalentPull Leads" <${fromEmail}>`,
      replyTo: lead.email,
      subject: `New TalentPull growth plan request${subjectBusiness}`,
      text: createEmailText(lead),
      html: createEmailHtml(lead),
    });

    sendJson(res, 200, { message: "Thanks, your request has been sent." });
  } catch (error) {
    console.error("Contact form email failed:", error);
    const isAuthError = error?.code === "EAUTH" || error?.responseCode === 535;

    sendJson(res, 500, {
      message: isAuthError
        ? "Gmail rejected the email login. Please use a fresh 16-character Gmail App Password."
        : "We could not send the form right now. Please check the email setup or message us on WhatsApp.",
    });
  }
};
