import { InstitutionalPage } from "@/components/site/institutional-page";
import { institutionalPages } from "@/content";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata(
  "Curso Presencial",
  institutionalPages.cursoPresencial.description,
);

export default function CursoPresencialPage() {
  return (
    <InstitutionalPage
      data={institutionalPages.cursoPresencial}
      mediaLabel="Presencial"
      ctaLabel="Consultar próximas turmas"
    />
  );
}
