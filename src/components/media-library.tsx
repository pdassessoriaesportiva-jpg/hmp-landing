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
            title="Registros que mostram o método em prática."
            align="center"
          >
            Vídeos, turmas, registros de curso e materiais visuais que ajudam a
            apresentar a aplicação do HMP em diferentes contextos.
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
