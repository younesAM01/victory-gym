import { LanguageProvider } from "@/contexts/LanguageContext";
import { CartProvider } from "@/contexts/CartContext";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import "@/index.css";

export const metadata = {
  title: "Victory Gym - Train Hard. Become Stronger.",
  description: "Morocco's Premier Fitness Destination",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <LanguageProvider>
          <CartProvider>
            <TooltipProvider>
              <ScrollToTop />
              <Toaster />
              <Sonner />
              <Navbar />
              <main>{children}</main>
              <Footer />
              <WhatsAppButton />
            </TooltipProvider>
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
