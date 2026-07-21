import { InstitutionalPage } from "@/components/site/institutional-page";
import { institutionalPages } from "@/content";
import { links } from "@/lib/site";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata(
  "Curso Online",
  institutionalPages.cursoOnline.description,
);

export default function CursoOnlinePage() {
  return (
    <InstitutionalPage
      data={institutionalPages.cursoOnline}
      mediaLabel="Curso"
      ctaLabel="Entrar na lista do curso"
      ctaHref={links.leadList}
    />
  );
}
