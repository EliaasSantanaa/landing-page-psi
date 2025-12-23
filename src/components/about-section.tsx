import { Card } from "@/components/ui/card";
import { GraduationCap, Heart, Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-gradient-to-b from-secondary/30 to-background"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            Sobre Mim
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            Sou psicóloga, com especialização em Terapia
            Cognitivo-Comportamental (TCC) e pós-graduação em andamento em
            Psicopatologia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 max-w-6xl mx-auto">
          <Card className="p-8 border-2 border-border/50 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-card to-secondary/20 backdrop-blur-sm">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 mx-auto shadow-lg">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h3
              className="text-xl font-bold mb-3 text-center"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              Formação Especializada
            </h3>
            <p className="text-muted-foreground leading-relaxed text-center">
              Especialização em TCC e pós-graduação em Psicopatologia, baseando
              o atendimento em práticas científicas atualizadas.
            </p>
          </Card>

          <Card className="p-8 border-2 border-border/50 hover:shadow-2xl hover:border-accent/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-card to-secondary/20 backdrop-blur-sm">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-6 mx-auto shadow-lg">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <h3
              className="text-xl font-bold mb-3 text-center"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              Espaço Acolhedor
            </h3>
            <p className="text-muted-foreground leading-relaxed text-center">
              Atendimento 100% online, oferecendo um ambiente ético, seguro e
              acolhedor para o seu desenvolvimento emocional.
            </p>
          </Card>

          <Card className="p-8 border-2 border-border/50 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-card to-secondary/20 backdrop-blur-sm">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 mx-auto shadow-lg">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h3
              className="text-xl font-bold mb-3 text-center"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              Mudanças Reais
            </h3>
            <p className="text-muted-foreground leading-relaxed text-center">
              Acredito na terapia como um processo ativo que fortalece a
              autonomia, amplia a consciência e promove qualidade de vida.
            </p>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-card to-secondary/30 border-2 border-border/50 rounded-3xl p-10 md:p-14 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
          <div className="space-y-6 text-center">
            <div className="inline-block">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3
              className="text-2xl md:text-3xl font-bold text-foreground text-balance"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              Minha Abordagem
            </h3>
            <p className="text-muted-foreground leading-relaxed text-pretty text-lg">
              Trabalho com a Terapia Cognitivo-Comportamental, uma abordagem
              científica e eficaz para diversos desafios emocionais e
              comportamentais. Meu foco é ajudá-lo a identificar padrões de
              pensamento, desenvolver estratégias práticas e construir mudanças
              duradouras em sua vida.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty text-lg">
              Cada sessão é conduzida com respeito, ética e sigilo profissional,
              respeitando o seu tempo e suas necessidades individuais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
