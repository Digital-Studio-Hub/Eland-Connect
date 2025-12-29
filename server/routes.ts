import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { z } from "zod";

const ZEPTOMAIL_TOKEN = process.env.ZEPTOMAIL_TOKEN;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "info@theelandbuildingconandcleaningserv.co.za";
const SITE_URL = process.env.SITE_URL || "https://theelandbuildingconandcleaningserv.co.za";

const serviceLabels: Record<string, string> = {
  construction: "Construction & Building",
  renovations: "Renovations",
  tiling: "Tiling Services",
  cleaning: "Cleaning Services",
  other: "Other",
};

async function sendZeptoMail(to: string, subject: string, htmlContent: string, textContent: string) {
  if (!ZEPTOMAIL_TOKEN) {
    console.error("ZEPTOMAIL_TOKEN not configured");
    throw new Error("Email service not configured");
  }

  const response = await fetch("https://api.zeptomail.com/v1.1/email", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": ZEPTOMAIL_TOKEN,
    },
    body: JSON.stringify({
      from: {
        address: "noreply@theelandbuildingconandcleaningserv.co.za",
        name: "The Eland Building Services",
      },
      to: [
        {
          email_address: {
            address: to,
            name: to,
          },
        },
      ],
      subject: subject,
      htmlbody: htmlContent,
      textbody: textContent,
    }),
  });

  if (!response.ok) {
    const errorData = await response.text();
    console.error("ZeptoMail error:", errorData);
    throw new Error("Failed to send email");
  }

  return response.json();
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/send-mail", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      await storage.saveContactSubmission(validatedData);

      const serviceLabel = validatedData.service 
        ? serviceLabels[validatedData.service] || validatedData.service 
        : "Not specified";

      const adminHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #1E3A5F; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background-color: #f9f9f9; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #1E3A5F; }
    .value { margin-top: 5px; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Lead Received!</h1>
    </div>
    <div class="content">
      <p>A new inquiry has been submitted through your website:</p>
      
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${validatedData.name}</div>
      </div>
      
      <div class="field">
        <div class="label">Phone:</div>
        <div class="value"><a href="tel:${validatedData.phone}">${validatedData.phone}</a></div>
      </div>
      
      <div class="field">
        <div class="label">Email:</div>
        <div class="value"><a href="mailto:${validatedData.email}">${validatedData.email}</a></div>
      </div>
      
      <div class="field">
        <div class="label">Service Requested:</div>
        <div class="value">${serviceLabel}</div>
      </div>
      
      <div class="field">
        <div class="label">Message:</div>
        <div class="value">${validatedData.message.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
    <div class="footer">
      <p>The Eland Building Construction & Cleaning Services</p>
      <p>This email was generated automatically from your website contact form.</p>
    </div>
  </div>
</body>
</html>`;

      const adminText = `
New Lead Received!

Name: ${validatedData.name}
Phone: ${validatedData.phone}
Email: ${validatedData.email}
Service: ${serviceLabel}

Message:
${validatedData.message}

---
The Eland Building Construction & Cleaning Services
      `.trim();

      const userHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #1E3A5F; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background-color: #f9f9f9; }
    .cta { text-align: center; margin: 20px 0; }
    .btn { display: inline-block; background-color: #F39A1E; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You for Contacting Us!</h1>
    </div>
    <div class="content">
      <p>Dear ${validatedData.name},</p>
      
      <p>Thank you for reaching out to The Eland Building Construction and Cleaning Services. We have received your inquiry and will get back to you as soon as possible.</p>
      
      <p><strong>Here's a summary of your inquiry:</strong></p>
      <p><strong>Service:</strong> ${serviceLabel}</p>
      <p><strong>Your Message:</strong><br>${validatedData.message.replace(/\n/g, '<br>')}</p>
      
      <p>If you need immediate assistance, please don't hesitate to call us directly:</p>
      
      <div class="cta">
        <a href="tel:0845694531" class="btn">Call Us: 084 569 4531</a>
      </div>
      
      <p>Or chat with us on WhatsApp for a quick response.</p>
      
      <p>Best regards,<br>
      <strong>Christopher Nawu</strong><br>
      The Eland Building Construction & Cleaning Services</p>
    </div>
    <div class="footer">
      <p>The Eland Building Construction & Cleaning Services</p>
      <p>Phone: 084 569 4531 | South Africa</p>
    </div>
  </div>
</body>
</html>`;

      const userText = `
Dear ${validatedData.name},

Thank you for reaching out to The Eland Building Construction and Cleaning Services. We have received your inquiry and will get back to you as soon as possible.

Here's a summary of your inquiry:
Service: ${serviceLabel}
Your Message: ${validatedData.message}

If you need immediate assistance, please call us directly at 084 569 4531.

Best regards,
Christopher Nawu
The Eland Building Construction & Cleaning Services

Phone: 084 569 4531
      `.trim();

      let adminEmailSent = false;
      let userEmailSent = false;
      const emailErrors: string[] = [];

      try {
        await sendZeptoMail(
          ADMIN_EMAIL,
          `New Lead: ${validatedData.name} - ${serviceLabel}`,
          adminHtml,
          adminText
        );
        adminEmailSent = true;
      } catch (emailError) {
        console.error("Failed to send admin notification:", emailError);
        emailErrors.push("admin notification");
      }

      try {
        await sendZeptoMail(
          validatedData.email,
          "Thank You for Contacting The Eland Building Services",
          userHtml,
          userText
        );
        userEmailSent = true;
      } catch (emailError) {
        console.error("Failed to send user confirmation:", emailError);
        emailErrors.push("confirmation email");
      }

      if (!adminEmailSent && !userEmailSent) {
        return res.status(500).json({ 
          success: false, 
          message: "We received your inquiry but couldn't send email notifications. Please call us directly at 084 569 4531." 
        });
      }

      if (emailErrors.length > 0) {
        console.warn("Some emails failed to send:", emailErrors);
      }

      res.json({ 
        success: true, 
        message: "Message sent successfully. We'll get back to you soon!" 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid form data",
          errors: error.errors 
        });
      }
      
      res.status(500).json({ 
        success: false, 
        message: "Failed to process your request. Please try again or call us directly at 084 569 4531." 
      });
    }
  });

  app.get("/sitemap.xml", (req, res) => {
    const baseUrl = SITE_URL;
    const lastmod = new Date().toISOString().split('T')[0];
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/services</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/services/construction</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/services/renovations</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/services/tiling</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/services/cleaning</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/gallery</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/privacy-policy</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>`;

    res.setHeader("Content-Type", "application/xml");
    res.send(sitemap);
  });

  app.get("/robots.txt", (req, res) => {
    const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml`;

    res.setHeader("Content-Type", "text/plain");
    res.send(robotsTxt);
  });

  return httpServer;
}