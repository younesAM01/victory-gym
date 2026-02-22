"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedCounter = ({ end, suffix = "", label, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="font-heading text-4xl md:text-5xl font-bold text-primary neon-text">
        {count}
        {suffix}
      </div>
      <div className="font-body text-sm text-muted-foreground mt-2 uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
};

export default AnimatedCounter;

