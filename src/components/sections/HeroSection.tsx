"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted" />
      
      {/* Elementos arquitetônicos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blueprint grid sutil */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
        
        {/* Formas geométricas arquitetônicas */}
        <svg className="absolute top-20 left-10 w-32 h-32 text-accent/5" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <rect x="10" y="10" width="80" height="80" />
          <line x1="10" y1="50" x2="90" y2="50" />
          <line x1="50" y1="10" x2="50" y2="90" />
          <circle cx="50" cy="50" r="25" />
        </svg>
        
        <svg className="absolute bottom-32 right-16 w-40 h-40 text-accent/5" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <polygon points="50,5 95,95 5,95" />
          <line x1="50" y1="5" x2="50" y2="95" />
          <line x1="27" y1="50" x2="73" y2="50" />
        </svg>
        
        <svg className="absolute top-1/3 right-20 w-24 h-24 text-foreground/5" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <rect x="20" y="20" width="60" height="60" />
          <rect x="30" y="30" width="40" height="40" />
          <rect x="40" y="40" width="20" height="20" />
        </svg>
        
        <svg className="absolute bottom-40 left-20 w-28 h-28 text-foreground/5" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M10,90 L10,30 L50,10 L90,30 L90,90 Z" />
          <line x1="50" y1="10" x2="50" y2="90" />
          <line x1="10" y1="60" x2="90" y2="60" />
        </svg>
        
        {/* Linhas de construção */}
        <div className="absolute top-1/4 left-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
        <div className="absolute bottom-1/3 right-0 w-1/4 h-[1px] bg-gradient-to-l from-transparent via-accent/10 to-transparent" />
      </div>

      {/* Linhas decorativas verticais */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-border to-transparent opacity-20" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-border to-transparent opacity-20" />

      <div className="relative z-10 w-full px-6 flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full text-center">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-xs md:text-sm tracking-[0.4em] uppercase text-muted-foreground mb-6">
              Arquitetura & Design de Interiores
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.1] mb-8"
          >
            Conectando{" "}
            <span className="relative">
              <span className="relative z-10">Forma</span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-2 left-0 h-3 md:h-4 bg-accent/30 -z-0"
              />
            </span>
            ,<br />
            Função e{" "}
            <span className="italic text-accent">Identidade</span>
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center w-full mb-10"
          >
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-center">
              Arquitetura contemporânea urbana com atendimento humanizado. 
              Transformo espaços em lugares que importam, com sensibilidade 
              para ouvir cada detalhe do seu sonho.
            </p>
          </motion.div>

          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-4 mb-14 flex justify-center"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-muted/80 backdrop-blur-sm text-muted-foreground text-xs tracking-[0.2em] uppercase rounded-full border border-border/50">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Mirassol • São José do Rio Preto • Região
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full mt-18"
          >
            <Link
              href="/projetos"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#D4A574] text-[#1C1917] font-medium text-sm tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[#C4956A]"
            >
              <span>Ver Projetos</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
            <Link
              href="/contato"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-[#D4A574]/50 text-[#D4A574] font-medium text-sm tracking-[0.1em] uppercase transition-all duration-300 hover:border-[#D4A574] hover:bg-[#D4A574]/10"
            >
              <span>Iniciar Conversa</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Spacer para o scroll indicator */}
      <div className="h-24" />

      {/* Scroll Indicator - Posicionado na seção, não no container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
