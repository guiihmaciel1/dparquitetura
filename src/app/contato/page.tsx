"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Send,
  CheckCircle,
  Award,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contato@deborapieri.arq.br",
    href: "mailto:contato@deborapieri.arq.br",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(17) 99999-9999",
    href: "tel:+5517999999999",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Mirassol, SP\nSão José do Rio Preto e Região",
    href: null,
  },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/deborapieriaarquitetura", label: "Instagram" },
];

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio - substituir por integração real
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
            >
              Contato
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6"
            >
              Vamos Conversar
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Estou pronta para ouvir suas ideias e transformá-las em realidade. 
              Cada detalhe importa, e eu quero conhecer o seu sonho.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl mb-8">
                Informações de Contato
              </h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 border border-border flex items-center justify-center">
                      <item.icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <span className="block text-xs tracking-wider uppercase text-muted-foreground mb-1">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground hover:text-accent transition-colors whitespace-pre-line"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="whitespace-pre-line">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CAU Badge */}
              <div className="flex items-center gap-3 p-4 bg-muted mb-8">
                <Award size={20} className="text-accent" />
                <div>
                  <span className="block text-xs tracking-wider uppercase text-muted-foreground">
                    Registro CAU
                  </span>
                  <span className="font-medium">A135139-7</span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-sm font-medium tracking-wider uppercase mb-4">
                  Redes Sociais
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-12 p-8 bg-muted">
                <h3 className="font-serif text-xl mb-3">
                  Prefere WhatsApp?
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Atendo também pelo WhatsApp para maior agilidade. 
                  Vamos conversar sobre seu projeto!
                </p>
                <a
                  href="https://wa.me/5517999999999?text=Olá! Gostaria de saber mais sobre os serviços de arquitetura."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white text-sm tracking-wide hover:bg-[#128C7E] transition-colors"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl mb-8">
                Envie uma Mensagem
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 bg-muted text-center"
                >
                  <CheckCircle
                    size={48}
                    className="mx-auto text-accent mb-6"
                  />
                  <h3 className="font-serif text-2xl mb-4">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Obrigada pelo contato! Retornarei em breve para conversarmos 
                    sobre seu projeto.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="text-sm text-accent hover:underline"
                  >
                    Enviar nova mensagem
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs tracking-wider uppercase text-muted-foreground mb-2"
                      >
                        Nome *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-muted border border-border focus:border-accent focus:outline-none transition-colors"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs tracking-wider uppercase text-muted-foreground mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-muted border border-border focus:border-accent focus:outline-none transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs tracking-wider uppercase text-muted-foreground mb-2"
                      >
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-muted border border-border focus:border-accent focus:outline-none transition-colors"
                        placeholder="(17) 99999-9999"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-xs tracking-wider uppercase text-muted-foreground mb-2"
                      >
                        Assunto *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-muted border border-border focus:border-accent focus:outline-none transition-colors appearance-none"
                      >
                        <option value="">Selecione...</option>
                        <option value="arquitetonico">Projeto Arquitetônico</option>
                        <option value="interiores">Design de Interiores</option>
                        <option value="iluminacao">Projeto de Iluminação</option>
                        <option value="regularizacao">Regularização de Imóveis</option>
                        <option value="comercial">Projeto Comercial</option>
                        <option value="consultoria">Assessoria em Compras</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs tracking-wider uppercase text-muted-foreground mb-2"
                    >
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-muted border border-border focus:border-accent focus:outline-none transition-colors resize-none"
                      placeholder="Conte-me sobre seu projeto, suas ideias e o que você imagina para o espaço..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
