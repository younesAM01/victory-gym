import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import heroImg from "@/assets/hero-gym.jpg";
import programBB from "@/assets/program-bodybuilding.jpg";
import programCardio from "@/assets/program-cardio.jpg";
import programCoaching from "@/assets/program-coaching.jpg";

const images = [
  { src: gallery1, span: "col-span-2 row-span-1" },
  { src: gallery2, span: "col-span-1 row-span-2" },
  { src: gallery3, span: "col-span-1 row-span-1" },
  { src: gallery4, span: "col-span-1 row-span-1" },
  { src: heroImg, span: "col-span-2 row-span-1" },
  { src: programBB, span: "col-span-1 row-span-1" },
  { src: programCardio, span: "col-span-1 row-span-1" },
  { src: programCoaching, span: "col-span-1 row-span-1" },
];

const Gallery = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading title={t("gallery.title")} />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`${img.span} overflow-hidden rounded-sm group cursor-pointer relative`}
              >
                <img
                  src={img.src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
