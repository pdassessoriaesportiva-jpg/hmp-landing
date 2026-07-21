import { BookOpen, MessageCircle, Send } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { links } from "@/lib/site";

export function CTA() {
  return (
    <section className="section-transition bg-obsidian py-24 md:py-40">
      <div className="section-shell reveal relative overflow-hidden rounded-2xl border border-gold/25 bg-[linear-gradient(135deg,#080808,#171717_56%,#2b2314)] p-8 text-center shadow-gold md:p-20">
        <div className="premium-grid absolute inset-0 opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,180,95,0.20),transparent_30rem)]" />
        <div className="relative">
        <p className="text-sm font-bold uppercase tracking-normal text-gold">
          Próximo passo
        </p>
        <h2 className="text-balance mx-auto mt-5 max-w-4xl font-display text-5xl font-bold leading-[1.02] text-ivory md:text-7xl">
          Comece agora sua jornada com o Método HMP
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-stonewarm md:text-lg">
          Escolha sua porta de entrada: estude pelo livro, entre na lista do
          curso online ou converse pelo WhatsApp para saber sobre turmas,
          atendimentos e experiências presenciais.
        </p>
        <div className="mt-11 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={links.amazon} icon={BookOpen}>
            Comprar o livro
          </ButtonLink>
          <ButtonLink href={links.leadList} icon={Send} variant="secondary">
            Entrar na lista do curso
          </ButtonLink>
          <ButtonLink href={links.whatsapp} icon={MessageCircle} variant="ghost">
            Falar pelo WhatsApp
          </ButtonLink>
        </div>
        </div>
      </div>
    </section>
  );
}
