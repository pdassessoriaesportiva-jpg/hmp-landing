import { methodSteps } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";

export function Method() {
  return (
    <section id="metodo" className="section-transition bg-carbon py-24 md:py-40">
      <div className="section-shell">
        <div className="reveal">
          <SectionHeading
            eyebrow="Como funciona"
            title="Uma sequência técnica, respiratória e postural."
          >
            O HMP conduz o praticante por fundamentos simples de entender, mas
            potentes quando aplicados com precisão: respirar melhor, sustentar
            posturas ativas, criar crescimento axial e integrar mobilidade com
            controle abdominal.
          </SectionHeading>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {methodSteps.map((step, index) => (
            <article
              key={step.title}
              className="premium-card reveal-soft group relative overflow-hidden rounded-xl p-7 transition duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-sm font-black text-gold">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-7 text-2xl font-bold leading-tight text-ivory">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-stonewarm">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
