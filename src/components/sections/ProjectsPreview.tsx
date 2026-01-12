"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionTitle } from "@/components/ui";
import Image from "next/image";

// Dados de exemplo - serão substituídos por dados reais
const projects = [
  {
    id: 1,
    title: "Residência Contemporânea",
    category: "Residencial",
    area: "280m²",
    year: "2024",
    slug: "residencia-contemporanea",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Apartamento Moderno",
    category: "Interiores",
    area: "120m²",
    year: "2024",
    slug: "apartamento-moderno",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Clínica Odontológica",
    category: "Comercial",
    area: "150m²",
    year: "2024",
    slug: "clinica-odontologica",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1468&auto=format&fit=crop",
  },
];

export function ProjectsPreview() {
  return (
    <section className="py-24 md:py-32 bg-muted">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <SectionTitle
            subtitle="Portfólio"
            title="Projetos em Destaque"
            description="Uma seleção dos trabalhos mais recentes em Mirassol e região."
            align="left"
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/projetos"
              className="group inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 text-sm tracking-wide hover:border-accent hover:text-accent transition-all duration-300"
            >
              Ver Todos
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/projetos/${project.slug}`}>
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-12 h-12 border border-primary-foreground rounded-full flex items-center justify-center">
                      <ArrowUpRight className="text-primary-foreground" size={20} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="uppercase tracking-wider">{project.category}</span>
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    <span>{project.area}</span>
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
