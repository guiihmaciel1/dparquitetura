export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://deborapieriarquitetura.com.br/#organization",
        name: "Débora Pieri Arquitetura",
        alternateName: "Débora Pieri",
        description:
          "Escritório de arquitetura em Mirassol e São José do Rio Preto. Projetos residenciais, comerciais, design de interiores e regularização de imóveis.",
        url: "https://deborapieriarquitetura.com.br",
        telephone: "+55-17-99188-3103",
        email: "contato@deborapieriarquitetura.com.br",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Fernando Costa, 2451 - Prédio Comercial Miracenter",
          addressLocality: "Mirassol",
          addressRegion: "SP",
          postalCode: "15130-025",
          addressCountry: "BR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -20.8186,
          longitude: -49.5144,
        },
        areaServed: [
          {
            "@type": "City",
            name: "Mirassol",
          },
          {
            "@type": "City",
            name: "São José do Rio Preto",
          },
          {
            "@type": "State",
            name: "São Paulo",
          },
        ],
        priceRange: "$$",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
          },
        ],
        sameAs: ["https://instagram.com/deborapieriarquitetura"],
        image: "https://deborapieriarquitetura.com.br/debora.jpeg",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "16",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Person",
        "@id": "https://deborapieriarquitetura.com.br/#person",
        name: "Débora Pieri",
        jobTitle: "Arquiteta e Urbanista",
        description:
          "Arquiteta formada com registro CAU A135139-7, especializada em projetos residenciais, comerciais e design de interiores.",
        worksFor: {
          "@id": "https://deborapieriarquitetura.com.br/#organization",
        },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Professional License",
          recognizedBy: {
            "@type": "Organization",
            name: "Conselho de Arquitetura e Urbanismo",
            alternateName: "CAU",
          },
          identifier: "A135139-7",
        },
        image: "https://deborapieriarquitetura.com.br/debora.jpeg",
        sameAs: ["https://instagram.com/deborapieriarquitetura"],
      },
      {
        "@type": "WebSite",
        "@id": "https://deborapieriarquitetura.com.br/#website",
        url: "https://deborapieriarquitetura.com.br",
        name: "Débora Pieri Arquitetura",
        description:
          "Site oficial de Débora Pieri Arquitetura - Projetos arquitetônicos, design de interiores e regularização de imóveis em Mirassol e região.",
        publisher: {
          "@id": "https://deborapieriarquitetura.com.br/#organization",
        },
        inLanguage: "pt-BR",
      },
      {
        "@type": "Service",
        "@id": "https://deborapieriarquitetura.com.br/#service-arquitetonico",
        name: "Projeto Arquitetônico",
        description:
          "Desenvolvimento completo de projetos arquitetônicos residenciais e comerciais, incluindo plantas, fachadas e aprovação na prefeitura.",
        provider: {
          "@id": "https://deborapieriarquitetura.com.br/#organization",
        },
        serviceType: "Architectural Design",
        areaServed: {
          "@type": "State",
          name: "São Paulo",
        },
      },
      {
        "@type": "Service",
        "@id": "https://deborapieriarquitetura.com.br/#service-interiores",
        name: "Design de Interiores",
        description:
          "Projetos de interiores completos com escolha de revestimentos, mobiliário, iluminação e decoração.",
        provider: {
          "@id": "https://deborapieriarquitetura.com.br/#organization",
        },
        serviceType: "Interior Design",
        areaServed: {
          "@type": "State",
          name: "São Paulo",
        },
      },
      {
        "@type": "Service",
        "@id": "https://deborapieriarquitetura.com.br/#service-regularizacao",
        name: "Regularização de Imóveis",
        description:
          "Regularização de construções junto à prefeitura, obtenção de habite-se e alvará de regularização.",
        provider: {
          "@id": "https://deborapieriarquitetura.com.br/#organization",
        },
        serviceType: "Property Regularization",
        areaServed: {
          "@type": "State",
          name: "São Paulo",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://deborapieriarquitetura.com.br/faq/#faqpage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Quais tipos de projetos você realiza?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Realizo projetos arquitetônicos residenciais (casas, apartamentos, reformas), comerciais (lojas, escritórios, clínicas), design de interiores, projetos de iluminação, regularização de imóveis junto à prefeitura e assessoria em compras de materiais e mobiliário.",
            },
          },
          {
            "@type": "Question",
            name: "Qual sua área de atuação?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Meu escritório fica em Mirassol - SP, e atendo principalmente Mirassol, São José do Rio Preto e cidades da região como Bady Bassitt, Cedral, Jaci, Onda Verde, Neves Paulista, entre outras.",
            },
          },
          {
            "@type": "Question",
            name: "Como funciona a primeira consulta?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A primeira conversa é gratuita e pode ser feita por WhatsApp, videochamada ou presencialmente. Nela, você me conta sobre o projeto, suas necessidades e expectativas. Com essas informações, preparo uma proposta personalizada com escopo, prazo e valores.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
