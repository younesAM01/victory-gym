"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-gym.jpg";
import programBB from "@/assets/program-bodybuilding.jpg";
import programCardio from "@/assets/program-cardio.jpg";
import programCoaching from "@/assets/program-coaching.jpg";
import programWL from "@/assets/program-weightloss.jpg";
import { ArrowRight, Star, ChevronRight } from "lucide-react";

const programs = [
  { img: programBB, key: "programs.bodybuilding", price: "300 MAD" },
  { img: programCardio, key: "programs.cardio", price: "250 MAD" },
  { img: programCoaching, key: "programs.coaching", price: "500 MAD" },
  { img: programWL, key: "programs.weightloss", price: "350 MAD" },
];

const testimonials = [
  { name: "Youssef B.", text: "Victory Gym changed my life. Lost 25kg in 6 months with their amazing coaches!", rating: 5 },
  { name: "Fatima Z.", text: "The best gym in Laayoune. Clean, professional, and the community is incredible.", rating: 5 },
  { name: "Karim M.", text: "Personal coaching here is next level. My trainer pushed me beyond my limits.", rating: 5 },
];

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg.src || heroImg} alt="Victory Gym" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 gradient-overlay" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-primary text-sm md:text-base tracking-[0.3em] uppercase mb-6"
          >
            {t("hero.subtitle")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <span className="text-foreground">{t("hero.title1")}</span>
            <br />
            <span className="text-primary neon-text">{t("hero.title2")}</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading text-lg px-8 py-4 rounded-sm tracking-wider uppercase hover:shadow-[var(--neon-glow-strong)] transition-all duration-300 hover:scale-105"
            >
              {t("hero.join")} <ArrowRight size={20} />
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 border-2 border-foreground/30 text-foreground font-heading text-lg px-8 py-4 rounded-sm tracking-wider uppercase hover:border-primary hover:text-primary transition-all duration-300"
            >
              {t("hero.explore")} <ChevronRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={2500} suffix="+" label={t("stats.members")} />
          <AnimatedCounter end={15} label={t("stats.coaches")} />
          <AnimatedCounter end={800} suffix="+" label={t("stats.transformations")} />
          <AnimatedCounter end={8} label={t("stats.years")} />
        </div>
      </section>

      {/* Programs Preview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading title={t("programs.title")} subtitle={t("programs.subtitle")} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((prog, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-sm hover-lift"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={prog.img.src || prog.img}
                    alt={t(prog.key)}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground">{t(prog.key)}</h3>
                  <p className="text-primary font-heading text-lg mt-1">{prog.price}<span className="text-sm text-muted-foreground">{t("programs.month")}</span></p>
                  <Link
                    href="/programs"
                    className="mt-3 inline-flex items-center gap-1 text-sm text-primary font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    {t("programs.book")} <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto">
          <SectionHeading title={t("testimonials.title")} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((test, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card rounded-sm p-8"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: test.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 font-body text-sm leading-relaxed mb-4">"{test.text}"</p>
                <p className="font-heading text-primary font-semibold">{test.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8 max-w-2xl mx-auto">
              {t("cta.subtitle")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading text-lg px-10 py-4 rounded-sm tracking-wider uppercase hover:shadow-[var(--neon-glow-strong)] transition-all duration-300 hover:scale-105"
            >
              {t("cta.button")} <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;

