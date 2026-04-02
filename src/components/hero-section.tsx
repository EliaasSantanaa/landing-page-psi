"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

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

          <figure
            className="animate-fade-in-up"
            style={{ animationDelay: "0.28s" }}
          >
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-border/70 bg-card/90 p-3 shadow-[0_22px_55px_-35px_rgba(74,51,36,0.55)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted/45">
                <Image
                  src="/foto.jpeg"
                  alt="Retrato profissional da psicologa Elayne Graziele"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="object-cover"
                />
              </div>

              <figcaption className="px-2 pt-5 pb-2 text-center">
                <p className="font-serif text-3xl leading-tight text-foreground">
                  Elayne Graziele
                </p>
                <p className="mt-1 text-sm uppercase tracking-[0.14em] text-muted-foreground">
                  Psicologa | Terapia Cognitivo-Comportamental
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Atendimento online, individual e com sigilo profissional.
                </p>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
