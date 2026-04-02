"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MessageCircle, MapPin, Instagram } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="section-shell py-20 md:py-28" data-reveal>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs uppercase tracking-[0.16em] text-primary mb-4">
            Proximo passo
          </p>
          <h2 className="section-title text-foreground mb-5">Vamos comecar?</h2>
          <p className="section-subtitle">
            Entre em contato para agendar sua primeira consulta ou tirar dúvidas
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-5 mb-10">
          <Card className="interactive-card p-8 border border-border/65 bg-card/85">
            <div className="w-14 h-14 rounded-2xl bg-primary/12 flex items-center justify-center mb-5">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-semibold mb-3">WhatsApp</h3>
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
              Enviar mensagem
            </Button>
          </Card>

          <Card className="interactive-card p-8 border border-border/65 bg-card/85">
            <div className="w-14 h-14 rounded-2xl bg-accent/14 flex items-center justify-center mb-5">
              <Mail className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-3xl font-semibold mb-3">E-mail</h3>
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
              Enviar e-mail
            </Button>
          </Card>

          <Card className="interactive-card p-8 border border-border/65 bg-card/85">
            <div className="w-14 h-14 rounded-2xl bg-primary/12 flex items-center justify-center mb-5">
              <Instagram className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-3xl font-semibold mb-3">Instagram</h3>
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
              Ver perfil
            </Button>
          </Card>
        </div>

        <Card className="interactive-card max-w-5xl mx-auto p-8 md:p-10 bg-card/85 border border-border/65">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0">
              <MapPin className="w-10 h-10 text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-4xl md:text-5xl font-semibold mb-4">
                Atendimento online
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
