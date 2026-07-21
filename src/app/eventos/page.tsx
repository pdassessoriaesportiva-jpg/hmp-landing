import { InstitutionalPage } from "@/components/site/institutional-page";
import { institutionalPages } from "@/content";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata(
  "Eventos",
  institutionalPages.eventos.description,
);

export default function EventosPage() {
  return (
    <InstitutionalPage
      data={institutionalPages.eventos}
      mediaLabel="Agenda"
      ctaLabel="Receber agenda de eventos"
    />
  );
}
