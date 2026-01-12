"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Home, Palette, Lightbulb, FileCheck, ShoppingBag, Building2 } from "lucide-react";
import { SectionTitle } from "@/components/ui";

const services = [
  {
    icon: Home,
    title: "Projeto Arquitetônico",
    description:
      "Projetos completos para residências e comércios, do estudo à execução.",
    href: "/servicos#arquitetonico",
  },
  {
    icon: Palette,
    title: "Design de Interiores",
    description:
      "Ambientes harmoniosos que combinam estética, funcionalidade e sua identidade.",
    href: "/servicos#interiores",
  },
  {
    icon: Lightbulb,
    title: "Projeto de Iluminação",
    description:
      "Iluminação que valoriza os espaços com conforto visual e eficiência.",
    href: "/servicos#iluminacao",
  },
  {
    icon: FileCheck,
    title: "Regularização de Imóveis",
    description:
      "Documentação completa para regularizar seu imóvel junto aos órgãos.",
    href: "/servicos#regularizacao",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container-custom">
        {/* Header */}
        <SectionTitle
          subtitle="Serviços"
          title="Como Posso Ajudar"
          description="Soluções completas em arquitetura, do conceito à execução, com atendimento humanizado."
          light
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group block p-8 md:p-10 border border-primary-foreground/10 hover:border-accent/50 hover:bg-primary-foreground/5 transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 border border-primary-foreground/20 flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors duration-300">
                    <service.icon size={24} strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-serif text-xl md:text-2xl mb-3 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-primary-foreground/40 group-hover:text-accent transition-colors duration-300">
                      Saiba mais
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 text-sm tracking-wide text-primary-foreground/70 hover:text-accent transition-colors"
          >
            Ver todos os serviços
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
