import Link from "next/link";
import { Instagram, Mail, MessageCircle, Youtube } from "lucide-react";
import { locale } from "@/content";
import { links } from "@/lib/site";

const socialIcons = {
  Instagram,
  YouTube: Youtube,
  LinkedIn: Mail,
};

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-carbon">
      <div className="section-shell py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.9fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-md border border-gold/40 font-display text-xl font-bold text-gold">
                H
              </span>
              <span>
                <span className="block text-base font-black uppercase text-ivory">
                  {locale.brand.name}
                </span>
                <span className="block text-sm text-stonewarm">
                  {locale.brand.tagline}
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-stonewarm">
              Marca institucional criada para conectar livro, cursos, eventos,
              ciência, conteúdo e experiências presenciais do Método HMP.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {locale.footer.social.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons] ?? Mail;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-stonewarm transition hover:border-gold/40 hover:text-gold"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <Icon aria-hidden className="h-4 w-4" />
                  </a>
                );
              })}
              <a
                href={links.whatsapp}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-stonewarm transition hover:border-gold/40 hover:text-gold"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <MessageCircle aria-hidden className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {locale.footer.columns.map((column) => (
              <div key={column.title}>
                <p className="text-sm font-black uppercase tracking-normal text-ivory">
                  {column.title}
                </p>
                <div className="mt-4 grid gap-3">
                  {column.links.map((link) => {
                    const external = link.href.startsWith("http");
                    const className =
                      "text-sm font-semibold text-stonewarm transition hover:text-gold";

                    return external ? (
                      <a key={link.href} href={link.href} className={className}>
                        {link.label}
                      </a>
                    ) : (
                      <Link key={link.href} href={link.href} className={className}>
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs font-semibold text-stonewarm md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {locale.brand.legalName}. Todos os
            direitos reservados.
          </p>
          <p>Estrutura preparada para PT-BR, EN e ES.</p>
        </div>
      </div>
    </footer>
  );
}
