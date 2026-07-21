import type { Metadata } from "next";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://metodohmp.com.br"),
  title: {
    default: "Método HMP | Hipopressivos, Mobilidade e Posturais",
    template: "%s | Método HMP",
  },
  description:
    "Landing page oficial do Método HMP, criado por Paul Dougllas, integrando hipopressivos, mobilidade, posturas ativas, respiração e controle do core.",
  keywords: [
    "Método HMP",
    "hipopressivos",
    "mobilidade",
    "postura",
    "vácuo abdominal",
    "core",
    "respiração",
    "Paul Dougllas",
  ],
  authors: [{ name: "Paul Dougllas Braga da Silva" }],
  creator: "Paul Dougllas Braga da Silva",
  openGraph: {
    title: "Método HMP",
    description:
      "Hipopressivos, Mobilidade e Posturais em um método prático para respiração, postura, mobilidade e controle abdominal.",
    url: "https://metodohmp.com.br",
    siteName: "Método HMP",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/hmp-body-map.svg",
        width: 1200,
        height: 630,
        alt: "Método HMP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Método HMP",
    description:
      "Hipopressivos, Mobilidade e Posturais em uma experiência prática e progressiva.",
    images: ["/hmp-body-map.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
