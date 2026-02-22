"use client";
import { motion } from "framer-motion";

const SectionHeading = ({ title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="text-center mb-12 md:mb-16"
  >
    <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground tracking-wider">
      {title}
    </h2>
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full origin-center"
    />
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-muted-foreground font-body mt-4 text-lg"
      >
        {subtitle}
      </motion.p>
    )}
  </motion.div>
);

export default SectionHeading;

