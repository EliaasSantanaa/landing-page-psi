"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.25fr_0.75fr] gap-10 lg:gap-14 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block animate-fade-in-up">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-primary bg-card/90 px-4 py-2 rounded-full border border-border/70">
                Atendimento online para adultos
              </span>
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.02] text-balance animate-fade-in-up"
              style={{ animationDelay: "0.08s" }}
            >
              Cuidar da mente tambem e um ato de coragem.
            </h1>

            <p
              className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto lg:mx-0 animate-fade-in-up"
              style={{ animationDelay: "0.16s" }}
            >
              Psicoterapia com base na TCC para quem busca clareza emocional,
              reorganizacao interna e mudancas sustentaveis no dia a dia.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: "0.24s" }}
            >
              <Button
                size="lg"
                onClick={() =>
                  window.open("https://wa.me/5511960247780", "_blank")
                }
                className="text-base font-semibold group"
              >
                Agendar primeira conversa
                <ArrowRight
                  className="ml-1.5 group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-base"
              >
                Entender o processo
              </Button>
            </div>
          </div>

          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.28s" }}
          >
            <div className="rounded-3xl border border-border/70 bg-card/85 backdrop-blur-sm p-7 md:p-8">
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-4">
                Atendimento com foco em
              </p>
              <ul className="space-y-4">
                {[
                  "Ansiedade e sobrecarga emocional",
                  "Relacionamentos e limites saudaveis",
                  "Autoconhecimento e autoestima",
                  "Transicoes e decisoes de vida",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    <span className="text-foreground/90 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 pt-6 border-t border-border/70">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Sessao online, individual e com sigilo profissional. Um espaco
                  seguro para voce falar sem pressa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
