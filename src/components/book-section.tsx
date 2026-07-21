import { BookOpen, ExternalLink } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { links } from "@/lib/site";

export function BookSection() {
  return (
    <section className="section-transition bg-carbon py-24 md:py-40">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="premium-card reveal-soft rounded-xl p-6 md:p-8">
          <div className="relative flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-lg border border-gold/30 bg-[linear-gradient(150deg,#080806,#1b1813_52%,#d9b45f)] p-8 shadow-gold">
            <div className="premium-grid absolute inset-0 opacity-20" />
            <div>
              <p className="text-sm font-bold uppercase tracking-normal text-gold">
                Livro oficial
              </p>
              <h2 className="relative mt-5 font-display text-5xl font-bold leading-none text-ivory">
                Método HMP
              </h2>
              <p className="relative mt-4 text-lg font-semibold leading-7 text-champagne">
                Hipopressivos, Mobilidade e Posturais
              </p>
            </div>
            <BookOpen aria-hidden className="relative h-16 w-16 text-carbon/70" />
          </div>
        </div>

        <div className="reveal">
          <p className="text-sm font-bold uppercase tracking-normal text-gold">
            Livro HMP
          </p>
          <h2 className="text-balance mt-4 font-display text-4xl font-bold leading-[1.05] text-ivory md:text-6xl">
            A porta de entrada oficial para entender o método.
          </h2>
          <p className="mt-7 max-w-3xl text-base leading-8 text-stonewarm md:text-lg md:leading-9">
            O livro apresenta os fundamentos do HMP com linguagem direta,
            conectando respiração hipopressiva, apneia expiratória, vácuo
            abdominal, mobilidade, posturas ativas e controle corporal. É o
            primeiro passo para quem deseja compreender a lógica do método antes
            de avançar para aulas práticas e formações.
          </p>
          <div className="mt-9">
            <ButtonLink href={links.amazon} icon={ExternalLink}>
              Comprar na Amazon
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
