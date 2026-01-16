"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  
  // Na home, antes de scrollar, usa texto claro (fundo escuro da Hero)
  const isHome = pathname === "/";
  const useLightText = isHome && !isScrolled;
  const useSolidHeader = !isHome || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        useSolidHeader
          ? "bg-background/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div
        className={`container-custom flex items-center justify-between ${
          useLightText ? "text-white" : ""
        }`}
      >
        {/* Logo */}
        <a href="/" onClick={handleHomeClick} className="group cursor-pointer">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <span className={`font-serif text-2xl md:text-3xl font-medium tracking-tight transition-colors duration-300 group-hover:text-accent ${
              useLightText ? "text-white drop-shadow-sm" : "text-foreground"
            }`}>
              Débora Pieri
            </span>
            <span className={`text-[10px] md:text-xs tracking-[0.3em] uppercase transition-colors duration-300 ${
              useLightText ? "text-white/70 drop-shadow-sm" : "text-muted-foreground"
            }`}>
              Arquitetura
            </span>
          </motion.div>
        </a>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center gap-8 ${useLightText ? "text-white" : ""}`}>
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {link.href === "/" ? (
                <a
                  href="/"
                  onClick={handleHomeClick}
                  className={`relative text-sm tracking-wide transition-colors duration-300 group cursor-pointer ${
                    useLightText 
                      ? "text-white hover:text-accent drop-shadow-sm" 
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
                </a>
              ) : (
                <Link
                  href={link.href}
                  className={`relative text-sm tracking-wide transition-colors duration-300 group ${
                    useLightText 
                      ? "text-white hover:text-accent drop-shadow-sm" 
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              )}
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 transition-colors duration-300 ${
            useLightText ? "text-white" : "text-foreground"
          }`}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <nav className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {link.href === "/" ? (
                    <a
                      href="/"
                      onClick={(e) => {
                        setIsMobileMenuOpen(false);
                        handleHomeClick(e);
                      }}
                      className="block py-2 text-lg text-foreground/80 hover:text-accent transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-lg text-foreground/80 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
