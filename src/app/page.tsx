import { Author } from "@/components/author";
import { Benefits } from "@/components/benefits";
import { BookSection } from "@/components/book-section";
import { CourseSection } from "@/components/course-section";
import { CTA } from "@/components/cta";
import { FAQ } from "@/components/faq";
import { Hero } from "@/components/hero";
import { MediaLibrary } from "@/components/media-library";
import { Method } from "@/components/method";
import { ProblemSolution } from "@/components/problem-solution";
import { RealResults } from "@/components/real-results";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Método HMP",
    description:
      "Método criado por Paul Dougllas que integra hipopressivos, mobilidade, posturas ativas, respiração e controle do core.",
    provider: {
      "@type": "Person",
      name: "Paul Dougllas Braga da Silva",
      jobTitle: "Professor de Educação Física",
    },
    inLanguage: "pt-BR",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <Hero />
        <ProblemSolution />
        <Method />
        <Benefits />
        <MediaLibrary />
        <RealResults />
        <BookSection />
        <CourseSection />
        <Author />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}
