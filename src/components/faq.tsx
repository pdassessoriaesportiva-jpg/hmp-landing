import { faqs } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";

export function FAQ() {
  return (
    <section className="section-transition bg-carbon py-24 md:py-36">
      <div className="section-shell">
        <div className="reveal">
          <SectionHeading
            eyebrow="FAQ"
            title="Perguntas frequentes"
            align="center"
          >
            Respostas diretas para reduzir objeções, orientar o público leigo e
            manter a comunicação responsável.
          </SectionHeading>
        </div>

        <div className="reveal-soft mx-auto mt-12 max-w-4xl divide-y divide-white/10 rounded-lg border border-white/10 bg-white/[0.035] shadow-glass">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-bold text-ivory">
                {faq.question}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-gold/30 text-gold transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-stonewarm">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
