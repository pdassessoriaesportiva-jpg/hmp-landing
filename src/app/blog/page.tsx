import { InstitutionalPage } from "@/components/site/institutional-page";
import { institutionalPages } from "@/content";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata(
  "Blog",
  institutionalPages.blog.description,
);

export default function BlogPage() {
  return (
    <InstitutionalPage
      data={institutionalPages.blog}
      mediaLabel="Editorial"
      ctaLabel="Sugerir tema"
    />
  );
}
