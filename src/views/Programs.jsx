"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppOrderForm from "@/components/WhatsAppOrderForm";
import { Check, ArrowRight } from "lucide-react";
import programBB from "@/assets/program-bodybuilding.jpg";
import programCardio from "@/assets/program-cardio.jpg";
import programCoaching from "@/assets/program-coaching.jpg";
import programWL from "@/assets/program-weightloss.jpg";

const programs = [
  {
    img: programBB,
    key: "programs.bodybuilding",
    price: "300 MAD",
    benefits: ["Muscle building focus", "Custom meal plans", "Progressive overload tracking", "Weekly body assessments"],
    description: "Build lean muscle mass with our structured bodybuilding program designed by IFBB-certified trainers.",
  },
  {
    img: programCardio,
    key: "programs.cardio",
    price: "250 MAD",
    benefits: ["Fat burning workouts", "Heart rate monitoring", "Group sessions available", "Endurance building"],
    description: "High-intensity interval training combined with cardio to maximize fat loss and cardiovascular health.",
  },
  {
    img: programCoaching,
    key: "programs.coaching",
    price: "500 MAD",
    benefits: ["1-on-1 sessions", "Personalized programs", "Nutrition guidance", "24/7 coach support"],
    description: "Get dedicated attention from our top coaches with fully personalized training and nutrition programs.",
  },
  {
    img: programWL,
    key: "programs.weightloss",
    price: "350 MAD",
    benefits: ["Calorie deficit planning", "Cardio & strength mix", "Weekly weigh-ins", "Body composition tracking"],
    description: "A comprehensive weight loss program combining diet, cardio, and strength training for lasting results.",
  },
];

const Programs = () => {
  const { t } = useLanguage();
  const [orderForm, setOrderForm] = useState(null);

  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading title={t("programs.title")} subtitle={t("programs.subtitle")} />
          <div className="space-y-16">
            {programs.map((prog, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-sm group">
                    <img
                      src={prog.img.src || prog.img}
                      alt={t(prog.key)}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/20" />
                  </div>
                </div>
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {t(prog.key)}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed mb-6">
                    {prog.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {prog.benefits.map((b, j) => (
                      <li key={j} className="flex items-center gap-3 text-foreground/80 font-body text-sm">
                        <Check size={16} className="text-primary shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-6">
                    <div>
                      <span className="font-heading text-3xl font-bold text-primary">{prog.price}</span>
                      <span className="text-muted-foreground text-sm">{t("programs.month")}</span>
                    </div>
                    <button
                      onClick={() => setOrderForm({ name: t(prog.key), price: prog.price + t("programs.month"), type: "program" })}
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading px-6 py-3 rounded-sm tracking-wider uppercase hover:shadow-[var(--neon-glow-strong)] transition-all duration-300 hover:scale-105"
                    >
                      {t("programs.book")} <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Yearly Subscription */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center glass-card rounded-sm p-10 neon-border border"
          >
            <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-2">Best Value</p>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Yearly Subscription
            </h3>
            <p className="text-muted-foreground font-body mb-6">
              Full access to all gym facilities, equipment, group classes, and programs — 12 months, no limits.
            </p>
            <ul className="space-y-3 mb-8 text-left max-w-sm mx-auto">
              {["Unlimited gym access", "All group classes included", "All training programs", "Locker & shower access", "Priority booking"].map((b, j) => (
                <li key={j} className="flex items-center gap-3 text-foreground/80 font-body text-sm">
                  <Check size={16} className="text-primary shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mb-6">
              <span className="font-heading text-5xl font-bold text-primary">2,499 MAD</span>
              <span className="text-muted-foreground text-sm"> / year</span>
            </div>
            <button
              onClick={() => setOrderForm({ name: "Yearly Subscription — Full Access", price: "2,499 MAD/year", type: "subscription" })}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading text-lg px-10 py-4 rounded-sm tracking-wider uppercase hover:shadow-[var(--neon-glow-strong)] transition-all duration-300 hover:scale-105"
            >
              Subscribe Now <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      <WhatsAppOrderForm
        isOpen={!!orderForm}
        onClose={() => setOrderForm(null)}
        itemName={orderForm?.name || ""}
        itemPrice={orderForm?.price}
        itemType={orderForm?.type || "program"}
      />
    </div>
  );
};

export default Programs;

