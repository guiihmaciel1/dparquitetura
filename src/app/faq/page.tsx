"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    category: "Projetos e Serviços",
    questions: [
      {
        question: "Quais tipos de projetos você realiza?",
        answer:
          "Realizo projetos arquitetônicos residenciais (casas, apartamentos, reformas), comerciais (lojas, escritórios, clínicas), design de interiores, projetos de iluminação, regularização de imóveis junto à prefeitura e assessoria em compras de materiais e mobiliário.",
      },
      {
        question: "Você faz apenas o projeto ou também acompanha a obra?",
        answer:
          "Ofereço ambos os serviços. Você pode contratar apenas o projeto arquitetônico ou incluir o acompanhamento de obra, onde faço visitas periódicas para garantir que a execução siga fielmente o projeto, orientando a equipe de construção e solucionando eventuais dúvidas.",
      },
      {
        question: "Qual a diferença entre projeto arquitetônico e design de interiores?",
        answer:
          "O projeto arquitetônico envolve a estrutura do imóvel: layout, fachada, telhado, instalações hidráulicas e elétricas, aprovação na prefeitura. Já o design de interiores foca na parte interna: escolha de revestimentos, mobiliário, iluminação, cores e decoração. Muitas vezes os dois são feitos juntos para um resultado integrado.",
      },
      {
        question: "Você trabalha com projetos de reforma?",
        answer:
          "Sim! Reformas são uma parte importante do meu trabalho. Seja para modernizar um ambiente, ampliar a casa, integrar espaços ou adaptar um imóvel às suas necessidades atuais, desenvolvo projetos que transformam o espaço respeitando a estrutura existente.",
      },
    ],
  },
  {
    category: "Valores e Prazos",
    questions: [
      {
        question: "Como é calculado o valor do projeto?",
        answer:
          "O valor varia conforme o tipo de projeto (residencial, comercial, interiores), a complexidade, metragem e escopo dos serviços incluídos. Após uma conversa inicial para entender suas necessidades, envio uma proposta detalhada com valores e condições de pagamento.",
      },
      {
        question: "Qual o prazo médio para desenvolver um projeto?",
        answer:
          "O prazo depende da complexidade do projeto. Um projeto residencial completo leva em média de 30 a 60 dias. Projetos de interiores podem levar de 15 a 45 dias. Reformas menores podem ser mais rápidas. Sempre informo o prazo estimado na proposta.",
      },
      {
        question: "Quais são as formas de pagamento?",
        answer:
          "O pagamento é dividido em etapas conforme o andamento do projeto. Geralmente: entrada na assinatura do contrato, parcela na entrega do estudo preliminar, e saldo na entrega do projeto executivo. Aceito transferência bancária, PIX e parcelamento conforme negociação.",
      },
    ],
  },
  {
    category: "Processo de Trabalho",
    questions: [
      {
        question: "Como funciona a primeira consulta?",
        answer:
          "A primeira conversa é gratuita e pode ser feita por WhatsApp, videochamada ou presencialmente. Nela, você me conta sobre o projeto, suas necessidades e expectativas. Com essas informações, preparo uma proposta personalizada com escopo, prazo e valores.",
      },
      {
        question: "Preciso ter o terreno ou imóvel para começar o projeto?",
        answer:
          "Para projetos novos, é ideal ter o terreno definido para que o projeto seja desenvolvido considerando as características do local. Para reformas e interiores, preciso conhecer o imóvel. Posso ajudar também na análise de terrenos ou imóveis antes da compra.",
      },
      {
        question: "O que preciso fornecer para iniciar o projeto?",
        answer:
          "Basicamente: suas ideias e referências do que gosta (fotos, Pinterest, etc.), informações sobre o terreno ou imóvel (escritura, planta existente se houver), e seu orçamento estimado para a obra. Com isso, consigo desenvolver um projeto alinhado às suas expectativas e possibilidades.",
      },
      {
        question: "Quantas alterações posso solicitar no projeto?",
        answer:
          "Trabalho com rodadas de revisão incluídas no valor do projeto. Normalmente são 2 a 3 rodadas de ajustes em cada etapa. Alterações que mudem significativamente o escopo podem ser orçadas à parte. O importante é que você fique 100% satisfeito com o resultado.",
      },
    ],
  },
  {
    category: "Área de Atuação",
    questions: [
      {
        question: "Qual sua área de atuação?",
        answer:
          "Meu escritório fica em Mirassol - SP, e atendo principalmente Mirassol, São José do Rio Preto e cidades da região como Bady Bassitt, Cedral, Jaci, Onda Verde, Neves Paulista, entre outras. Para projetos em outras localidades, podemos avaliar a viabilidade.",
      },
      {
        question: "Você faz visitas no local da obra?",
        answer:
          "Sim! A visita ao terreno ou imóvel é parte fundamental do processo. Faço o levantamento inicial, acompanho etapas importantes da obra (quando contratado o acompanhamento) e estou disponível para reuniões presenciais sempre que necessário.",
      },
    ],
  },
  {
    category: "Regularização",
    questions: [
      {
        question: "O que é regularização de imóveis?",
        answer:
          "É o processo de legalizar uma construção junto à prefeitura, obtendo o habite-se ou alvará de regularização. Muitos imóveis foram construídos sem aprovação ou sofreram alterações não averbadas. A regularização é importante para venda, financiamento e segurança jurídica.",
      },
      {
        question: "Meu imóvel foi construído sem planta aprovada. Posso regularizar?",
        answer:
          "Na maioria dos casos, sim. Faço o levantamento da construção existente, elaboro as plantas e memorial descritivo, e protocolo junto à prefeitura. Cada caso tem suas particularidades que avalio na consulta inicial.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-accent transition-colors"
      >
        <span className="font-medium pr-8">{question}</span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted-foreground leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
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
              Dúvidas Frequentes
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6"
            >
              Perguntas Frequentes
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Tire suas dúvidas sobre projetos, valores, prazos e processo de trabalho. 
              Se não encontrar o que procura, é só me chamar!
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="mb-12 last:mb-0"
              >
                <h2 className="font-serif text-2xl mb-6 pb-4 border-b-2 border-accent">
                  {category.category}
                </h2>
                <div>
                  {category.questions.map((faq) => (
                    <FAQItem
                      key={faq.question}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto mt-16 p-8 md:p-12 bg-muted text-center"
          >
            <MessageCircle size={40} className="mx-auto mb-4 text-accent" />
            <h3 className="font-serif text-2xl mb-4">Ainda tem dúvidas?</h3>
            <p className="text-muted-foreground mb-6">
              Não encontrou a resposta que procurava? Entre em contato que terei prazer em ajudar!
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-medium text-sm tracking-wide hover:bg-accent-dark transition-colors"
            >
              Fale Comigo
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
