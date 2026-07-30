import Image from "next/image";
import { ArrowDown, BookOpen, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { heroHighlights, links, stats } from "@/lib/site";

export function Hero() {
  return (
    <section className="section-transition relative min-h-screen overflow-hidden bg-carbon">
      <div className="absolute inset-0">
        <Image
          src="/hmp-body-map.svg"
          alt=""
          width={720}
          height={760}
          priority
          className="h-full w-full scale-105 object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(217,180,95,0.22),transparent_28rem),linear-gradient(90deg,rgba(5,5,5,0.99),rgba(5,5,5,0.86)_48%,rgba(5,5,5,0.98))]" />
        <div className="premium-grid absolute inset-0 opacity-12" />
      </div>

      <div className="section-shell relative grid min-h-screen items-center gap-12 pb-16 pt-32 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:pt-28">
        <div className="reveal max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/70 px-4 py-2 text-xs font-bold uppercase tracking-normal text-champagne">
            Método autoral por Paul Dougllas
          </div>
          <h1 className="text-balance mt-8 max-w-4xl font-display text-6xl font-bold leading-[0.9] text-ivory sm:text-7xl lg:text-8xl xl:text-9xl">
            Método HMP
            <span className="mt-6 block max-w-3xl font-sans text-xl font-semibold leading-tight text-gold sm:text-2xl lg:text-3xl">
              Hipopressivos, Mobilidade e Posturais
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-stonewarm md:text-xl md:leading-9">
            Um método prático para melhorar postura, respiração, mobilidade,
            consciência corporal e controle abdominal.
          </p>
          <div className="mt-11 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#metodo" icon={ArrowDown}>
              Conhecer o Método
            </ButtonLink>
            <ButtonLink href={links.amazon} icon={BookOpen} variant="secondary">
              Comprar o Livro
            </ButtonLink>
          </div>
          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3 border-y border-white/10 py-6">
            {stats.map((stat) => (
              <div key={stat.label} className="pr-3">
                <p className="font-display text-4xl font-bold leading-none text-ivory md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-normal text-stonewarm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-soft relative mx-auto w-full max-w-[660px]">
          <div className="premium-card relative overflow-hidden rounded-xl p-3">
            <div className="media-grain relative aspect-[16/10] overflow-hidden rounded-lg">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/F4iEAnKbyl0?rel=0&modestbranding=1"
                title="Vídeo institucional do Método HMP"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-gold/25 bg-black/80 px-3 py-1 text-xs font-bold uppercase tracking-normal text-gold">
                Vídeo institucional
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {heroHighlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="premium-card flex min-h-20 items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold text-ivory transition duration-300 hover:-translate-y-0.5"
              >
                <Icon className="h-9 w-9 shrink-0 text-gold" />
                {label}
              </div>
            ))}
          </div>
          <a
            href={links.whatsapp}
            className="absolute right-3 top-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold text-carbon shadow-gold transition hover:scale-105 hover:bg-champagne"
            aria-label="Falar pelo WhatsApp"
            title="Falar pelo WhatsApp"
          >
            <MessageCircle aria-hidden className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
