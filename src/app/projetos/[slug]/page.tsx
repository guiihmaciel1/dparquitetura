"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, MapPin, Ruler, Calendar } from "lucide-react";
import { CTASection } from "@/components/sections";
import { use } from "react";
import Image from "next/image";

// Dados de exemplo - serão substituídos por dados reais do CMS
const projectsData: Record<string, {
  title: string;
  category: string;
  area: string;
  year: string;
  location: string;
  description: string;
  challenge: string;
  solution: string;
  images: string[];
}> = {
  "residencia-contemporanea": {
    title: "Residência Contemporânea",
    category: "Residencial",
    area: "280m²",
    year: "2024",
    location: "Mirassol, SP",
    description:
      "Projeto residencial contemporâneo urbano que integra arquitetura e natureza, criando espaços de convivência fluidos e iluminados. O estilo prático e esteticamente imponente utiliza materiais atemporais.",
    challenge:
      "O desafio era criar uma residência que atendesse às necessidades de uma família moderna, mantendo a privacidade sem perder a conexão com o exterior, em um terreno urbano com vizinhos próximos.",
    solution:
      "Desenvolvemos um projeto com grandes aberturas voltadas para o jardim interno, garantindo luz natural abundante e ventilação cruzada, enquanto a fachada principal mantém a privacidade da rua com elementos vazados.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1453&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1470&auto=format&fit=crop",
    ],
  },
  "apartamento-moderno": {
    title: "Apartamento Moderno",
    category: "Interiores",
    area: "120m²",
    year: "2024",
    location: "São José do Rio Preto, SP",
    description:
      "Reforma completa de apartamento com foco em criar ambientes integrados e funcionais para um jovem casal, mantendo o estilo contemporâneo urbano com materiais de baixa manutenção.",
    challenge:
      "Transformar um apartamento com planta tradicional e compartimentada em um espaço moderno e integrado, otimizando cada metro quadrado.",
    solution:
      "Removemos paredes não estruturais, criando uma área social ampla e fluida. A cozinha foi integrada à sala com uma ilha multifuncional, e os dormitórios ganharam closets planejados.",
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1458&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1480&auto=format&fit=crop",
    ],
  },
  "clinica-odontologica": {
    title: "Clínica Odontológica",
    category: "Comercial",
    area: "150m²",
    year: "2024",
    location: "Mirassol, SP",
    description:
      "Projeto comercial para clínica odontológica moderna, unindo funcionalidade, conforto para pacientes e identidade visual da marca em um ambiente acolhedor.",
    challenge:
      "Criar um ambiente que transmitisse confiança e modernidade, reduzindo a ansiedade típica de consultórios odontológicos, respeitando todas as normas sanitárias.",
    solution:
      "Utilizamos uma paleta de cores suaves, iluminação indireta e materiais naturais para criar um ambiente acolhedor. O fluxo de pacientes foi otimizado para garantir privacidade e eficiência.",
    images: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1468&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1469&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1470&auto=format&fit=crop",
    ],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjetoPage({ params }: PageProps) {
  const { slug } = use(params);
  const project = projectsData[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl mb-4">Projeto não encontrado</h1>
          <Link href="/projetos" className="text-accent hover:underline">
            Voltar aos projetos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 md:pt-44 lg:pt-48 md:pb-20 bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Voltar aos projetos
            </Link>
          </motion.div>

          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block text-xs tracking-[0.3em] uppercase text-accent mb-4"
            >
              {project.category}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-8"
            >
              {project.title}
            </motion.h1>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Ruler size={16} />
                <span>{project.area}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{project.year}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="bg-background">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative aspect-[21/9]"
        >
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </section>

      {/* Project Details */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="font-serif text-2xl md:text-3xl mb-6">
                Sobre o Projeto
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.description}
              </p>
            </motion.div>

            {/* Sidebar Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Categoria
                </h3>
                <p className="font-medium">{project.category}</p>
              </div>
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Área
                </h3>
                <p className="font-medium">{project.area}</p>
              </div>
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Localização
                </h3>
                <p className="font-medium">{project.location}</p>
              </div>
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Ano
                </h3>
                <p className="font-medium">{project.year}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl mb-6">
                O Desafio
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl mb-6">
                A Solução
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-2xl md:text-3xl mb-12 text-center"
          >
            Galeria do Projeto
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative overflow-hidden ${
                  index === 0 ? "md:col-span-2 aspect-[21/9]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={image}
                  alt={`${project.title} - Imagem ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
