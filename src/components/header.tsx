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
          ? "bg-background/98 backdrop-blur-lg shadow-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl md:text-2xl font-serif font-semibold text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            Elayne Graziele
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
            >
              Contato
            </button>
            <Button
              onClick={() =>
                window.open("https://wa.me/5511960247780", "_blank")
              }
              className="font-semibold"
            >
              Agendar Consulta
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border animate-fade-in-down bg-background/95 backdrop-blur-md rounded-b-xl">
            <div className="flex flex-col gap-5">
              <button
                onClick={() => scrollToSection("about")}
                className="text-base font-semibold text-muted-foreground hover:text-primary transition-all duration-300 text-left py-2 px-2 hover:bg-secondary/50 rounded-lg"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-base font-semibold text-muted-foreground hover:text-primary transition-all duration-300 text-left py-2 px-2 hover:bg-secondary/50 rounded-lg"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-base font-semibold text-muted-foreground hover:text-primary transition-all duration-300 text-left py-2 px-2 hover:bg-secondary/50 rounded-lg"
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
