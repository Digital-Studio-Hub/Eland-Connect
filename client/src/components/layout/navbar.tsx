import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/Main_Logo_1767013769043.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const PHONE_NUMBER = "0845694531";
const WHATSAPP_NUMBER = "27845694531";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2" data-testid="link-logo">
            <img 
              src={logoImage} 
              alt="The Eland Building Construction & Cleaning Services" 
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`font-medium ${
                    location === link.href
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground"
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCall}
              className="gap-2"
              data-testid="button-call-header"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">084 569 4531</span>
            </Button>
            <Button
              size="sm"
              onClick={handleWhatsApp}
              className="gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white border-[#20BD5A]"
              data-testid="button-whatsapp-header"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden lg:inline">WhatsApp</span>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2" data-testid="nav-mobile">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start font-medium ${
                    location === link.href
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <div className="flex gap-2 mt-4 pt-4 border-t border-border">
              <Button
                variant="outline"
                onClick={handleCall}
                className="flex-1 gap-2"
                data-testid="button-call-mobile"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
              <Button
                onClick={handleWhatsApp}
                className="flex-1 gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white"
                data-testid="button-whatsapp-mobile"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}