"use client";

import { Card } from "@/components/ui/card";
import {
  Video,
  Clock,
  Shield,
  Users,
  FileText,
  Heart,
  Brain,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Video,
    title: "100% Online",
    description: "Sessões por videochamada de qualquer lugar",
    color: "primary",
  },
  {
    icon: Clock,
    title: "Flexibilidade",
    description: "Horários adaptados à sua rotina",
    color: "accent",
  },
  {
    icon: Shield,
    title: "Sigilo Total",
    description: "Ambiente seguro e confidencial",
    color: "primary",
  },
  {
    icon: Users,
    title: "Acolhimento",
    description: "Espaço empático e sem julgamentos",
    color: "accent",
  },
  {
    icon: FileText,
    title: "Recibo para Reembolso",
    description: "Emissão de recibo para convênio",
    color: "primary",
  },
  {
    icon: Heart,
    title: "Espaço Seguro",
    description: "Ambiente ético e profissional",
    color: "accent",
  },
  {
    icon: Brain,
    title: "TCC Científica",
    description: "Abordagem baseada em evidências",
    color: "primary",
  },
  {
    icon: Sparkles,
    title: "Mudanças Reais",
    description: "Resultados concretos e duradouros",
    color: "accent",
  },
];

export function ServicesCarousel() {
  return (
    <div className="py-16 overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 lg:px-8 mb-8">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center text-balance"
          style={{ fontFamily: "var(--font-crimson)" }}
        >
          Como Funciona o Atendimento
        </h2>
      </div>

      <div className="relative">
        <div className="flex animate-scroll">
          {/* Duplicando os itens para criar loop infinito */}
          {[...services, ...services].map((service, index) => {
            const Icon = service.icon;
            const colorClass =
              service.color === "primary" ? "primary" : "accent";

            return (
              <Card
                key={index}
                className="flex-shrink-0 w-80 mx-3 p-8 border-border hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-${colorClass}/10 flex items-center justify-center mb-6`}
                >
                  <Icon className={`w-8 h-8 text-${colorClass}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
