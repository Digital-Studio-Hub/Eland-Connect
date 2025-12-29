import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { StickyCTA, WhatsAppFloat } from "./sticky-cta";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pb-20 md:pb-0">{children}</main>
      <Footer />
      <StickyCTA />
      <WhatsAppFloat />
    </div>
  );
}