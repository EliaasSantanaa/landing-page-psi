import { Card } from "@/components/ui/card";
import { GraduationCap, Heart, Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="section-shell py-20 md:py-28" data-reveal>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs uppercase tracking-[0.16em] text-primary mb-4">
            Quem te acompanha no processo
          </p>
          <h2 className="section-title text-foreground mb-5">Sobre mim</h2>
          <p className="section-subtitle">
            Sou psicóloga, com especialização em Terapia
            Cognitivo-Comportamental (TCC) e pós-graduação em andamento em
            Psicopatologia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 mb-12 max-w-6xl mx-auto">
          <Card className="interactive-card p-7 border border-border/65 bg-card/85 backdrop-blur-sm">
            <div className="w-14 h-14 rounded-2xl bg-primary/12 flex items-center justify-center mb-5 mx-auto">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-semibold mb-3 text-center">
              Formação
            </h3>
            <p className="text-muted-foreground leading-relaxed text-center">
              Especialização em TCC e pós-graduação em Psicopatologia, baseando
              o atendimento em práticas científicas atualizadas.
            </p>
          </Card>

          <Card className="interactive-card p-7 border border-border/65 bg-card/85 backdrop-blur-sm">
            <div className="w-14 h-14 rounded-2xl bg-accent/14 flex items-center justify-center mb-5 mx-auto">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-3xl font-semibold mb-3 text-center">Escuta</h3>
            <p className="text-muted-foreground leading-relaxed text-center">
              Atendimento 100% online, oferecendo um ambiente ético, seguro e
              acolhedor para o seu desenvolvimento emocional.
            </p>
          </Card>

          <Card className="interactive-card p-7 border border-border/65 bg-card/85 backdrop-blur-sm">
            <div className="w-14 h-14 rounded-2xl bg-primary/12 flex items-center justify-center mb-5 mx-auto">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-semibold mb-3 text-center">Mudança</h3>
            <p className="text-muted-foreground leading-relaxed text-center">
              Acredito na terapia como um processo ativo que fortalece a
              autonomia, amplia a consciência e promove qualidade de vida.
            </p>
          </Card>
        </div>

        <div className="interactive-card max-w-4xl mx-auto bg-card/85 border border-border/65 rounded-3xl p-8 md:p-12">
          <div className="space-y-5 text-center">
            <div className="inline-block">
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-4xl md:text-5xl font-semibold text-foreground text-balance">
              Minha abordagem
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
