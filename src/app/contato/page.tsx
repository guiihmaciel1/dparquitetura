"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Instagram,
  Send,
  Award,
} from "lucide-react";

const WHATSAPP_NUMBER = "5517991883103";

const contactInfo = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(17) 99188-3103",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Mirassol, SP\nSão José do Rio Preto e Região",
    href: null,
  },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/deborapieriarquitetura", label: "Instagram" },
];

const subjectLabels: Record<string, string> = {
  arquitetonico: "Projeto Arquitetônico",
  interiores: "Design de Interiores",
  iluminacao: "Projeto de Iluminação",
  regularizacao: "Regularização de Imóveis",
  comercial: "Projeto Comercial",
  consultoria: "Assessoria em Compras",
  outro: "Outro",
};

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Gerar texto para WhatsApp
    const subjectText = subjectLabels[formData.subject] || formData.subject;
    const whatsappMessage = `Olá! Meu nome é *${formData.name}*${formData.phone ? ` e meu telefone é ${formData.phone}` : ""}.

*Assunto:* ${subjectText}

*Mensagem:*
${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 lg:pt-44 md:pb-20 bg-muted">
        <div className="container-custom">
          <div style={{ maxWidth: '48rem' }}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-muted-foreground"
              style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem' }}
            >
              Contato
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif font-medium"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', marginBottom: '1.5rem' }}
            >
              Vamos Conversar
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground leading-relaxed"
              style={{ fontSize: 'clamp(1.125rem, 2vw, 1.25rem)' }}
            >
              Estou pronta para ouvir suas ideias e transformá-las em realidade. 
              Cada detalhe importa, e eu quero conhecer o seu sonho.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section 
        className="bg-background"
        style={{ paddingTop: '5rem', paddingBottom: '7rem' }}
      >
        <div className="container-custom">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(1, 1fr)', 
              gap: '4rem' 
            }}
            className="lg:grid-cols-2 lg:gap-24"
          >
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="font-serif"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 1.875rem)', marginBottom: '2rem' }}
              >
                Informações de Contato
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                {contactInfo.map((item) => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div 
                      className="border border-border"
                      style={{ 
                        width: '3rem', 
                        height: '3rem', 
                        flexShrink: 0, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center' 
                      }}
                    >
                      <item.icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <span 
                        className="text-muted-foreground"
                        style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.25rem' }}
                      >
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground hover:text-accent transition-colors"
                          style={{ whiteSpace: 'pre-line' }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span style={{ whiteSpace: 'pre-line' }}>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CAU Badge */}
              <div 
                className="bg-muted"
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', marginBottom: '2rem' }}
              >
                <Award size={20} className="text-accent" />
                <div>
                  <span 
                    className="text-muted-foreground"
                    style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}
                  >
                    Registro CAU
                  </span>
                  <span style={{ fontWeight: 500 }}>A135139-7</span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 style={{ fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                  Redes Sociais
                </h3>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-border hover:border-accent hover:text-accent transition-colors"
                      style={{ width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div 
                className="bg-muted"
                style={{ marginTop: '3rem', padding: '2rem' }}
              >
                <h3 
                  className="font-serif"
                  style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}
                >
                  Prefere WhatsApp?
                </h3>
                <p 
                  className="text-muted-foreground"
                  style={{ fontSize: '0.875rem', marginBottom: '1.5rem' }}
                >
                  Atendo pelo WhatsApp para maior agilidade. 
                  Vamos conversar sobre seu projeto!
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre os serviços de arquitetura.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-[#128C7E] transition-colors"
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.5rem', 
                    padding: '0.75rem 1.5rem', 
                    backgroundColor: '#25D366', 
                    color: 'white', 
                    fontSize: '0.875rem', 
                    letterSpacing: '0.025em' 
                  }}
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
              <h2 
                className="font-serif"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 1.875rem)', marginBottom: '0.75rem' }}
              >
                Envie uma Mensagem
              </h2>
              <p 
                className="text-muted-foreground"
                style={{ fontSize: '0.875rem', marginBottom: '2rem' }}
              >
                Preencha o formulário e será direcionado ao WhatsApp
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1.5rem' }} className="md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-muted-foreground"
                      style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}
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
                      className="bg-muted border border-border focus:border-accent focus:outline-none transition-colors"
                      style={{ width: '100%', padding: '0.75rem 1rem' }}
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-muted-foreground"
                      style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}
                    >
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-muted border border-border focus:border-accent focus:outline-none transition-colors"
                      style={{ width: '100%', padding: '0.75rem 1rem' }}
                      placeholder="(17) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="text-muted-foreground"
                    style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}
                  >
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-muted border border-border focus:border-accent focus:outline-none transition-colors"
                    style={{ width: '100%', padding: '0.75rem 1rem', appearance: 'none' }}
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

                <div>
                  <label
                    htmlFor="message"
                    className="text-muted-foreground"
                    style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}
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
                    className="bg-muted border border-border focus:border-accent focus:outline-none transition-colors"
                    style={{ width: '100%', padding: '0.75rem 1rem', resize: 'none' }}
                    placeholder="Conte-me sobre seu projeto, suas ideias e o que você imagina para o espaço..."
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors"
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '0.5rem', 
                    padding: '1rem 2rem', 
                    fontSize: '0.875rem', 
                    letterSpacing: '0.025em',
                    width: 'fit-content'
                  }}
                >
                  Enviar via WhatsApp
                  <Send size={16} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
