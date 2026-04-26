import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-white">

      <Navbar />

      <section className="py-20">
        <div className="container-main max-w-4xl">

          <h1 className="text-3xl md:text-4xl font-extrabold mb-6">
            Privacy Policy
          </h1>

          <p className="text-muted-foreground mb-8">
            This privacy policy explains how Talentpull UK uses and protects
            any information that you provide when using this website.
          </p>

          <p className="text-sm text-muted-foreground mb-8">
            Last updated: 26 April 2026
          </p>

          {/* SECTION */}
          <h2 className="text-xl font-bold mb-3">What we collect</h2>
          <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
            <li>Name and job title</li>
            <li>Contact information including email address</li>
            <li>Business details such as postcode</li>
            <li>Any information submitted via forms</li>
          </ul>

          {/* SECTION */}
          <h2 className="text-xl font-bold mb-3">
            What we do with the information
          </h2>
          <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
            <li>Improve our services and offers</li>
            <li>Respond to your enquiries</li>
            <li>Send updates or marketing (only if relevant)</li>
            <li>Internal record keeping</li>
          </ul>

          {/* SECTION */}
          <h2 className="text-xl font-bold mb-3">Security</h2>
          <p className="text-muted-foreground mb-6">
            We are committed to ensuring that your information is secure.
            We implement suitable measures to protect your data.
          </p>

          {/* SECTION */}
          <h2 className="text-xl font-bold mb-3">Cookies</h2>
          <p className="text-muted-foreground mb-6">
            Cookies and similar browser storage help us keep the website secure,
            remember your cookie choice, and understand how visitors use the site.
            You can accept or reject non-essential cookies using the cookie banner.
          </p>

          <h2 className="text-xl font-bold mb-3">Analytics and tracking</h2>
          <p className="text-muted-foreground mb-4">
            We use Google Tag Manager to manage analytics and marketing tags.
            These tools may help us measure page views, section views, button clicks,
            phone clicks, WhatsApp clicks, social link clicks, calculator activity,
            growth audit activity, and whether lead forms were submitted successfully.
          </p>
          <p className="text-muted-foreground mb-6">
            We do not intentionally send names, email addresses, phone numbers,
            restaurant details, postcode values, or message text to Google Tag Manager.
            Non-essential analytics and advertising storage are set to denied unless
            you choose to accept cookies.
          </p>

          {/* SECTION */}
          <h2 className="text-xl font-bold mb-3">
            Controlling your information
          </h2>
          <p className="text-muted-foreground mb-6">
            You may request details of personal information we hold about you.
            To do so, contact us at:
          </p>

          <p className="text-primary font-semibold">
            talentpull.uk@gmail.com
          </p>

        </div>
      </section>

      <Footer />

    </div>
  );
};

export default PrivacyPolicy;
