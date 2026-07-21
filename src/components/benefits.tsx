import { audiences, benefits } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";

export function Benefits() {
  return (
    <section className="section-transition soft-spotlight bg-obsidian py-24 md:py-40">
      <div className="section-shell grid gap-16 lg:grid-cols-[1.05fr_0.85fr] lg:items-start">
        <div>
          <div className="reveal">
            <SectionHeading
              eyebrow="Benefícios"
              title="Um corpo que respira, sustenta e se move melhor."
            >
              A proposta do método é construir uma base mais inteligente para o
              corpo funcionar melhor no dia a dia, no treino e em processos de
              reeducação do movimento.
            </SectionHeading>
          </div>

          <div className="mt-14 grid gap-3 sm:grid-cols-2">
            {benefits.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="premium-card reveal-soft group flex min-h-24 items-center gap-4 rounded-lg p-5 transition duration-300 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-gold/10 text-gold transition duration-300 group-hover:bg-gold group-hover:text-carbon">
                  <Icon aria-hidden className="h-5 w-5" />
                </div>
                <p className="text-base font-semibold leading-6 text-ivory">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <aside className="premium-card reveal rounded-xl p-7 md:p-9 lg:sticky lg:top-28">
          <p className="text-sm font-bold uppercase tracking-normal text-gold">
            Para quem é
          </p>
          <h3 className="text-balance mt-4 font-display text-4xl font-bold leading-tight text-ivory">
            Uma porta de entrada para alunos e profissionais.
          </h3>
          <div className="hairline mt-7 h-px w-full" />
          <div className="mt-7 flex flex-wrap gap-3">
            {audiences.map((audience) => (
              <span
                key={audience}
                className="rounded-full border border-white/10 bg-carbon/80 px-4 py-2 text-sm font-semibold text-stonewarm transition hover:border-gold/30 hover:text-ivory"
              >
                {audience}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
