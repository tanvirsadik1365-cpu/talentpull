import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { handleContactRequest } from "./server/contact-email.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = Number(process.env.PORT || 3000);
const distPath = path.join(__dirname, "dist");

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

app.all("/api/contact", (req, res) => {
  void handleContactRequest(req, res);
});

app.use(express.static(distPath));

app.use((_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(port, () => {
  console.log(`TalentPull site running on port ${port}`);
});
