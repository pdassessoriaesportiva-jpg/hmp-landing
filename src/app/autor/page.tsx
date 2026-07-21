import { InstitutionalPage } from "@/components/site/institutional-page";
import { institutionalPages } from "@/content";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata(
  "O Autor",
  institutionalPages.autor.description,
);

export default function AutorPage() {
  return (
    <InstitutionalPage
      data={institutionalPages.autor}
      mediaLabel="Autor"
      ctaLabel="Falar com Paul"
    />
  );
}
