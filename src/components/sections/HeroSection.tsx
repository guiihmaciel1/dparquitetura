"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background com gradiente escuro */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1C1917] via-[#292524] to-[#1C1917]" />
      
      {/* Elementos arquitetônicos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blueprint grid sutil */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
        
        {/* Esbocos de fachadas de condominio */}
        <svg className="absolute top-20 left-10 w-32 h-32 text-accent/10" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="0.7">
          <rect x="10" y="30" width="100" height="70" />
          <rect x="18" y="38" width="26" height="22" />
          <rect x="48" y="38" width="26" height="22" />
          <rect x="78" y="38" width="26" height="22" />
          <rect x="28" y="66" width="16" height="24" />
          <rect x="52" y="66" width="16" height="24" />
          <rect x="76" y="66" width="16" height="24" />
          <line x1="10" y1="30" x2="60" y2="12" />
          <line x1="110" y1="30" x2="60" y2="12" />
        </svg>
        
        <svg className="absolute bottom-32 right-16 w-40 h-40 text-accent/10" viewBox="0 0 140 140" fill="none" stroke="currentColor" strokeWidth="0.7">
          <rect x="15" y="30" width="110" height="80" />
          <line x1="15" y1="30" x2="70" y2="8" />
          <line x1="125" y1="30" x2="70" y2="8" />
          <rect x="25" y="40" width="30" height="25" />
          <rect x="65" y="40" width="30" height="25" />
          <rect x="25" y="75" width="20" height="30" />
          <rect x="52" y="75" width="20" height="30" />
          <rect x="79" y="75" width="20" height="30" />
        </svg>
        
        <svg className="absolute top-1/3 right-20 w-24 h-24 text-white/5" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="0.7">
          <rect x="20" y="30" width="80" height="70" />
          <line x1="20" y1="30" x2="60" y2="14" />
          <line x1="100" y1="30" x2="60" y2="14" />
          <rect x="30" y="40" width="20" height="18" />
          <rect x="70" y="40" width="20" height="18" />
          <rect x="45" y="70" width="30" height="25" />
          <line x1="20" y1="70" x2="100" y2="70" />
        </svg>
        
        <svg className="absolute bottom-40 left-20 w-28 h-28 text-white/5" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="0.7">
          <rect x="12" y="36" width="96" height="66" />
          <line x1="12" y1="36" x2="60" y2="18" />
          <line x1="108" y1="36" x2="60" y2="18" />
          <rect x="20" y="44" width="24" height="20" />
          <rect x="52" y="44" width="24" height="20" />
          <rect x="84" y="44" width="16" height="20" />
          <rect x="36" y="72" width="18" height="22" />
          <rect x="62" y="72" width="18" height="22" />
        </svg>
        
        {/* Linhas de construção */}
        <div className="absolute top-1/4 left-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute bottom-1/3 right-0 w-1/4 h-[1px] bg-gradient-to-l from-transparent via-accent/20 to-transparent" />
      </div>

      {/* Linhas decorativas verticais */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 w-full px-6 flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full text-center">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-xs md:text-sm tracking-[0.4em] uppercase text-white/60 mb-6">
              Arquitetura & Design de Interiores
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.1] mb-8 text-white"
          >
            Conectando{" "}
            <span className="relative">
              <span className="relative z-10">Forma</span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-2 left-0 h-3 md:h-4 bg-accent/40 -z-0"
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
            className="flex justify-center w-full mb-14"
          >
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed text-center">
              Transformo espaços em lugares que importam, com sensibilidade 
              para ouvir cada detalhe do seu sonho.
            </p>
          </motion.div>

          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 mb-28 flex justify-center"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-sm text-white/60 text-xs tracking-[0.2em] uppercase rounded-full border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Mirassol • São José do Rio Preto • Região
            </span>
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
          className="flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
