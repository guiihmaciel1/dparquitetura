"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";
import { SectionTitle } from "@/components/ui";
import Image from "next/image";

const stats = [
  { number: "10+", label: "Anos de Experiência" },
  { number: "2016", label: "Formação UNIRP" },
  { number: "100%", label: "Dedicação" },
];

export function AboutPreview() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <Image
                src="/debora.jpeg"
                alt="Débora Pieri - Arquiteta"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* CAU badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute bottom-4 left-4 bg-accent text-primary p-5 shadow-lg"
            >
              <Award size={20} className="mb-1" />
              <span className="block text-xs tracking-wider uppercase">CAU</span>
              <span className="block text-sm font-semibold">A135139-7</span>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div className="pt-8 lg:pt-0">
            <SectionTitle
              subtitle="Sobre"
              title="Débora Pieri"
              align="left"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 space-y-6"
            >
              <p className="text-muted-foreground leading-relaxed">
                Arquiteta formada pela UNIRP em 2016, com pós-graduação em Design de 
                Interiores e Composições de Jardins. Minha paixão é criar espaços que 
                contam histórias e refletem a personalidade única de cada cliente.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                O que me diferencia é o <strong className="text-foreground">trabalho humanizado</strong>: a sensibilidade 
                e paciência em ouvir cada detalhe. Me importo com o sentimento sobre 
                aquele lugar. <em>Um local sem sentimento é apenas um local. Um espaço 
                que importa é um lugar.</em>
              </p>
            </motion.div>

            {/* Style Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 p-5 bg-muted border-l-4 border-accent"
            >
              <p className="text-sm text-muted-foreground">Estilo Arquitetônico</p>
              <p className="mt-1 font-serif text-xl text-accent">Contemporâneo Urbano</p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <span className="block text-2xl md:text-3xl font-serif text-accent">
                    {stat.number}
                  </span>
                  <span className="text-xs text-muted-foreground tracking-wider uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12"
            >
              <Link
                href="/sobre"
                className="group inline-flex items-center gap-2 text-sm tracking-wide text-foreground hover:text-accent transition-colors"
              >
                Conheça minha história
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
