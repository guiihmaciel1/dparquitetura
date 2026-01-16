"use client";

import { motion } from "framer-motion";

export default function TermosPage() {
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
              Termos de Uso
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
                <h2 className="font-serif text-2xl mb-4">1. Aceitação dos Termos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ao acessar e utilizar este site, você concorda com estes Termos de Uso e 
                  nossa Política de Privacidade. Se você não concordar com algum destes termos, 
                  por favor, não utilize nosso site.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl mb-4">2. Sobre o Site</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Este site é de propriedade de Débora Pieri Arquitetura, profissional registrada 
                  no Conselho de Arquitetura e Urbanismo sob o número CAU A135139-7. O site tem 
                  como objetivo apresentar os serviços de arquitetura oferecidos e facilitar o 
                  contato com potenciais clientes.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl mb-4">3. Serviços</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Os serviços apresentados neste site incluem:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Projetos Arquitetônicos Residenciais e Comerciais</li>
                  <li>Design de Interiores</li>
                  <li>Projeto de Iluminação</li>
                  <li>Regularização de Imóveis</li>
                  <li>Assessoria em Compras</li>
                  <li>Acompanhamento de Obra</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Os valores e prazos dos serviços são definidos mediante análise individual 
                  de cada projeto e formalizados através de contrato específico.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl mb-4">4. Propriedade Intelectual</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Todo o conteúdo deste site, incluindo textos, imagens, logotipos, design e 
                  projetos apresentados, são de propriedade de Débora Pieri Arquitetura ou 
                  licenciados para uso. É proibida a reprodução, distribuição ou uso comercial 
                  sem autorização prévia por escrito.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl mb-4">5. Imagens de Projetos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  As imagens de projetos apresentadas neste site são de autoria de Débora Pieri 
                  Arquitetura. Algumas imagens podem ser renders ou visualizações 3D que representam 
                  o projeto finalizado. As fotos de obras concluídas são publicadas com autorização 
                  dos proprietários.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl mb-4">6. Limitação de Responsabilidade</h2>
                <p className="text-muted-foreground leading-relaxed">
                  As informações contidas neste site são fornecidas apenas para fins informativos. 
                  Não nos responsabilizamos por decisões tomadas com base nas informações aqui 
                  apresentadas sem a devida consultoria profissional prévia.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl mb-4">7. Links Externos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Este site pode conter links para sites externos (como Instagram e WhatsApp). 
                  Não nos responsabilizamos pelo conteúdo ou políticas de privacidade desses 
                  sites de terceiros.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl mb-4">8. Área de Atuação</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Atuamos principalmente em Mirassol, São José do Rio Preto e região do interior 
                  de São Paulo. Projetos em outras localidades podem ser avaliados mediante 
                  consulta prévia.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl mb-4">9. Alterações nos Termos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                  As alterações entram em vigor imediatamente após sua publicação no site. 
                  O uso continuado do site após alterações constitui aceitação dos novos termos.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl mb-4">10. Contato</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Para dúvidas sobre estes termos, entre em contato:
                </p>
                <div className="mt-4 p-6 bg-muted">
                  <p className="text-foreground font-medium">Débora Pieri Arquitetura</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Av. Fernando Costa, 2451 - Prédio Comercial Miracenter<br />
                    Centro, Mirassol - SP, CEP 15130-025<br />
                    WhatsApp: (17) 99188-3103<br />
                    CAU: A135139-7
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl mb-4">11. Legislação Aplicável</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Estes termos são regidos pelas leis da República Federativa do Brasil. 
                  Qualquer disputa será submetida ao foro da comarca de Mirassol - SP.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
