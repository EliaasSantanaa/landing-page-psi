"use client";

export function Footer() {
  return (
    <footer
      className="section-shell border-t border-border/65 bg-secondary/45"
      data-reveal
    >
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-8">
          <div>
            <h3 className="text-4xl font-semibold mb-4 text-primary">
              Elayne Graziele
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Psicóloga CRP ativo, especialista em Terapia
              Cognitivo-Comportamental. Atendimento online com foco em
              desenvolvimento emocional e qualidade de vida.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Navegação
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-primary transition-colors duration-300 inline-block"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-primary transition-colors duration-300 inline-block"
                >
                  Servicos
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-primary transition-colors duration-300 inline-block"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://wa.me/5511960247780"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors duration-300 inline-block"
                >
                  WhatsApp: +55 11 96024-7780
                </a>
              </li>
              <li>
                <a
                  href="mailto:egrazielec@gmail.com"
                  className="hover:text-accent transition-colors duration-300 inline-block"
                >
                  egrazielec@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p className="font-semibold">
            © {new Date().getFullYear()} Elayne Graziele - Psicóloga. Todos os
            direitos reservados.
          </p>
          <p className="mt-2">
            Desenvolvido com cuidado para promover saúde mental e bem-estar.
          </p>
        </div>
      </div>
    </footer>
  );
}
