import { InstitutionalPage } from "@/components/site/institutional-page";
import { legalPages } from "@/content";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata(
  "Direitos Autorais",
  legalPages.direitos.description,
);

export default function DireitosAutoraisPage() {
  return <InstitutionalPage data={legalPages.direitos} mediaLabel="Legal" />;
}
