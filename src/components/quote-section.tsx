export function QuoteSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center rounded-3xl border border-border/65 bg-card/80 px-6 py-12 md:px-10 md:py-16">
          <div className="mb-8">
            <svg
              className="w-20 h-20 mx-auto text-primary/25"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <blockquote className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-8 text-balance px-4">
            Quando a mente encontra clareza, o comportamento encontra direção.
          </blockquote>

          <p className="text-base md:text-lg uppercase tracking-[0.16em] text-primary font-semibold">
            Elayne Graziele
          </p>
        </div>
      </div>
    </section>
  );
}
