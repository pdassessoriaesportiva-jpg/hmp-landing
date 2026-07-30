import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { SectionHeading } from "@/components/section-heading";
import { courseCards, courseProofs } from "@/lib/site";

export function CourseSection() {
  return (
    <section id="lista-curso" className="section-transition soft-spotlight bg-obsidian py-24 md:py-40">
      <div className="section-shell">
        <div className="reveal">
          <SectionHeading
            eyebrow="Cursos HMP"
            title="Do estudo inicial à prática guiada."
            align="center"
          >
            O livro, o curso online e as experiências presenciais formam uma
            jornada progressiva para estudar, praticar e aplicar o método.
          </SectionHeading>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
          {courseProofs.map((proof) => (
            <article key={proof.title} className="group">
              <MediaPlaceholder
                type={proof.type}
                title={proof.title}
                label={proof.label}
                ratio={proof.ratio}
                src={proof.src}
                alt={proof.alt}
                position={proof.position}
              />
              <p className="mt-4 text-sm leading-7 text-stonewarm transition group-hover:text-ivory">
                {proof.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {courseCards.map(({ id, eyebrow, title, text, icon: Icon, cta, href }) => (
            <article
              id={id}
              key={id}
              className="premium-card reveal-soft group rounded-xl p-7 transition duration-300 hover:-translate-y-1 md:p-10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold transition duration-300 group-hover:bg-gold group-hover:text-carbon">
                <Icon aria-hidden className="h-6 w-6" />
              </div>
              <p className="mt-8 text-sm font-bold uppercase tracking-normal text-gold">
                {eyebrow}
              </p>
              <h3 className="text-balance mt-4 font-display text-4xl font-bold leading-tight text-ivory">
                {title}
              </h3>
              <p className="mt-6 text-base leading-8 text-stonewarm">{text}</p>
              <div className="mt-9">
                <ButtonLink href={href} icon={ArrowRight} variant="secondary">
                  {cta}
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
