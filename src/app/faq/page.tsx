import { FAQ } from "@/components/faq";
import { InstitutionalPage } from "@/components/site/institutional-page";
import { institutionalPages } from "@/content";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("FAQ", institutionalPages.faq.description);

export default function FaqPage() {
  return (
    <>
      <InstitutionalPage data={institutionalPages.faq} mediaLabel="FAQ" />
      <FAQ />
    </>
  );
}
