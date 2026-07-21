import { InstitutionalPage } from "@/components/site/institutional-page";
import { institutionalPages } from "@/content";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata(
  "Artigos Científicos",
  institutionalPages.artigosCientificos.description,
);

export default function ArtigosCientificosPage() {
  return (
    <InstitutionalPage
      data={institutionalPages.artigosCientificos}
      mediaLabel="Biblioteca"
      ctaLabel="Enviar referência"
    />
  );
}
