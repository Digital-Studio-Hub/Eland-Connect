# The Eland Building Construction & Cleaning Services

## Overview
A lead-generation website for The Eland Building Construction and Cleaning Services, a South African business offering construction, renovation, tiling, and cleaning services. The website is designed to convert visitors into leads through prominent Call and WhatsApp CTAs.

## Business Information
- **Business Name:** The Eland Building Construction and Cleaning Services
- **Owner:** Christopher Nawu
- **Phone:** 084 569 4531
- **WhatsApp:** +27 84 569 4531
- **Service Area:** South Africa
- **Domain:** theelandbuildingconandcleaningserv.co.za

## Tech Stack
- **Frontend:** React with TypeScript, Vite, Wouter (routing), TanStack Query
- **Backend:** Express.js with TypeScript
- **Styling:** Tailwind CSS with Shadcn UI components
- **Email:** ZeptoMail API for form submissions

## Project Structure
```
client/
  src/
    components/
      layout/         # Navbar, Footer, Sticky CTAs
      ui/             # Shadcn UI components
    pages/            # All page components
    lib/              # Utilities and query client
    hooks/            # Custom hooks
server/
  routes.ts           # API endpoints
  storage.ts          # In-memory storage
shared/
  schema.ts           # Shared types and validation schemas
```

## Pages
- `/` - Home page with hero, services overview, trust signals, recent projects
- `/about` - About page with company story and values
- `/services` - Services overview
- `/services/construction` - Construction service details
- `/services/renovations` - Renovation service details
- `/services/tiling` - Tiling service details
- `/services/cleaning` - Cleaning service details
- `/gallery` - Project gallery with lightbox
- `/contact` - Contact form and quick contact options
- `/privacy-policy` - Privacy policy

## API Endpoints
- `POST /api/send-mail` - Handle contact form submissions (sends via ZeptoMail)
- `GET /sitemap.xml` - Dynamic sitemap for SEO
- `GET /robots.txt` - Robots.txt for search engines

## Environment Variables
- `ZEPTOMAIL_TOKEN` - ZeptoMail API token for email sending
- `ADMIN_EMAIL` - Email address for receiving lead notifications
- `SITE_URL` - Base URL for sitemap generation

## Brand Colors
- Primary (Construction Blue): #1E3A5F
- Accent (Safety Orange): #F39A1E
- Neutral (Concrete Grey): #E6E6E6
- WhatsApp Green: #25D366
- Text (Charcoal): #2B2B2B
- Background: #FFFFFF

## Key Features
- Mobile-first responsive design
- Sticky Call and WhatsApp buttons on mobile
- Floating WhatsApp button on desktop
- Contact form with ZeptoMail integration (error handling surfaces failures to users)
- Image gallery with lightbox and category filters
- SEO optimized with LocalBusiness schema
- Dynamic sitemap generation
- All images optimized in WebP format for performance
- Proper error handling for email delivery failures

## Recent Changes (December 2024)
- Converted all stock images to WebP format for improved performance
- Enhanced email error handling to surface failures to users (returns 500 if both admin and user emails fail)
- All pages tested and verified working: Home, About, Services (with sub-pages), Gallery, Contact, Privacy Policy

## Running the Project
```bash
npm run dev
```
The application runs on port 5000.