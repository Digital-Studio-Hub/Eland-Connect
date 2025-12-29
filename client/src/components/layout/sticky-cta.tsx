import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "0845694531";
const WHATSAPP_NUMBER = "27845694531";

export function StickyCTA() {
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
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden flex gap-2">
      <Button
        onClick={handleCall}
        size="lg"
        className="flex-1 gap-2 bg-primary hover:bg-primary/90 shadow-lg"
        data-testid="button-sticky-call"
      >
        <Phone className="h-5 w-5" />
        Call Now
      </Button>
      <Button
        onClick={handleWhatsApp}
        size="lg"
        className="flex-1 gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg"
        data-testid="button-sticky-whatsapp"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </Button>
    </div>
  );
}

export function WhatsAppFloat() {
  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in your building and cleaning services.`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg transition-transform hover:scale-105"
      aria-label="Chat on WhatsApp"
      data-testid="button-whatsapp-float"
    >
      <MessageCircle className="h-7 w-7" />
    </button>
  );
}