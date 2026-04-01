import { Card } from "@/components/ui/card";
import { Video, Clock, Shield, Users, FileText } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs uppercase tracking-[0.16em] text-primary mb-4">
            Processo de terapia
          </p>
          <h2 className="section-title text-foreground mb-5">
            Como funciona o atendimento
          </h2>
          <p className="section-subtitle">
            Atendimento psicológico online com qualidade, segurança e comodidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          <Card className="p-6 text-center border border-border/65 bg-card/85">
            <div className="w-14 h-14 rounded-full bg-primary/12 flex items-center justify-center mx-auto mb-4">
              <Video className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-semibold mb-2">Online</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sessões por videochamada de qualquer lugar
            </p>
          </Card>

          <Card className="p-6 text-center border border-border/65 bg-card/85">
            <div className="w-14 h-14 rounded-full bg-accent/14 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-3xl font-semibold mb-2">Flexibilidade</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Horários adaptados à sua rotina
            </p>
          </Card>

          <Card className="p-6 text-center border border-border/65 bg-card/85">
            <div className="w-14 h-14 rounded-full bg-primary/12 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-semibold mb-2">Sigilo</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ambiente seguro e confidencial
            </p>
          </Card>

          <Card className="p-6 text-center border border-border/65 bg-card/85">
            <div className="w-14 h-14 rounded-full bg-accent/14 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-3xl font-semibold mb-2">Acolhimento</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Espaço empático e sem julgamentos
            </p>
          </Card>

          <Card className="p-6 text-center border border-border/65 bg-card/85">
            <div className="w-14 h-14 rounded-full bg-primary/12 flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-semibold mb-2">Recibo</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Emissão de recibo para reembolso
            </p>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 border border-border/65 bg-card/85">
            <h3 className="text-4xl md:text-5xl font-semibold text-foreground mb-7 text-balance text-center">
              Para quem a terapia pode ajudar
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-primary/14 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Ansiedade e estresse
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-primary/14 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Depressão e tristeza persistente
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-primary/14 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Dificuldades de relacionamento
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-primary/14 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Traumas e luto
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Autoconhecimento e desenvolvimento pessoal
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Transtornos de humor e comportamento
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Conflitos familiares e profissionais
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
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
