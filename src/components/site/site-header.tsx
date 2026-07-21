"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { locale } from "@/content";
import { links } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-carbon/95 shadow-[0_12px_40px_rgba(0,0,0,0.32)]">
      <div className="section-shell flex h-20 items-center justify-between gap-6">
        <Link href="/" className="group flex items-center gap-3" aria-label="Método HMP">
          <span className="flex h-10 w-10 items-center justify-center rounded-md border border-gold/40 bg-white/[0.04] font-display text-lg font-bold text-gold transition group-hover:border-gold">
            H
          </span>
          <span>
            <span className="block text-sm font-black uppercase tracking-normal text-ivory">
              {locale.brand.name}
            </span>
            <span className="hidden text-xs font-semibold text-stonewarm sm:block">
              {locale.brand.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Navegação principal">
          {locale.nav.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-white/10 text-ivory"
                    : "text-stonewarm hover:bg-white/5 hover:text-ivory"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Link
            href="/artigos-cientificos"
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-stonewarm transition hover:border-gold/40 hover:text-ivory"
          >
            Ciência
          </Link>
          <a
            href={links.whatsapp}
            className="inline-flex items-center gap-2 rounded-full bg-ivory px-4 py-2 text-sm font-black text-carbon transition hover:bg-gold"
          >
            <MessageCircle aria-hidden className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-ivory transition hover:border-gold/40 xl:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
        </button>
      </div>

      <div className={`absolute inset-x-0 top-20 xl:hidden ${open ? "block" : "hidden"}`}>
        <div className="section-shell pb-5">
          <div className="rounded-lg border border-white/10 bg-obsidian/98 p-4 shadow-glass">
            <nav className="grid gap-1" aria-label="Navegação mobile">
              {locale.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-4 py-3 text-base font-bold text-ivory transition hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/artigos-cientificos"
                className="rounded-md px-4 py-3 text-base font-bold text-ivory transition hover:bg-white/5"
              >
                Artigos Científicos
              </Link>
              <Link
                href="/depoimentos"
                className="rounded-md px-4 py-3 text-base font-bold text-ivory transition hover:bg-white/5"
              >
                Depoimentos
              </Link>
            </nav>
            <a
              href={links.whatsapp}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ivory px-5 py-3 text-sm font-black uppercase tracking-normal text-carbon transition hover:bg-gold"
            >
              <MessageCircle aria-hidden className="h-4 w-4" />
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
