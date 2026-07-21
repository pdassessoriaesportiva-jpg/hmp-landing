import { Award, Dumbbell, HeartPulse, UserRoundCheck } from "lucide-react";

const credentials = [
  "Professor de Educação Física",
  "Personal trainer",
  "Especialista em reabilitação cardíaca",
  "Especialista em reabilitação musculoesquelética",
  "Treinamento de força, mobilidade e hipopressivos",
  "Desenvolvedor do Método HMP",
];

export function Author() {
  return (
    <section className="section-transition bg-carbon py-24 md:py-36">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="reveal-soft rounded-lg border border-gold/20 bg-white/[0.04] p-8 shadow-glass">
          <div className="flex h-20 w-20 items-center justify-center rounded-md bg-gold text-carbon">
            <UserRoundCheck aria-hidden className="h-10 w-10" />
          </div>
          <h2 className="mt-7 font-display text-4xl font-bold leading-tight text-ivory">
            Paul Dougllas Braga da Silva
          </h2>
          <p className="mt-4 text-base leading-8 text-stonewarm">
            Professor de Educação Física, personal trainer e criador do Método
            HMP, com atuação conectando reabilitação, força, mobilidade,
            hipopressivos e técnicas posturais.
          </p>
        </div>

        <div className="reveal">
          <p className="text-sm font-bold uppercase tracking-normal text-gold">
            Sobre o autor
          </p>
          <h3 className="mt-4 font-display text-4xl font-bold leading-[1.05] text-ivory md:text-6xl">
            Autoridade técnica com linguagem prática para alunos e profissionais.
          </h3>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {credentials.map((credential, index) => {
              const icons = [Award, HeartPulse, Dumbbell];
              const Icon = icons[index % icons.length];

              return (
                <div
                  key={credential}
                  className="flex items-center gap-4 rounded-md border border-white/10 bg-white/[0.035] p-4"
                >
                  <Icon aria-hidden className="h-5 w-5 shrink-0 text-gold" />
                  <p className="text-sm font-semibold leading-6 text-ivory">
                    {credential}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
