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
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <SectionTitle
          subtitle="Depoimentos"
          title="O Que Dizem Nossos Clientes"
          description="A satisfação dos nossos clientes é o nosso maior reconhecimento."
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className="p-8 bg-muted h-full">
                {/* Quote Icon */}
                <Quote
                  size={32}
                  className="text-accent/30 mb-6"
                  strokeWidth={1}
                />

                {/* Quote Text */}
                <blockquote className="text-foreground/80 leading-relaxed mb-8">
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
