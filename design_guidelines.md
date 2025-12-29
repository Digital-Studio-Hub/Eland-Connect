# Design Guidelines for The Eland Building Construction & Cleaning Services

## Design Approach
**Utility-focused, conversion-optimized design** prioritizing trust signals, clear CTAs, and mobile-first lead generation for construction/cleaning services.

## Color Palette
- **Primary (Construction Blue)**: #1E3A5F
- **Accent (Safety Orange)**: #F39A1E  
- **Neutral (Concrete Grey)**: #E6E6E6
- **Text (Charcoal)**: #2B2B2B
- **Background**: #FFFFFF
- **WhatsApp CTA**: #25D366

## Typography
- **Headings**: Poppins or Montserrat (bold, impactful)
- **Body Text**: Inter or Roboto (clean, readable)
- **Buttons**: Bold weight, high contrast

## Layout System
- **Spacing**: Tailwind units of 4, 6, 8, 12, 16 (p-4, py-8, mb-12, gap-6)
- **Mobile-first**: Sticky CTAs, click-to-call, WhatsApp float button
- **Container**: max-w-7xl for content sections

## Core Components

### Navigation
- Logo (use Main_Logo or White_Logo based on background)
- Phone number with click-to-call
- WhatsApp link
- Simple menu: Home, About, Services, Gallery, Contact

### Hero Section
- **Large hero image**: Construction/renovation imagery (optimized WebP)
- Headline: "Reliable Building, Renovation, Tiling & Cleaning Services"
- Sub-headline explaining value proposition
- **Dual CTAs with blurred backgrounds**: "Call Now: 084 569 4531" + "WhatsApp Us"

### Service Cards
- 4 services in responsive grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)
- Icon/image, title, brief description, "Request Quote" button
- Services: Construction & Building, Renovations, Tiling, Cleaning

### Trust Signals Section
- "Why Choose The Eland" with checkmark list
- Display: Reliable workmanship, Affordable pricing, Attention to detail, On-site supervision, Professional service
- Include Badge_Level_1 image for credibility

### Gallery
- Masonry-style or grid layout showcasing before/after, tiling work, cleaning results
- WebP images, lazy-loaded
- Lightbox functionality for image viewing

### Contact Form
- Simple fields: Name, Phone, Email, Message ("Tell us what you're building or renovating")
- Primary CTA: "Get a Free Quote"
- Display contact info prominently: Phone, WhatsApp, Service Area

### Footer
- Business name and owner: Christopher Nawu
- Contact: 084 569 4531
- Service Area: South Africa
- Quick links to all pages
- Privacy Policy link

## Fixed Elements
- **Sticky mobile buttons**: Call Now (bottom-left), WhatsApp (bottom-right)
- Both visible on all pages for instant contact

## Images
**Hero**: Large construction/renovation site or finished building project (WebP, optimized)
**Services**: Individual service imagery (construction, tiling close-up, cleaning, renovation)
**Gallery**: 12-20 project photos showing quality workmanship
**About**: Optional owner photo or team at work
**All images**: WebP format, lazy-loaded, descriptive alt text for SEO

## Conversion Optimization
- CTA at end of every page section
- Phone number and WhatsApp visible throughout
- Trust signals on home page
- Clear service explanations
- Project gallery for credibility
- Simple, friction-free contact form

## Performance
- Load time target: <1.5 seconds
- Minified CSS/JS
- Optimized WebP images
- Clean URL structure
- Mobile-optimized with responsive breakpoints

## SEO Structure
- LocalBusiness schema with contact details
- Service schema for each offering
- Meta titles/descriptions optimized for "building contractors," "renovations," "tiling services," "cleaning services"
- Sitemap accessible at /sitemap.xml