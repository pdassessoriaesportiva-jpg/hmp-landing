import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { InstitutionalPage } from "@/components/site/institutional-page";
import { institutionalPages } from "@/content";
import { createPageMetadata } from "@/lib/page-metadata";
import { links } from "@/lib/site";

export const metadata = createPageMetadata(
  "Contato",
  institutionalPages.contato.description,
);

export default function ContatoPage() {
  return (
    <>
      <InstitutionalPage data={institutionalPages.contato} mediaLabel="Contato" />
      <section className="section-transition bg-obsidian py-20 md:py-28">
        <div className="section-shell grid gap-5 md:grid-cols-2">
          <div className="reveal-soft rounded-lg border border-white/10 bg-white/[0.035] p-8 shadow-glass">
            <p className="text-sm font-black uppercase tracking-normal text-gold">
              Canal direto
            </p>
            <h2 className="mt-4 text-3xl font-bold text-ivory">WhatsApp</h2>
            <p className="mt-4 text-base leading-8 text-stonewarm">
              Ideal para dúvidas sobre livro, cursos, eventos, parcerias e lista
              de interesse.
            </p>
            <div className="mt-7">
              <ButtonLink href={links.whatsapp} icon={MessageCircle}>
                Falar pelo WhatsApp
              </ButtonLink>
            </div>
          </div>
          <div className="reveal-soft rounded-lg border border-white/10 bg-white/[0.035] p-8 shadow-glass">
            <p className="text-sm font-black uppercase tracking-normal text-gold">
              Institucional
            </p>
            <h2 className="mt-4 text-3xl font-bold text-ivory">Parcerias e imprensa</h2>
            <p className="mt-4 text-base leading-8 text-stonewarm">
              Para mídia kit, convites, cursos presenciais, eventos e parcerias
              internacionais, o atendimento também acontece pelo WhatsApp.
            </p>
            <div className="mt-7">
              <ButtonLink href={links.whatsapp} icon={MessageCircle} variant="secondary">
                Conversar pelo WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
