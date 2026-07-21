import { MediaPlaceholder } from "@/components/media-placeholder";
import { SectionHeading } from "@/components/section-heading";
import { mediaPlaceholders } from "@/lib/site";

export function MediaLibrary() {
  return (
    <section className="section-transition bg-carbon py-24 md:py-36">
      <div className="section-shell">
        <div className="reveal">
          <SectionHeading
            eyebrow="Acervo visual"
            title="Estrutura pronta para substituir placeholders por ativos reais."
            align="center"
          >
            A página já nasce preparada para receber vídeos, fotos oficiais,
            prints de WhatsApp e comparativos visuais, sem precisar redesenhar
            a experiência quando os materiais estiverem prontos.
          </SectionHeading>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.25fr_0.75fr_0.75fr]">
          <div className="reveal-soft lg:row-span-2">
            <MediaPlaceholder {...mediaPlaceholders[0]} />
          </div>
          {mediaPlaceholders.slice(1).map((item) => (
            <div key={item.label} className="reveal-soft">
              <MediaPlaceholder {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
