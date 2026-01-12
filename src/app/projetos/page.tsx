"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CTASection } from "@/components/sections";
import Image from "next/image";

// Dados de exemplo - serão substituídos por dados reais do CMS
const categories = [
  { id: "todos", label: "Todos" },
  { id: "residencial", label: "Residencial" },
  { id: "comercial", label: "Comercial" },
  { id: "interiores", label: "Interiores" },
];

const projects = [
  {
    id: 1,
    title: "Residência Contemporânea",
    category: "residencial",
    area: "280m²",
    year: "2024",
    location: "Mirassol, SP",
    slug: "residencia-contemporanea",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Apartamento Moderno",
    category: "interiores",
    area: "120m²",
    year: "2024",
    location: "São José do Rio Preto, SP",
    slug: "apartamento-moderno",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Clínica Odontológica",
    category: "comercial",
    area: "150m²",
    year: "2024",
    location: "Mirassol, SP",
    slug: "clinica-odontologica",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1468&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Casa de Campo",
    category: "residencial",
    area: "350m²",
    year: "2023",
    location: "Região de Rio Preto",
    slug: "casa-de-campo",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1453&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Escritório Corporativo",
    category: "comercial",
    area: "200m²",
    year: "2023",
    location: "São José do Rio Preto, SP",
    slug: "escritorio-corporativo",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1469&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Living Integrado",
    category: "interiores",
    area: "85m²",
    year: "2023",
    location: "Mirassol, SP",
    slug: "living-integrado",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1458&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Residência Urbana",
    category: "residencial",
    area: "220m²",
    year: "2023",
    location: "São José do Rio Preto, SP",
    slug: "residencia-urbana",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Loja Conceito",
    category: "comercial",
    area: "100m²",
    year: "2023",
    location: "Mirassol, SP",
    slug: "loja-conceito",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Suíte Master",
    category: "interiores",
    area: "45m²",
    year: "2024",
    location: "São José do Rio Preto, SP",
    slug: "suite-master",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1480&auto=format&fit=crop",
  },
];

export default function ProjetosPage() {
  const [activeCategory, setActiveCategory] = useState("todos");

  const filteredProjects =
    activeCategory === "todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
            >
              Portfólio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6"
            >
              Nossos Projetos
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Uma seleção dos trabalhos realizados em Mirassol, São José do Rio Preto 
              e região. Cada projeto conta uma história única de transformação.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-custom">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 text-sm tracking-wide transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
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
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="w-12 h-12 border border-primary-foreground rounded-full flex items-center justify-center">
                          <ArrowUpRight
                            className="text-primary-foreground"
                            size={20}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="uppercase tracking-wider">
                          {categories.find((c) => c.id === project.category)?.label}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        <span>{project.area}</span>
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl text-foreground group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.location} • {project.year}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground">
                Nenhum projeto encontrado nesta categoria.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
