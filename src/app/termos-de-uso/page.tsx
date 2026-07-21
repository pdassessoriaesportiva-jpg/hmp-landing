import { InstitutionalPage } from "@/components/site/institutional-page";
import { legalPages } from "@/content";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata(
  "Termos de Uso",
  legalPages.termos.description,
);

export default function TermosPage() {
  return <InstitutionalPage data={legalPages.termos} mediaLabel="Legal" />;
}
