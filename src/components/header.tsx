"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/88 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl md:text-3xl font-semibold tracking-wide text-foreground hover:text-primary transition-colors duration-300"
          >
            Elayne Graziele
          </button>

          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Contato
            </button>
            <Button
              onClick={() =>
                window.open("https://wa.me/5511960247780", "_blank")
              }
              className="font-semibold px-6"
            >
              Agendar Consulta
            </Button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground rounded-full border border-border/70 bg-card/80"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden py-6 px-4 mb-4 border border-border/70 animate-fade-in-down bg-background/95 backdrop-blur-md rounded-2xl">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors duration-300 text-left py-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors duration-300 text-left py-2"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors duration-300 text-left py-2"
              >
                Contato
              </button>
              <Button
                onClick={() =>
                  window.open("https://wa.me/5511960247780", "_blank")
                }
                className="w-full font-semibold mt-2"
              >
                Agendar Consulta
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
