import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { PageHero } from "@/components/site/page-hero";
import { links } from "@/lib/site";

export type InstitutionalPageData = {
  eyebrow: string;
  title: string;
  description: string;
  sections: Array<{
    title: string;
    body: string;
  }>;
};

type InstitutionalPageProps = {
  data: InstitutionalPageData;
  mediaLabel?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function InstitutionalPage({
  data,
  mediaLabel = "Imagem institucional",
  ctaLabel = "Falar pelo WhatsApp",
  ctaHref = links.whatsapp,
}: InstitutionalPageProps) {
  return (
    <main>
      <PageHero
        eyebrow={data.eyebrow}
        title={data.title}
        description={data.description}
      />

      <section className="section-transition bg-obsidian py-24 md:py-32">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="reveal-soft">
            <MediaPlaceholder
              type="photo"
              title={`${data.eyebrow}: visão institucional`}
              label={mediaLabel}
              ratio="portrait"
            />
          </div>

          <div className="grid gap-5">
            {data.sections.map((section, index) => (
              <article
                key={section.title}
                className="reveal-soft rounded-lg border border-white/10 bg-white/[0.035] p-6 shadow-glass md:p-8"
              >
                <p className="font-display text-3xl font-bold text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-5 text-2xl font-bold leading-tight text-ivory">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-stonewarm">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-transition bg-carbon py-20 md:py-28">
        <div className="section-shell reveal rounded-lg border border-gold/20 bg-white/[0.035] p-8 shadow-glass md:p-12">
          <p className="text-sm font-black uppercase tracking-normal text-gold">
            Próximo passo
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-ivory md:text-5xl">
            Continue sua jornada dentro do ecossistema HMP.
          </h2>
          <div className="mt-8">
            <ButtonLink href={ctaHref} icon={ArrowRight}>
              {ctaLabel}
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
