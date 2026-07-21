import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { painPoints } from "@/lib/site";

export function ProblemSolution() {
  return (
    <section className="section-transition bg-obsidian py-24 md:py-36">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="reveal">
          <SectionHeading
            eyebrow="O problema"
            title="Quando o corpo perde organização, ele cobra."
          >
            Dores lombares, rigidez, respiração superficial e falta de controle
            abdominal não costumam aparecer isoladamente. Muitas vezes, são
            sinais de um corpo que perdeu eficiência para respirar, sustentar e
            se mover com presença.
          </SectionHeading>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {painPoints.map((item) => (
            <div
              key={item}
              className="reveal-soft rounded-md border border-white/10 bg-black/70 p-5"
            >
              <AlertTriangle aria-hidden className="h-5 w-5 text-gold" />
              <p className="mt-4 text-sm font-semibold leading-6 text-ivory">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-shell reveal mt-20 rounded-lg border border-gold/20 bg-white/[0.04] p-7 shadow-glass md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-gold text-carbon">
            <CheckCircle2 aria-hidden className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-normal text-gold">
              A solução
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold leading-tight text-ivory md:text-5xl">
              O HMP integra hipopressivos, mobilidade e posturas ativas.
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-stonewarm md:text-lg">
              Em vez de tratar respiração, abdômen e postura como partes
              separadas, o método organiza esses elementos em uma prática
              progressiva. O objetivo é melhorar controle, consciência e
              qualidade de movimento, respeitando limites individuais e sem
              promessas absolutas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
