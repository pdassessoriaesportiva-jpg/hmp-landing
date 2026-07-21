import { RealResults } from "@/components/real-results";
import { Testimonials } from "@/components/testimonials";
import { InstitutionalPage } from "@/components/site/institutional-page";
import { institutionalPages } from "@/content";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata(
  "Depoimentos",
  institutionalPages.depoimentos.description,
);

export default function DepoimentosPage() {
  return (
    <>
      <InstitutionalPage
        data={institutionalPages.depoimentos}
        mediaLabel="Prova social"
        ctaLabel="Enviar depoimento"
      />
      <RealResults />
      <Testimonials />
    </>
  );
}
