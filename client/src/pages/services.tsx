import { Link, useRoute } from "wouter";
import { Phone, MessageCircle, Check, ArrowRight, Building2, Hammer, Grid3X3, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/layout";

import constructionImage from "@assets/FB_IMG_1733162722713_1767173503176.webp";
import renovationImage from "@assets/1720013400035_1767173503168.webp";
import tilingImage from "@assets/FB_IMG_16612461359325917_1767173503177.webp";
import cleaningImage from "@assets/FB_IMG_1733127550658_1767173503176.webp";

const PHONE_NUMBER = "0845694531";
const WHATSAPP_NUMBER = "27845694531";

const allServices = [
  {
    id: "construction",
    icon: Building2,
    title: "Construction & Building",
    shortDesc: "New builds, brickwork, and structural work for homes and shops.",
    description: "We offer construction services for new builds, brickwork, and general structural work. Whether you are starting from scratch or improving an existing structure, we ensure strong foundations and quality results.",
    features: [
      "New home construction",
      "Commercial building projects",
      "Brickwork and masonry",
      "Structural work and foundations",
      "Extensions and additions",
      "Site preparation and clearing",
    ],
    image: constructionImage,
    slug: "construction",
  },
  {
    id: "renovations",
    icon: Hammer,
    title: "Renovations",
    shortDesc: "Home and shop renovations, extensions, and upgrades.",
    description: "We help homeowners and shop owners upgrade and improve their spaces with professional renovation services. From small updates to complete transformations, we bring your vision to life.",
    features: [
      "Complete home renovations",
      "Shop and commercial renovations",
      "Room extensions",
      "Kitchen remodeling",
      "Bathroom upgrades",
      "Interior and exterior improvements",
    ],
    image: renovationImage,
    slug: "renovations",
  },
  {
    id: "tiling",
    icon: Grid3X3,
    title: "Tiling Services",
    shortDesc: "Floor, wall, bathroom, and kitchen tiling solutions.",
    description: "Our tiling services add value, durability, and style to your property. We work with various tile types and ensure professional installation for lasting results.",
    features: [
      "Floor tiling installation",
      "Wall tiling solutions",
      "Bathroom tiling",
      "Kitchen backsplash and tiling",
      "Outdoor and patio tiling",
      "Tile repair and replacement",
    ],
    image: tilingImage,
    slug: "tiling",
  },
  {
    id: "cleaning",
    icon: Sparkles,
    title: "Cleaning Services",
    shortDesc: "Post-construction, residential, and commercial cleaning.",
    description: "We provide reliable cleaning services for homes and businesses. Our thorough cleaning ensures your space is spotless and ready for use.",
    features: [
      "Post-construction cleaning",
      "Deep residential cleaning",
      "Commercial and office cleaning",
      "Shop and retail cleaning",
      "Move-in/move-out cleaning",
      "Regular maintenance cleaning",
    ],
    image: cleaningImage,
    slug: "cleaning",
  },
];

function ServiceDetail({ slug }: { slug: string }) {
  const service = allServices.find((s) => s.slug === slug);
  
  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in your ${service?.title || 'services'}.`,
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  if (!service) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <Link href="/services">
            <Button>View All Services</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const Icon = service.icon;

  return (
    <Layout>
      <section className="bg-muted/30 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-foreground">Services</Link>
            <span>/</span>
            <span className="text-foreground">{service.title}</span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-md bg-primary flex items-center justify-center">
              <Icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground" data-testid={`text-service-${slug}-heading`}>
              {service.title}
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {service.description}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-md w-full aspect-[4/3] object-cover shadow-lg"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">What We Offer</h2>
              <div className="space-y-4 mb-8">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#25D366]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-[#25D366]" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-muted/50 rounded-md p-6 mb-8">
                <h3 className="font-semibold text-lg text-foreground mb-3">Request a Quote</h3>
                <p className="text-muted-foreground mb-4">
                  Contact us today to discuss your {service.title.toLowerCase()} needs and get a free quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleCall}
                    className="gap-2 bg-[#F39A1E] hover:bg-[#E08A0E] text-white"
                    data-testid={`button-${slug}-call`}
                  >
                    <Phone className="h-4 w-4" />
                    Call: 084 569 4531
                  </Button>
                  <Button
                    onClick={handleWhatsApp}
                    className="gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white"
                    data-testid={`button-${slug}-whatsapp`}
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Other Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {allServices.filter((s) => s.slug !== slug).map((s) => {
              const SIcon = s.icon;
              return (
                <Card key={s.id} className="hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                        <SIcon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">{s.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{s.shortDesc}</p>
                    <Link href={`/services/${s.slug}`}>
                      <Button variant="outline" size="sm" className="w-full gap-2">
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

function ServicesOverview() {
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
      <section className="bg-muted/30 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-services-heading">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground">
              We provide comprehensive building, renovation, tiling, and cleaning services 
              tailored to meet your specific needs and budget.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {allServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isEven ? 'order-1' : 'order-1 lg:order-2'}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-md w-full aspect-[4/3] object-cover shadow-lg"
                      loading="lazy"
                    />
                  </div>
                  <div className={isEven ? 'order-2' : 'order-2 lg:order-1'}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">{service.title}</h2>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {service.features.slice(0, 4).map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-[#25D366] flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Link href={`/services/${service.slug}`}>
                        <Button variant="outline" className="gap-2" data-testid={`button-${service.slug}-learn`}>
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button
                        onClick={handleWhatsApp}
                        className="gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white"
                        data-testid={`button-${service.slug}-quote`}
                      >
                        <MessageCircle className="h-4 w-4" />
                        Get a Quote
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#1E3A5F]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-testid="text-cta-heading">
            Need Help With Your Project?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. We're here to help with all your building and cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleCall}
              className="gap-2 bg-[#F39A1E] hover:bg-[#E08A0E] text-white border-[#E08A0E] text-lg px-8"
              data-testid="button-services-cta-call"
            >
              <Phone className="h-5 w-5" />
              Call: 084 569 4531
            </Button>
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white border-[#20BD5A] text-lg px-8"
              data-testid="button-services-cta-whatsapp"
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

export default function Services() {
  const [matchConstruction] = useRoute("/services/construction");
  const [matchRenovations] = useRoute("/services/renovations");
  const [matchTiling] = useRoute("/services/tiling");
  const [matchCleaning] = useRoute("/services/cleaning");

  if (matchConstruction) return <ServiceDetail slug="construction" />;
  if (matchRenovations) return <ServiceDetail slug="renovations" />;
  if (matchTiling) return <ServiceDetail slug="tiling" />;
  if (matchCleaning) return <ServiceDetail slug="cleaning" />;

  return <ServicesOverview />;
}