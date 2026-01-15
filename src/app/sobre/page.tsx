"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui";
import { CTASection } from "@/components/sections";
import { Award, GraduationCap, Heart, Lightbulb, Users, Sparkles } from "lucide-react";
import Image from "next/image";

export default function SobrePage() {
  const values = [
    {
      icon: Heart,
      title: "Humanização",
      description:
        "Trabalho humanizado com sensibilidade e paciência para ouvir cada detalhe do seu sonho.",
    },
    {
      icon: Lightbulb,
      title: "Sensibilidade",
      description:
        "Me importo com o sentimento sobre cada lugar. Um espaço que importa é um lugar.",
    },
    {
      icon: Users,
      title: "Dedicação",
      description:
        "Cada projeto recebe atenção exclusiva, do primeiro contato até a entrega final.",
    },
    {
      icon: Sparkles,
      title: "Atemporalidade",
      description:
        "Materiais atemporais que garantem baixa manutenção sem perder o requinte.",
    },
  ];

  const timeline = [
    {
      year: "2016",
      title: "Formação em Arquitetura",
      description: "Graduação em Arquitetura e Urbanismo pela UNIRP",
    },
    {
      year: "2018",
      title: "Especialização",
      description: "Pós-graduação em Design de Interiores e Composições de Jardins pela Faculdade Metropolitana",
    },
    {
      year: "2018",
      title: "Debora Pieri Arquitetura",
      description: "Fundação do escritório próprio em Mirassol",
    },
    {
      year: "Hoje",
      title: "Atuação Regional",
      description: "Atendendo Mirassol, São José do Rio Preto e toda a região",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-60 pb-20 md:pt-72 lg:pt-80 md:pb-24 bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
            >
              Sobre
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6"
            >
              Debora Pieri
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Arquiteta apaixonada por criar espaços que contam histórias e
              transformam a vida das pessoas. Um local sem sentimento é apenas um local. 
              Um espaço que importa é um <em>lugar</em>.
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop"
                  alt="Debora Pieri - Arquiteta"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/30 -z-10" />
              
              {/* CAU Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute bottom-4 left-4 bg-accent text-primary-foreground px-5 py-4 shadow-lg"
              >
                <Award size={24} className="mb-2" />
                <span className="block text-xs tracking-wider uppercase">CAU</span>
                <span className="block text-sm font-medium">A135139-7</span>
              </motion.div>
            </motion.div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl md:text-4xl mb-8">
                  Minha História
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Formada em Arquitetura e Urbanismo pela UNIRP em 2016, encontrei 
                    na arquitetura a forma perfeita de unir criatividade, técnica e 
                    o desejo de transformar a vida das pessoas através dos espaços.
                  </p>
                  <p>
                    Em 2018, busquei aprofundar meus conhecimentos com uma pós-graduação 
                    em Design de Interiores e Composições de Jardins pela Faculdade 
                    Metropolitana, o que me permitiu oferecer uma visão ainda mais 
                    completa e integrada dos projetos.
                  </p>
                  <p>
                    O que diferencia meu trabalho é a <strong>humanização</strong>. 
                    Acredito na sensibilidade e paciência em ouvir cada detalhe. 
                    Me importo genuinamente com o sentimento que cada cliente tem 
                    sobre aquele lugar que será transformado.
                  </p>
                </div>
              </motion.div>

              {/* Style Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-10 p-6 bg-muted border-l-4 border-accent"
              >
                <h3 className="font-serif text-xl mb-2">Estilo Arquitetônico</h3>
                <p className="text-2xl font-serif text-accent mb-2">Contemporâneo Urbano</p>
                <p className="text-sm text-muted-foreground">
                  Prático, esteticamente imponente e com materiais atemporais 
                  que garantem baixa manutenção sem perder o requinte.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8">
              &ldquo;Arquitetura que Conecta{" "}
              <span className="text-accent">Forma</span>,{" "}
              <span className="text-accent">Função</span> e{" "}
              <span className="text-accent">Identidade</span>&rdquo;
            </blockquote>
            <p className="text-primary-foreground/70 text-lg">
              Cada projeto é uma oportunidade de criar espaços que refletem 
              a essência de quem vai habitá-los.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-muted border-t border-border/60">
        <div className="container-custom">
          <SectionTitle
            subtitle="Filosofia"
            title="O Que Me Guia"
            description="Princípios fundamentais que norteiam cada projeto e relacionamento com meus clientes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center px-2"
              >
                <div className="w-16 h-16 mx-auto mb-6 border border-accent/30 flex items-center justify-center">
                  <value.icon size={28} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 bg-background border-t border-border/60">
        <div className="container-custom">
          <SectionTitle
            subtitle="Trajetória"
            title="Minha Jornada"
            description="Uma história de aprendizado, crescimento e realizações."
          />

          <div className="max-w-4xl mx-auto mt-20">
            {timeline.map((item, index) => (
              <motion.div
                key={`${item.year}-${index}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-10 pb-10 last:pb-0"
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="font-serif text-2xl text-accent">
                    {item.year}
                  </span>
                </div>
                <div className="relative pl-10 border-l border-border">
                  <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-accent" />
                  <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Region */}
      <section className="py-24 md:py-32 bg-muted border-t border-border/60">
        <div className="container-custom">
          <SectionTitle
            subtitle="Área de Atuação"
            title="Mirassol, São José do Rio Preto e Região"
            description="Atendo projetos residenciais e comerciais em toda a região noroeste paulista, oferecendo atendimento presencial e acompanhamento personalizado em cada etapa do projeto."
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}
