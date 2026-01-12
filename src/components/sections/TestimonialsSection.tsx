"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionTitle } from "@/components/ui";

// Dados de exemplo - serão substituídos por depoimentos reais
const testimonials = [
  {
    id: 1,
    quote:
      "A Debora entendeu exatamente o que queríamos para nossa casa. O resultado superou todas as expectativas. Cada detalhe foi pensado com carinho e profissionalismo.",
    author: "Maria e João Silva",
    project: "Residência Morumbi",
  },
  {
    id: 2,
    quote:
      "Profissionalismo impecável do início ao fim. A Debora transformou nosso escritório em um espaço que reflete nossa identidade e aumentou a produtividade da equipe.",
    author: "Carlos Mendes",
    project: "Escritório Tech Solutions",
  },
  {
    id: 3,
    quote:
      "Reforma completa do nosso apartamento com muito bom gosto e funcionalidade. A Debora tem um olhar único para aproveitar cada metro quadrado.",
    author: "Ana Paula Costa",
    project: "Apartamento Itaim",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-28 md:py-36 bg-muted overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <SectionTitle
          subtitle="Depoimentos"
          title="O Que Dizem Nossos Clientes"
          description="A satisfação dos nossos clientes é o nosso maior reconhecimento."
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-16 md:mt-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="p-8 md:p-10 bg-background border border-border h-full hover:border-accent/50 hover:shadow-lg transition-all duration-300">
                {/* Quote Icon */}
                <Quote
                  size={40}
                  className="text-accent/40 mb-6"
                  strokeWidth={1}
                />

                {/* Quote Text */}
                <blockquote className="text-foreground leading-relaxed mb-8 text-[15px]">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="border-t border-border pt-6">
                  <p className="font-medium text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.project}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
