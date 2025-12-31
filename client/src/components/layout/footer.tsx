import { Link } from "wouter";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import logoWhite from "@assets/White_Logo_1767013773185.png";
import lekkerBadge from "@assets/Badge_Level_1_1767012155779.png";
import lekkerLogo from "@assets/lekkerlogo_1767164177201.png";

const PHONE_NUMBER = "0845694531";
const WHATSAPP_NUMBER = "27845694531";

const services = [
  { name: "Construction & Building", href: "/services/construction" },
  { name: "Renovations", href: "/services/renovations" },
  { name: "Tiling Services", href: "/services/tiling" },
  { name: "Cleaning Services", href: "/services/cleaning" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

export function Footer() {
  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in your building and cleaning services.`,
      "_blank",
    );
  };

  return (
    <footer className="bg-[#1E3A5F] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="space-y-4">
            <img
              src={logoWhite}
              alt="The Eland Building Construction & Cleaning Services"
              className="h-16 w-auto"
            />
            <p className="text-sm text-white/80 leading-relaxed">
              Reliable construction, renovations, tiling, and cleaning services.
              Helping homeowners and businesses build and maintain their
              properties.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                    data-testid={`link-footer-${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                    data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
                  data-testid="link-footer-phone"
                >
                  <Phone className="h-4 w-4 text-[#F39A1E]" />
                  084 569 4531
                </a>
              </li>
              <li>
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
                  data-testid="button-footer-whatsapp"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  WhatsApp Us
                </button>
              </li>
              <li>
                <a
                  href="mailto:info@theelandbuildingconandcleaningserv.co.za"
                  className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
                  data-testid="link-footer-email"
                >
                  <Mail className="h-4 w-4 text-[#F39A1E]" />
                  Get in Touch
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/80">
                <MapPin className="h-4 w-4 text-[#F39A1E] mt-0.5 flex-shrink-0" />
                <span>South Africa</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img
              src={lekkerBadge}
              alt="Certified by Lekker Network"
              className="h-24 w-auto"
            />
            <div className="flex flex-col item-center justify-center">
              <img src={lekkerLogo} alt="Lekker" className="h-16 w-auto" />
              <p className="text-xs text-white/60 text-center">
                Powered by Lekker Network
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} The Eland Building Construction &
            Cleaning Services. All rights reserved.
          </p>
          <p className="text-sm text-white/60">Owner: Christopher Nawu</p>
        </div>
      </div>
    </footer>
  );
}
