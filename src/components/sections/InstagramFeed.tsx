"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import Image from "next/image";

const INSTAGRAM_USERNAME = "deborapieriarquitetura";
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_USERNAME}/`;

// Posts do Instagram - atualize manualmente conforme necessário
const instagramPosts = [
  {
    id: "1",
    imageUrl: "/instagram/post1.jpg",
    caption: "Projeto residencial",
    permalink: INSTAGRAM_URL,
  },
  {
    id: "2",
    imageUrl: "/instagram/post2.jpg",
    caption: "Design de interiores",
    permalink: INSTAGRAM_URL,
  },
  {
    id: "3",
    imageUrl: "/instagram/post3.jpg",
    caption: "Fachada moderna",
    permalink: INSTAGRAM_URL,
  },
  {
    id: "4",
    imageUrl: "/instagram/post4.jpg",
    caption: "Área gourmet",
    permalink: INSTAGRAM_URL,
  },
];

export function InstagramFeed() {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Siga no Instagram
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
            @{INSTAGRAM_USERNAME}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Acompanhe os bastidores dos projetos, inspirações e novidades do escritório
          </p>
        </motion.div>

        {/* Grid de Posts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden bg-background"
            >
              {/* Imagem do Instagram */}
              <Image
                src={post.imageUrl}
                alt={post.caption}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay no hover */}
              <div className="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram size={32} className="text-white" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA para seguir */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            <Instagram size={20} />
            Seguir no Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
