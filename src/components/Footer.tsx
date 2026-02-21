import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">
              <span className="text-primary neon-text">VICTORY</span> GYM
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              {t("footer.tagline")}
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["home", "programs", "shop", "coaches", "gallery", "contact"].map((key) => (
                <Link
                  key={key}
                  to={key === "home" ? "/" : `/${key}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-body"
                >
                  {t(`nav.${key}`)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-foreground">{t("contact.hours")}</h4>
            <div className="space-y-2 text-sm text-muted-foreground font-body">
              <p>Mon - Fri: 06:00 - 23:00</p>
              <p>Saturday: 07:00 - 22:00</p>
              <p>Sunday: 08:00 - 20:00</p>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-foreground">{t("contact.address")}</h4>
            <div className="space-y-3 text-sm text-muted-foreground font-body">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                Bd Mohammed V, Casablanca, Morocco
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-primary shrink-0" />
                +212 522 123 456
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-primary shrink-0" />
                info@victorygym.ma
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm font-body">
            © 2026 Victory Gym. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
