import Link from "next/link";
import { Instagram, MapPin, Phone, Award } from "lucide-react";

const footerLinks = {
  navegacao: [
    { href: "/", label: "Home" },
    { href: "/sobre", label: "Sobre" },
    { href: "/projetos", label: "Projetos" },
    { href: "/servicos", label: "Serviços" },
    { href: "/contato", label: "Contato" },
  ],
  servicos: [
    { href: "/servicos#arquitetonico", label: "Projeto Arquitetônico" },
    { href: "/servicos#interiores", label: "Design de Interiores" },
    { href: "/servicos#iluminacao", label: "Projeto de Iluminação" },
    { href: "/servicos#regularizacao", label: "Regularização de Imóveis" },
  ],
};

const socialLinks = [
  { href: "https://instagram.com/deborapieriarquitetura", icon: Instagram, label: "Instagram" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-2xl font-medium">
                Debora Pieri
              </span>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-primary-foreground/60">
                Arquitetura
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-4">
              Arquitetura que Conecta Forma, Função e Identidade. 
              Atendimento humanizado com sensibilidade e dedicação.
            </p>
            {/* CAU Badge */}
            <div className="flex items-center gap-2 text-xs text-primary-foreground/50 mb-6">
              <Award size={14} />
              <span>CAU A135139-7</span>
            </div>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-primary-foreground/20 hover:border-accent hover:text-accent transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              {footerLinks.navegacao.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-6">
              Serviços
            </h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/5517991883103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                >
                  <Phone size={18} className="mt-0.5 flex-shrink-0" />
                  <span>(17) 99188-3103</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-primary-foreground/70">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                  <span>
                    Mirassol, SP
                    <br />
                    São José do Rio Preto e Região
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {currentYear} Debora Pieri Arquitetura. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacidade"
              className="text-xs text-primary-foreground/50 hover:text-accent transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/termos"
              className="text-xs text-primary-foreground/50 hover:text-accent transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
