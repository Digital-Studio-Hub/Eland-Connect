import { Link } from "wouter";
import { Phone, MessageCircle, Check, ArrowRight, Award, Users, Target, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/layout";

import aboutImage from "@assets/stock_images/modern_house_constru_a41f512d.webp";
import teamImage from "@assets/stock_images/home_renovation_inte_db069ffd.webp";
import lekkerBadge from "@assets/Badge_Level_1_1767012155779.png";

const PHONE_NUMBER = "0845694531";
const WHATSAPP_NUMBER = "27845694531";

const values = [
  {
    icon: Award,
    title: "Quality Workmanship",
    description: "We take pride in delivering excellent results on every project, no matter the size.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We listen to your needs and deliver accordingly.",
  },
  {
    icon: Target,
    title: "Attention to Detail",
    description: "Every project receives careful attention to ensure the best possible outcome.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "We show up on time, communicate clearly, and complete work as promised.",
  },
];

const benefits = [
  "Experienced in construction, renovations, and cleaning",
  "Focus on helping people building or renovating homes and shops",
  "Honest communication throughout every project",
  "Affordable pricing without compromising quality",
  "Dependable service across all projects big or small",
  "Safe, clean, and well-finished spaces guaranteed",
];

export default function About() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-about-heading">
              About The Eland Building
            </h1>
            <p className="text-lg text-muted-foreground">
              The Eland Building Construction and Cleaning Services was established to help people 
              who are building, renovating, or maintaining their homes and shops.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-story-heading">
                Our Story
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The Eland Building Construction and Cleaning Services is owned and led by Christopher Nawu. 
                With hands-on experience in construction, renovations, and cleaning, Christopher founded 
                this business to provide reliable and quality services to homeowners and businesses.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our goal is simple: help our clients achieve safe, clean, and well-finished spaces. 
                Whether you're building a new home, renovating your shop, or need professional cleaning 
                after construction, we're here to help.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We focus on delivering quality workmanship, honest communication, and dependable 
                service across all projects — big or small.
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={lekkerBadge}
                  alt="Certified by Lekker Network Level 1"
                  className="h-20 w-auto"
                />
                <div>
                  <p className="font-semibold text-foreground">Certified Service Provider</p>
                  <p className="text-sm text-muted-foreground">Lekker Network Level 1</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={aboutImage}
                alt="The Eland Building team at work"
                className="rounded-md w-full aspect-[4/3] object-cover shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-values-heading">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do at The Eland Building.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={teamImage}
                alt="Quality renovation work"
                className="rounded-md w-full aspect-[4/3] object-cover shadow-lg"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-why-heading">
                Why Work With Us?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We understand that choosing a contractor is a big decision. Here's what sets us apart:
              </p>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#25D366]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-[#25D366]" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#1E3A5F]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-testid="text-cta-heading">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your building, renovation, or cleaning needs.
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
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-white/30 text-white hover:bg-white/10 text-lg px-8"
                data-testid="button-cta-contact"
              >
                Contact Form
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}