import { InstitutionalPage } from "@/components/site/institutional-page";
import { legalPages } from "@/content";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata(
  "Política de Privacidade",
  legalPages.politica.description,
);

export default function PoliticaPage() {
  return <InstitutionalPage data={legalPages.politica} mediaLabel="Legal" />;
}
