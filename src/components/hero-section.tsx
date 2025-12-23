"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-52 lg:pb-44 bg-gradient-to-b from-secondary/50 via-secondary/20 to-background overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block animate-fade-in-up">
            <span className="text-sm font-semibold text-primary bg-primary/15 px-5 py-2.5 rounded-full border border-primary/20 shadow-sm">
              ✨ Atendimento 100% Online
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight text-balance animate-fade-in-up"
            style={{
              fontFamily: "var(--font-crimson)",
              animationDelay: "0.1s",
            }}
          >
            Transforme sua mente, transforme sua vida
          </h1>

          <p
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Psicologia online baseada em evidências científicas, com
            especialização em Terapia Cognitivo-Comportamental (TCC). Um espaço
            seguro e acolhedor para o seu desenvolvimento emocional.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              size="lg"
              onClick={() =>
                window.open("https://wa.me/5511960247780", "_blank")
              }
              className="text-base px-8 font-semibold group"
            >
              Agendar Primeira Consulta
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-base px-8 font-medium"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
