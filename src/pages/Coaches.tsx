import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import { Instagram, Facebook } from "lucide-react";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import coach3 from "@/assets/coach-3.jpg";

const coaches = [
  {
    img: coach1,
    name: "Rachid El Amrani",
    specialty: "Bodybuilding & Strength",
    experience: "12 years",
    bio: "IFBB Pro certified coach specializing in competition prep and advanced hypertrophy programs.",
  },
  {
    img: coach3,
    name: "Omar Tazi",
    specialty: "Weight Loss & Nutrition",
    experience: "10 years",
    bio: "Sports nutritionist and certified coach helping clients achieve sustainable body transformations.",
  },
];

const Coaches = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading title={t("coaches.title")} subtitle={t("coaches.subtitle")} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coaches.map((coach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card rounded-sm overflow-hidden group hover-lift"
              >
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={coach.img}
                    alt={coach.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
                <div className="p-6 -mt-16 relative z-10">
                  <h3 className="font-heading text-2xl font-bold text-foreground">{coach.name}</h3>
                  <p className="text-primary font-heading text-sm tracking-wider uppercase mt-1">{coach.specialty}</p>
                  <p className="text-muted-foreground font-body text-xs mt-1">{coach.experience} experience</p>
                  <p className="text-foreground/70 font-body text-sm mt-3 leading-relaxed">{coach.bio}</p>
                  <div className="flex gap-3 mt-4">
                    {[Instagram, Facebook].map((Icon, j) => (
                      <a
                        key={j}
                        href="#"
                        className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Coaches;
