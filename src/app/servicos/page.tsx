"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui";
import { CTASection } from "@/components/sections";
import {
  Home,
  Building2,
  Palette,
  Lightbulb,
  FileCheck,
  ShoppingBag,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: "arquitetonico",
    icon: Home,
    title: "Projeto Arquitetônico",
    description:
      "Desenvolvemos projetos completos para residências e estabelecimentos comerciais, desde o estudo de viabilidade até o projeto executivo. Cada projeto é pensado para unir forma, função e a identidade de quem vai habitar o espaço.",
    features: [
      "Estudo de viabilidade",
      "Projeto arquitetônico completo",
      "Plantas, cortes e fachadas",
      "Projeto executivo detalhado",
      "Acompanhamento de obra",
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: "interiores",
    icon: Palette,
    title: "Design de Interiores",
    description:
      "Transformamos ambientes internos em espaços funcionais e esteticamente harmoniosos. Com especialização em Design de Interiores e Composições de Jardins, oferecemos uma visão completa e integrada do seu projeto.",
    features: [
      "Projeto de layout",
      "Especificação de materiais",
      "Composições de jardins",
      "Móveis planejados",
      "Consultoria de decoração",
    ],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "iluminacao",
    icon: Lightbulb,
    title: "Projeto de Iluminação",
    description:
      "A iluminação é essencial para criar a atmosfera certa em cada ambiente. Desenvolvemos projetos luminotécnicos que valorizam os espaços, proporcionando conforto visual e eficiência energética.",
    features: [
      "Estudo luminotécnico",
      "Especificação de luminárias",
      "Automação de iluminação",
      "Iluminação cênica",
      "Eficiência energética",
    ],
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: "consultoria",
    icon: ShoppingBag,
    title: "Assessoria em Compras",
    description:
      "Oferecemos assessoria completa para auxiliar na escolha de materiais, móveis e acabamentos. Com conhecimento técnico e estético, ajudamos você a fazer as melhores escolhas dentro do seu orçamento.",
    features: [
      "Seleção de materiais",
      "Acompanhamento em lojas",
      "Negociação com fornecedores",
      "Controle de orçamento",
      "Cronograma de compras",
    ],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1458&auto=format&fit=crop",
  },
  {
    id: "regularizacao",
    icon: FileCheck,
    title: "Regularização de Imóveis",
    description:
      "Cuidamos de toda a documentação necessária para regularizar seu imóvel junto aos órgãos competentes. Desde a análise da situação atual até a obtenção do habite-se e averbação.",
    features: [
      "Análise documental",
      "Projeto de regularização",
      "Aprovação em prefeitura",
      "Habite-se",
      "Averbação em cartório",
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: "comercial",
    icon: Building2,
    title: "Projetos Comerciais",
    description:
      "Criamos espaços comerciais que fortalecem a identidade da sua marca e proporcionam experiências memoráveis aos seus clientes. Escritórios, lojas, clínicas e restaurantes com design funcional e impactante.",
    features: [
      "Análise de fluxos",
      "Projeto de fachada",
      "Layout comercial",
      "Adequação às normas",
      "Identidade visual aplicada",
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1469&auto=format&fit=crop",
  },
];

const process = [
  {
    step: "01",
    title: "Primeiro Contato",
    description:
      "Conversamos sobre suas necessidades, sonhos e orçamento disponível. Ouço cada detalhe com atenção.",
  },
  {
    step: "02",
    title: "Estudo Preliminar",
    description:
      "Desenvolvimento das primeiras ideias e conceitos, considerando sua identidade e estilo de vida.",
  },
  {
    step: "03",
    title: "Anteprojeto",
    description:
      "Definição do projeto com plantas, cortes e perspectivas 3D para sua aprovação.",
  },
  {
    step: "04",
    title: "Projeto Executivo",
    description:
      "Detalhamento técnico completo com todas as especificações para execução.",
  },
  {
    step: "05",
    title: "Acompanhamento",
    description:
      "Visitas técnicas durante a obra para garantir que tudo saia conforme planejado.",
  },
];

export default function ServicosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 lg:pt-44 md:pb-20 bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
            >
              Serviços
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6"
            >
              Como Posso Ajudar
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Ofereço soluções completas em arquitetura e design, do conceito à execução, 
              sempre com atendimento humanizado e atenção a cada detalhe do seu projeto.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-custom">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-32"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}>
                  {/* Image */}
                  <div className={`relative aspect-[4/3] overflow-hidden ${
                    index % 2 === 1 ? "lg:[direction:ltr]" : ""
                  }`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgIBAwQDAAAAAAAAAAAAAQIDBAAFERIGITFBUWFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/AMq0fqLUdMhkgpWGijkbe4EjIHYbgEjuOx7Y5/Rl1yxYvahJauTPPK/l5GLMfsk5xjJGTsdBuf/Z"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 border border-accent flex items-center justify-center">
                        <service.icon
                          size={24}
                          className="text-accent"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h2 className="font-serif text-2xl md:text-3xl">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-accent flex-shrink-0"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contato"
                      className="group inline-flex items-center gap-2 text-sm tracking-wide text-foreground hover:text-accent transition-colors"
                    >
                      Solicitar orçamento
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container-custom">
          <SectionTitle
            subtitle="Metodologia"
            title="Como Trabalho"
            description="Um processo estruturado com atendimento humanizado, ouvindo cada detalhe com sensibilidade e paciência."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <span className="block text-4xl font-serif text-accent/50 mb-4">
                  {item.step}
                </span>
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-primary-foreground/60">
                  {item.description}
                </p>

                {/* Connector line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-[1px] bg-primary-foreground/10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Region Info */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Atendimento
              </span>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                Residencial e Comercial
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Atendo projetos residenciais e comerciais em <strong>Mirassol</strong>, 
                {" "}<strong>São José do Rio Preto</strong> e toda a região noroeste paulista. 
                Cada projeto recebe atendimento personalizado e acompanhamento presencial.
              </p>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-accent transition-all duration-300"
              >
                Agendar Conversa
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
