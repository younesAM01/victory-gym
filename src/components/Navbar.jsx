"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Cart from "@/components/Cart";

const navItems = [
  { path: "/", key: "nav.home" },
  { path: "/programs", key: "nav.programs" },
  { path: "/shop", key: "nav.shop" },
  { path: "/coaches", key: "nav.coaches" },
  { path: "/gallery", key: "nav.gallery" },
  { path: "/contact", key: "nav.contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link href="/" className="font-heading text-2xl md:text-3xl font-bold tracking-wider">
          <span className="text-primary neon-text">VICTORY</span>
          <span className="text-foreground"> GYM</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`font-heading text-sm tracking-widest uppercase transition-colors duration-300 hover:text-primary ${
                pathname === item.path ? "text-primary" : "text-foreground/70"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-1 bg-secondary rounded-full p-1">
            {["en", "fr", "ar"].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-3 py-1 rounded-full text-xs font-body font-semibold uppercase transition-all duration-300 ${
                  language === lang
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
          <Cart />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-lg border-b border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-heading text-lg tracking-widest uppercase transition-colors ${
                    pathname === item.path ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {t(item.key)}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  {["en", "fr", "ar"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className={`px-4 py-2 rounded-full text-xs font-body font-semibold uppercase transition-all ${
                        language === lang
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
                <Cart />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

