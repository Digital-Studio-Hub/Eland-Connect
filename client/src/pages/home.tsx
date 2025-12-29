import { Link } from "wouter";
import { Phone, MessageCircle, Check, Building2, Hammer, Grid3X3, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/layout";

import heroImage from "@assets/modern_house_constru_db51e9bd_1767024770207.webp";
import constructionImage from "@assets/stock_images/modern_house_constru_db51e9bd.webp";
import renovationImage from "@assets/stock_images/home_renovation_inte_262edd13.webp";
import tilingImage from "@assets/stock_images/professional_tiling__844d9eae.webp";
import cleaningImage from "@assets/stock_images/professional_cleanin_cf048e92.webp";
import galleryImage1 from "@assets/stock_images/beautiful_finished_k_ce541184.webp";
import galleryImage2 from "@assets/stock_images/modern_bathroom_tile_8d9c57ac.webp";
import galleryImage3 from "@assets/stock_images/exterior_house_paint_ab103317.webp";

const PHONE_NUMBER = "0845694531";
const WHATSAPP_NUMBER = "27845694531";

const services = [
  {
    icon: Building2,
    title: "Construction & Building",
    description: "New builds, brickwork, and structural work for homes and shops.",
    image: constructionImage,
    href: "/services/construction",
  },
  {
    icon: Hammer,
    title: "Renovations",
    description: "Home and shop renovations, extensions, and upgrades.",
    image: renovationImage,
    href: "/services/renovations",
  },
  {
    icon: Grid3X3,
    title: "Tiling Services",
    description: "Floor, wall, bathroom, and kitchen tiling solutions.",
    image: tilingImage,
    href: "/services/tiling",
  },
  {
    icon: Sparkles,
    title: "Cleaning Services",
    description: "Post-construction, residential, and commercial cleaning.",
    image: cleaningImage,
    href: "/services/cleaning",
  },
];

const benefits = [
  "Reliable workmanship",
  "Affordable pricing",
  "Attention to detail",
  "On-site supervision",
  "Friendly, professional service",
  "Focus on customer satisfaction",
];

const recentProjects = [
  { image: galleryImage1, title: "Kitchen Renovation" },
  { image: galleryImage2, title: "Bathroom Tiling" },
  { image: galleryImage3, title: "Exterior Finishing" },
];

export default function Home() {
  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in your building and cleaning services.`,
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  return (
    <Layout>
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" data-testid="text-hero-heading">
              Reliable Building, Renovation, Tiling & Cleaning Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed" data-testid="text-hero-subheading">
              Helping homeowners and businesses build, renovate, and maintain their homes and shops with quality workmanship and professional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handleCall}
                className="gap-2 bg-[#F39A1E] hover:bg-[#E08A0E] text-white border-[#E08A0E] text-lg px-8"
                data-testid="button-hero-call"
              >
                <Phone className="h-5 w-5" />
                Call Now: 084 569 4531
              </Button>
              <Button
                size="lg"
                onClick={handleWhatsApp}
                className="gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white border-[#20BD5A] text-lg px-8"
                data-testid="button-hero-whatsapp"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-services-heading">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All services are tailored to your needs and budget. We help you build, renovate, and maintain your property.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="overflow-hidden group hover-elevate">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                      <service.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <Link href={service.href}>
                    <Button variant="outline" size="sm" className="w-full gap-2" data-testid={`button-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="text-why-heading">
                Why Choose The Eland?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                The Eland Building Construction and Cleaning Services is a hands-on service business owned by Christopher Nawu. 
                We work with homeowners and shop owners who need trustworthy professionals.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-[#25D366]" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/about">
                  <Button size="lg" variant="outline" className="gap-2" data-testid="button-learn-about">
                    Learn More About Us
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={constructionImage}
                  alt="Construction work"
                  className="rounded-md w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src={renovationImage}
                  alt="Renovation work"
                  className="rounded-md w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-projects-heading">
              Recent Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse some of the construction, renovation, tiling, and cleaning work we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentProjects.map((project, index) => (
              <div key={index} className="relative group overflow-hidden rounded-md aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/gallery">
              <Button size="lg" className="gap-2" data-testid="button-view-gallery">
                View Full Gallery
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#1E3A5F]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-testid="text-cta-heading">
            Planning a Build or Renovation?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Call us today or send a WhatsApp message to get started. We're ready to help with your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleCall}
              className="gap-2 bg-[#F39A1E] hover:bg-[#E08A0E] text-white border-[#E08A0E] text-lg px-8"
              data-testid="button-cta-call"
            >
              <Phone className="h-5 w-5" />
              Call: 084 569 4531
            </Button>
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white border-[#20BD5A] text-lg px-8"
              data-testid="button-cta-whatsapp"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}