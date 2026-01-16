"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionTitle } from "@/components/ui";

const testimonials = [
  // Depoimentos do WhatsApp
  {
    id: 1,
    quote:
      "Só temos a agradecer pelo trabalho incrível! O projeto ficou ainda melhor do que imaginávamos. Você conseguiu idealizar tudo que sonhamos! Nos acompanhou e nos deu suporte em todas as etapas da obra desde a escolha da planta, documentação, acompanhamento da obra e design de interiores. Obrigada por toda dedicação e carinho conosco. Com certeza indicaremos o seu trabalho!",
    author: "Bianca e Flavio",
    project: "Jd Renascença, Mirassol",
  },
  {
    id: 2,
    quote:
      "Excelente profissional! A arquiteta Débora, alia criatividade, técnica e uma ótima gestão de obra. O resultado final está ficando incrível e o processo está muito mais leve do que eu imaginava. Se você busca qualidade e confiança, ela é a pessoa certa.",
    author: "Daniele",
    project: "Residência D&D, Cond. Chácaras Pontos Chic, Jaci",
  },
  {
    id: 3,
    quote:
      "Excelente profissional. A arquiteta Débora é muito assertiva, técnica e entregou o projeto exatamente no prazo. O resultado ficou funcional e de muito bom gosto. Recomendo.",
    author: "Vanderlei",
    project: "Jaci, SP",
  },
  {
    id: 4,
    quote:
      "Passando para dar um feedback do projeto da sala! Ficou exatamente como eu queria — na verdade, muito melhor do que eu imaginava. Desde o início, minha ideia era conseguir visualizar tudo com clareza e transformar as minhas ideias em imagens, e você conseguiu captar isso perfeitamente. O projeto superou minhas expectativas: cada detalhe fez sentido, a disposição dos elementos ficou funcional e ao mesmo tempo acolhedora, e o resultado final ficou totalmente alinhado com o que eu sonhava para esse espaço.",
    author: "Caroline",
    project: "Clínica Estética, Mirassol",
  },
  {
    id: 5,
    quote:
      "Gostaríamos de deixar nosso imenso agradecimento à Débora pelo trabalho impecável! Como casal, buscávamos alguém que entendesse nosso estilo, e ela superou todas as expectativas. Além de ser extremamente atenciosa e captar cada detalhe do que queríamos, a Débora é de uma criatividade sem limites, trazendo soluções que nunca tínhamos imaginado. Tudo isso com uma agilidade incrível na entrega. Recomendamos de olhos fechados!",
    author: "Munhoz e Julia",
    project: "Casa em Neves Paulista, SP",
  },
  {
    id: 6,
    quote:
      "A melhor decisão que tomei em 2025 sem dúvida foi procurar a Débora para tornar o sonho da minha cozinha profissional em realidade! Era um sonho que parecia muito distante, mas a excelência e o profissionalismo da Débora tornou tudo real e palpável! Me emocionei no escritório dela quando recebi o projeto pronto em mãos. O capricho para entregar o projeto, tudo me encantou e me fez admirar muito a profissão e o dom dela de transformar sonhos em realidade!",
    author: "Doçura no Potinho",
    project: "Cozinha Profissional",
  },
  // Depoimentos do Google
  {
    id: 7,
    quote:
      "A Débora fez um trabalho excepcional no projeto da minha casa! Desde o início, demonstrou profissionalismo, criatividade e atenção aos detalhes. O resultado final ficou ainda melhor do que eu imaginava! Recomendo!",
    author: "Fernando Roberto de Paula",
    project: "Projeto Residencial",
  },
  {
    id: 8,
    quote:
      "Atenciosa com o cliente e disposta a realizar o sonho e desejo de cada um. Super recomendo!",
    author: "Daniela Oliveira",
    project: "Google Reviews ⭐⭐⭐⭐⭐",
  },
  {
    id: 9,
    quote:
      "A melhor arquiteta de Mirassol e região. Projetos maravilhosos, design de interiores lindos e atuais. Fez o quarto da minha filha, transição para adolescente, com todo cuidado e carinho e ficou simplesmente perfeito. Podem contratar com a certeza que receberão exatamente o que deseja.",
    author: "Jaqueline Dos Anjos",
    project: "Design de Interiores",
  },
  {
    id: 10,
    quote:
      "Ótima experiência, ótimo preço, e muito atenciosa! Fizemos nossa casa pela caixa, e dentro dos nossos recursos disponíveis conseguimos chegar em um projeto do nosso agrado. Débora sempre cheia de ideias e formas práticas para organizar tudo!",
    author: "Nathally Mayra de Oliveira Ruiz",
    project: "Projeto Residencial",
  },
  {
    id: 11,
    quote:
      "Sem dúvida alguma a melhor. Débora é atenciosa, gentil, exemplar e profissional. Seus projetos lindos e incríveis, com certeza a recomendo e a contratarei novamente!",
    author: "Ana Carla Ferreira",
    project: "Google Reviews ⭐⭐⭐⭐⭐",
  },
  {
    id: 12,
    quote:
      "Uma profissional maravilhosa, cumpre com o que promete e entrega muito mais!",
    author: "Mayara Rocha",
    project: "Google Reviews ⭐⭐⭐⭐⭐",
  },
  {
    id: 13,
    quote:
      "Profissional excelente! Comprometida em trazer o melhor para seu cliente.",
    author: "Paula Viscardi",
    project: "Google Reviews ⭐⭐⭐⭐⭐",
  },
  {
    id: 14,
    quote:
      "Excelente profissional, sabe atender todas as exigências do cliente, projetos bem elaborados.",
    author: "Fernando Henrique",
    project: "Google Reviews ⭐⭐⭐⭐⭐",
  },
  {
    id: 15,
    quote:
      "Ótima profissional! Super indico.",
    author: "Juliana Satie Zocal Tanoue",
    project: "Google Reviews ⭐⭐⭐⭐⭐",
  },
  {
    id: 16,
    quote:
      "Uma arquiteta maravilhosa! Humana e uma excelente profissional!!!! Amo o trabalho dela! Perfeito!",
    author: "Vanessa de Oliveira",
    project: "Google Reviews ⭐⭐⭐⭐⭐",
  },
  {
    id: 17,
    quote:
      "Excelente profissional que transmiti amor através dos seus trabalhos.",
    author: "Joseane Paula",
    project: "Google Reviews ⭐⭐⭐⭐⭐",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    currentIndex * testimonialsPerPage,
    (currentIndex + 1) * testimonialsPerPage
  );

  return (
    <section className="py-24 md:py-32 bg-muted overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <SectionTitle
          subtitle="Depoimentos"
          title="O Que Dizem Nossos Clientes"
          description="Nota 5.0 no Google. A satisfação dos nossos clientes é o nosso maior reconhecimento."
        />

        {/* Testimonials Grid */}
        <div className="relative mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {currentTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative group h-full"
                >
                  <div className="p-8 md:p-10 bg-background border border-border h-full hover:border-accent/50 hover:shadow-lg transition-all duration-300 flex flex-col min-h-[400px]">
                    {/* Quote Icon */}
                    <Quote
                      size={36}
                      className="text-accent/60 mb-4 flex-shrink-0"
                      strokeWidth={1}
                    />

                    {/* Quote Text */}
                    <blockquote className="text-foreground leading-relaxed mb-6 text-sm flex-1 overflow-hidden">
                      <span className="line-clamp-[12]">
                        &ldquo;{testimonial.quote}&rdquo;
                      </span>
                    </blockquote>

                    {/* Author */}
                    <div className="border-t border-border pt-4 mt-auto">
                      <p className="font-medium text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.project}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={prevSlide}
                className="w-12 h-12 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                aria-label="Depoimentos anteriores"
              >
                <ChevronLeft size={20} />
              </button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "bg-accent w-6"
                        : "bg-border hover:bg-accent/50"
                    }`}
                    aria-label={`Ir para página ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                aria-label="Próximos depoimentos"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
