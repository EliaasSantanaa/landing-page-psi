import { Card } from "@/components/ui/card";
import { Video, Clock, Shield, Users, FileText } from "lucide-react";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            Como Funciona o Atendimento
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Atendimento psicológico online com qualidade, segurança e comodidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          <Card className="p-6 text-center border-2 border-border/50 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:-translate-y-1 bg-gradient-to-br from-card to-secondary/20">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto mb-4 shadow-md">
              <Video className="w-8 h-8 text-primary" />
            </div>
            <h3
              className="text-lg font-bold mb-2"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              100% Online
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sessões por videochamada de qualquer lugar
            </p>
          </Card>

          <Card className="p-6 text-center border-2 border-border/50 hover:shadow-2xl hover:border-accent/30 transition-all duration-500 hover:scale-105 hover:-translate-y-1 bg-gradient-to-br from-card to-secondary/20">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mx-auto mb-4 shadow-md">
              <Clock className="w-8 h-8 text-accent" />
            </div>
            <h3
              className="text-lg font-bold mb-2"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              Flexibilidade
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Horários adaptados à sua rotina
            </p>
          </Card>

          <Card className="p-6 text-center border-2 border-border/50 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:-translate-y-1 bg-gradient-to-br from-card to-secondary/20">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto mb-4 shadow-md">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3
              className="text-lg font-bold mb-2"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              Sigilo Total
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ambiente seguro e confidencial
            </p>
          </Card>

          <Card className="p-6 text-center border-2 border-border/50 hover:shadow-2xl hover:border-accent/30 transition-all duration-500 hover:scale-105 hover:-translate-y-1 bg-gradient-to-br from-card to-secondary/20">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mx-auto mb-4 shadow-md">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <h3
              className="text-lg font-bold mb-2"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              Acolhimento
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Espaço empático e sem julgamentos
            </p>
          </Card>

          <Card className="p-6 text-center border-2 border-border/50 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:-translate-y-1 bg-gradient-to-br from-card to-secondary/20">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto mb-4 shadow-md">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h3
              className="text-lg font-bold mb-2"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              Recibo
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Emissão de recibo para reembolso
            </p>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-10 md:p-14 border-2 border-border/50 bg-gradient-to-br from-card to-secondary/30 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
            <h3
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 text-balance text-center"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              Para Quem é a Terapia?
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/30 to-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Ansiedade e estresse
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/30 to-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Depressão e tristeza persistente
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/30 to-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Dificuldades de relacionamento
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/30 to-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Traumas e luto
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent/30 to-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Autoconhecimento e desenvolvimento pessoal
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent/30 to-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Transtornos de humor e comportamento
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent/30 to-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Conflitos familiares e profissionais
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent/30 to-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Crises e mudanças de vida
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
