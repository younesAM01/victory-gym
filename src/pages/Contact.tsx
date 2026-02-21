import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading title={t("contact.title")} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-body text-sm text-muted-foreground block mb-2">{t("contact.name")}</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-muted-foreground block mb-2">{t("contact.email")}</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-muted-foreground block mb-2">{t("contact.message")}</label>
                  <textarea
                    rows={5}
                    required
                    className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className={`inline-flex items-center gap-2 font-heading text-lg px-8 py-4 rounded-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 ${
                    sent
                      ? "bg-primary/20 text-primary border border-primary"
                      : "bg-primary text-primary-foreground hover:shadow-[var(--neon-glow-strong)]"
                  }`}
                >
                  {sent ? "Sent! ✓" : <>{t("contact.send")} <Send size={18} /></>}
                </button>
              </form>
            </motion.div>

            {/* Info + Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glass-card rounded-sm p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">{t("contact.address")}</h4>
                    <p className="text-muted-foreground font-body text-sm">Bd Mohammed V, Casablanca, Morocco</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground font-body text-sm">+212 522 123 456</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground font-body text-sm">info@victorygym.ma</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">{t("contact.hours")}</h4>
                    <div className="text-muted-foreground font-body text-sm space-y-1">
                      <p>Mon - Fri: 06:00 - 23:00</p>
                      <p>Saturday: 07:00 - 22:00</p>
                      <p>Sunday: 08:00 - 20:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-sm overflow-hidden h-64 md:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8477506689036!2d-7.6191!3d33.5731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzIzLjIiTiA3wrAzNycwOC44Ilc!5e0!3m2!1sen!2sma!4v1620000000000!5m2!1sen!2sma"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  title="Victory Gym Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
