"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MessageCircle, MapPin, Instagram } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            Vamos Começar?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            Entre em contato para agendar sua primeira consulta ou tirar dúvidas
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-10 border-2 border-border/50 hover:shadow-2xl hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:-translate-y-1 bg-gradient-to-br from-card to-secondary/20">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 shadow-lg">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h3
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              WhatsApp
            </h3>
            <p className="text-muted-foreground mb-6 text-base leading-relaxed">
              Agende sua consulta de forma rápida e prática
            </p>
            <Button
              onClick={() =>
                window.open("https://wa.me/5511960247780", "_blank")
              }
              className="w-full text-base font-semibold"
              size="lg"
            >
              Enviar Mensagem
            </Button>
          </Card>

          <Card className="p-10 border-2 border-border/50 hover:shadow-2xl hover:border-accent/40 transition-all duration-500 hover:scale-105 hover:-translate-y-1 bg-gradient-to-br from-card to-secondary/20">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-6 shadow-lg">
              <Mail className="w-8 h-8 text-accent" />
            </div>
            <h3
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              E-mail
            </h3>
            <p className="text-muted-foreground mb-6 text-base leading-relaxed">
              Prefere enviar um e-mail? Fique à vontade
            </p>
            <Button
              onClick={() =>
                (window.location.href = "mailto:egrazielec@gmail.com")
              }
              variant="outline"
              className="w-full text-base font-medium"
              size="lg"
            >
              egrazielec@gmail.com
            </Button>
          </Card>

          <Card className="p-10 border-2 border-border/50 hover:shadow-2xl hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:-translate-y-1 bg-gradient-to-br from-card to-secondary/20">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/10 flex items-center justify-center mb-6 shadow-lg">
              <Instagram className="w-8 h-8 text-pink-600" />
            </div>
            <h3
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              Instagram
            </h3>
            <p className="text-muted-foreground mb-6 text-base leading-relaxed">
              Acompanhe conteúdos sobre saúde mental
            </p>
            <Button
              onClick={() =>
                window.open("https://instagram.com/psi.elayneg", "_blank")
              }
              variant="outline"
              className="w-full text-base font-medium"
              size="lg"
            >
              @psi.elayneg
            </Button>
          </Card>
        </div>

        <Card className="max-w-4xl mx-auto p-10 md:p-14 bg-gradient-to-br from-card to-secondary/30 border-2 border-border/50 shadow-2xl hover:shadow-3xl transition-all duration-500">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 shadow-lg">
              <MapPin className="w-10 h-10 text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "var(--font-crimson)" }}
              >
                Atendimento Online
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Realize suas sessões de psicoterapia no conforto da sua casa,
                com toda a qualidade e sigilo profissional. Atendo pacientes de
                todo o Brasil através de plataformas seguras de videochamada.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
