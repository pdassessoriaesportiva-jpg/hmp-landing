import { InstitutionalPage } from "@/components/site/institutional-page";
import { institutionalPages } from "@/content";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata(
  "O Método",
  institutionalPages.metodo.description,
);

export default function MetodoPage() {
  return (
    <InstitutionalPage
      data={institutionalPages.metodo}
      mediaLabel="Método"
      ctaLabel="Conhecer o livro"
      ctaHref="/livro"
    />
  );
}
