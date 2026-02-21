import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-12 md:mb-16"
  >
    <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground tracking-wider">
      {title}
    </h2>
    <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
    {subtitle && (
      <p className="text-muted-foreground font-body mt-4 text-lg">{subtitle}</p>
    )}
  </motion.div>
);

export default SectionHeading;
