import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="section-transition bg-obsidian py-24 md:py-36">
      <div className="section-shell">
        <div className="reveal">
          <SectionHeading
            eyebrow="Depoimentos"
            title="Relatos representativos de quem busca evoluir com método."
            align="center"
          >
            Experiências descritas de forma responsável, sem prometer resultados
            iguais para todos e sem substituir avaliação individual.
          </SectionHeading>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.author}
              className="reveal-soft rounded-lg border border-white/10 bg-carbon p-6 shadow-glass"
            >
              <Quote aria-hidden className="h-7 w-7 text-gold" />
              <p className="mt-6 text-base leading-8 text-stonewarm">
                “{testimonial.quote}”
              </p>
              <div className="mt-7 h-px w-full bg-ivory/10" />
              <p className="mt-5 font-bold text-ivory">{testimonial.author}</p>
              <p className="mt-1 text-sm text-stonewarm">{testimonial.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
