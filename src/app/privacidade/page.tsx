"use client";

import { motion } from "framer-motion";

export default function PrivacidadePage() {
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
              Legal
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6"
            >
              Política de Privacidade
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Última atualização: Janeiro de 2026
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-serif text-2xl mb-4">1. Informações que Coletamos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Coletamos informações que você nos fornece diretamente através do formulário de contato, 
                  incluindo nome, telefone e detalhes sobre seu projeto. Essas informações são utilizadas 
                  exclusivamente para entrar em contato com você e entender melhor suas necessidades.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl mb-4">2. Como Usamos suas Informações</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As informações coletadas são utilizadas para:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Responder às suas solicitações de contato</li>
                  <li>Enviar orçamentos e propostas de projetos</li>
                  <li>Agendar reuniões e visitas técnicas</li>
                  <li>Melhorar nossos serviços e atendimento</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl mb-4">3. Compartilhamento de Dados</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros 
                  para fins de marketing. Seus dados são tratados com confidencialidade e utilizados 
                  apenas para os fins descritos nesta política.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl mb-4">4. Segurança dos Dados</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Implementamos medidas de segurança apropriadas para proteger suas informações 
                  contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, 
                  nenhum método de transmissão pela Internet é 100% seguro.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl mb-4">5. Seus Direitos</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incompletos ou desatualizados</li>
                  <li>Solicitar a exclusão de seus dados</li>
                  <li>Revogar o consentimento a qualquer momento</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl mb-4">6. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Este site pode utilizar cookies para melhorar a experiência de navegação. 
                  Cookies são pequenos arquivos de texto armazenados em seu dispositivo que 
                  nos ajudam a entender como você usa nosso site.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl mb-4">7. Contato</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta política, 
                  entre em contato através do WhatsApp (17) 99188-3103 ou visite nosso 
                  escritório na Av. Fernando Costa, 2451 - Centro, Mirassol - SP.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl mb-4">8. Alterações nesta Política</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Reservamo-nos o direito de atualizar esta política de privacidade periodicamente. 
                  Quaisquer alterações serão publicadas nesta página com a data de atualização revisada.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
