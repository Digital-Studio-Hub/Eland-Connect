import { Layout } from "@/components/layout/layout";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <section className="bg-muted/30 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-privacy-heading">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
            <p className="text-muted-foreground">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              When you contact us through our website or by phone, we may collect the following information:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Your name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Details about your project or inquiry</li>
              <li>Service area or location</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information you provide to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Respond to your inquiries and provide quotes</li>
              <li>Communicate about our services</li>
              <li>Schedule consultations and project work</li>
              <li>Send project updates and follow-ups</li>
              <li>Improve our services</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Information Sharing</h2>
            <p className="text-muted-foreground mb-6">
              We do not sell, trade, or otherwise transfer your personal information to outside parties. 
              Your information is only shared with team members who need it to provide our services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Data Security</h2>
            <p className="text-muted-foreground mb-6">
              We implement appropriate security measures to protect your personal information. 
              However, no method of transmission over the Internet is 100% secure, and we cannot 
              guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Request access to your personal information</li>
              <li>Request correction of any inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Cookies</h2>
            <p className="text-muted-foreground mb-6">
              Our website may use cookies to improve your browsing experience. 
              You can choose to disable cookies through your browser settings.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Third-Party Links</h2>
            <p className="text-muted-foreground mb-6">
              Our website may contain links to third-party websites. We are not responsible 
              for the privacy practices of these external sites.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Changes to This Policy</h2>
            <p className="text-muted-foreground mb-6">
              We may update this privacy policy from time to time. Any changes will be posted 
              on this page with an updated revision date.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this privacy policy, please contact us:
            </p>
            <ul className="list-none text-muted-foreground space-y-2">
              <li><strong>Business:</strong> The Eland Building Construction and Cleaning Services</li>
              <li><strong>Owner:</strong> Christopher Nawu</li>
              <li><strong>Phone:</strong> 084 569 4531</li>
              <li><strong>Email:</strong> info@theelandbuildingconandcleaningserv.co.za</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}