type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="section-transition relative overflow-hidden bg-carbon pt-36 md:pt-44">
      <div className="absolute inset-0">
        <div className="premium-grid absolute inset-0 opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(217,180,95,0.24),transparent_30rem),linear-gradient(180deg,rgba(5,5,5,0.6),#050505)]" />
      </div>
      <div className="section-shell reveal relative pb-20 md:pb-28">
        <p className="text-sm font-black uppercase tracking-normal text-gold">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-5xl font-display text-5xl font-bold leading-[1.02] text-ivory md:text-7xl">
          {title}
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-stonewarm md:text-xl">
          {description}
        </p>
      </div>
    </section>
  );
}
