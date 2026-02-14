"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionTitle({
  subtitle,
  title,
  description,
  align = "center",
  light = false,
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const textColor = light ? "text-white" : "text-foreground";
  const mutedColor = light
    ? "text-white/70"
    : "text-muted-foreground";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-block text-xs tracking-[0.3em] uppercase ${mutedColor} mb-4`}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`font-serif text-3xl md:text-4xl lg:text-5xl font-medium ${textColor} mb-4`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-base md:text-lg ${mutedColor} leading-relaxed`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
