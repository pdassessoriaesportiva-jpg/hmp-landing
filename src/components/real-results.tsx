import { MediaPlaceholder } from "@/components/media-placeholder";
import { SectionHeading } from "@/components/section-heading";
import { realResults } from "@/lib/site";

export function RealResults() {
  return (
    <section id="resultados" className="section-transition soft-spotlight bg-obsidian py-24 md:py-40">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div className="reveal">
            <SectionHeading
              eyebrow="Resultados Reais"
              title="Evidências visuais com contexto e responsabilidade."
            >
              Registros de prática, medidas e comparativos devem ser lidos
              como experiências individuais, sempre sem promessas absolutas.
            </SectionHeading>
          </div>
          <div className="premium-card reveal rounded-xl p-7 md:p-9">
            <p className="text-sm font-bold uppercase tracking-normal text-gold">
              Leitura responsável
            </p>
            <p className="text-balance mt-4 font-display text-3xl font-semibold leading-tight text-ivory md:text-4xl">
              “Imagem, relato, consistência e orientação técnica contam a
              história com mais honestidade do que promessas rápidas.”
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {realResults.map((result) => (
            <article key={result.title} className="reveal-soft group">
              <MediaPlaceholder
                type={result.type}
                title={result.title}
                label={result.label}
                ratio={result.ratio}
                src={result.src}
                alt={result.alt}
                position={result.position}
              />
              <p className="mt-5 text-sm leading-7 text-stonewarm transition group-hover:text-ivory">
                {result.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
