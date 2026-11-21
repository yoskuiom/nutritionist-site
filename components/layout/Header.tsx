'use client';

import { useState } from 'react';
import Image from 'next/image';
import BookingLink from '@/components/ui/BookingLink';
import { site } from '@/data/site';

const links = [
  { href: '#zaprosi', label: 'Запросы' },
  { href: '#format', label: 'Формат' },
  { href: '#pricing', label: 'Тарифы' },
  { href: '#booking', label: 'Оплата' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-[#E9E9E2]/80 bg-cream/95 backdrop-blur-md">
      <div className="site-container flex min-h-[76px] items-center justify-between gap-4 py-3">
        <a href="#top" onClick={() => setMenuOpen(false)} className="inline-flex min-w-0 items-center gap-3" aria-label="На главную">
          <Image src="/icons/logo-aloe.svg" alt="" width={34} height={34} className="shrink-0" />
          <span className="rounded-full border border-olive/50 px-4 py-2 text-[13px] font-medium leading-tight whitespace-nowrap text-forest sm:text-sm
          transition-colors hover:text-olive">
            {site.brand}
          </span>
        </a>

        <nav aria-label="Основная навигация" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-ink transition-colors hover:text-olive focus-visible:underline ">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <BookingLink className="!min-h-10 !px-5 !py-2">Записаться</BookingLink>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-olive/40 text-forest md:hidden transition-colors hover:text-olive cursor-pointer"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 5l14 14M19 5L5 19" /></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          )}
        </button>
      </div>

      <div
        inert={!menuOpen}
        className={`grid transition-[grid-template-rows,opacity]
    duration-450 ease-in-out motion-reduce:transition-none
    md:hidden
    ${menuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="min-h-0 overflow-hidden">
          <nav
            id="mobile-menu"
            aria-label="Мобильная навигация"
            className="absolute inset-x-0 top-full z-50 border-t border-olive/15 bg-cream px-6 pb-6 pt-3"
          >
            <div className="mx-auto flex max-w-xl flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-base
              text-forest hover:bg-pale "
                >
                  {link.label}
                </a>
              ))}

              <BookingLink
                className="mt-3"
                onClick={() => setMenuOpen(false)}
              >
                Записаться на консультацию
              </BookingLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
