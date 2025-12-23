export function QuoteSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-primary/15 via-secondary/40 to-accent/15 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 animate-pulse">
            <svg
              className="w-24 h-24 mx-auto text-primary/30"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <blockquote
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-10 text-balance px-4"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            Quando a mente encontra clareza, o comportamento encontra direção.
          </blockquote>
          <p
            className="text-xl md:text-2xl text-primary font-bold"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            — Elayne Graziele
          </p>
        </div>
      </div>
    </section>
  );
}
