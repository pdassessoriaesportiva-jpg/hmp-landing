import { InstitutionalPage } from "@/components/site/institutional-page";
import { institutionalPages } from "@/content";
import { links } from "@/lib/site";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata(
  "Livro",
  institutionalPages.livro.description,
);

export default function LivroPage() {
  return (
    <InstitutionalPage
      data={institutionalPages.livro}
      mediaLabel="Livro"
      ctaLabel="Comprar na Amazon"
      ctaHref={links.amazon}
    />
  );
}
