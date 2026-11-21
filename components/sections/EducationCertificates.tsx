'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { educationCertificates } from '@/data/site';

type Certificate = {
  date: string;
  title: string;
  imageUrl: string;
  originalUrl?: string;
  thumbnailUrl?: string;
};

// Контент остаётся в data/site.ts — здесь только отображение.
const certificates: readonly Certificate[] = educationCertificates;

const groupedCertificates = Object.entries(
  certificates.reduce<Record<string, { certificate: Certificate; index: number }[]>>(
    (groups, certificate, index) => {
      const year = certificate.date.slice(0, 4);
      (groups[year] ??= []).push({ certificate, index });
      return groups;
    },
    {},
  ),
).sort(([a], [b]) => Number(b) - Number(a));

function formatDate(value: string) {
  return value.split('-').reverse().join('.');
}

function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {direction === 'left' ? <path d="M14 5 7 12l7 7" /> : <path d="m10 5 7 7-7 7" />}
    </svg>
  );
}

export default function EducationCertificates() {
  const [expanded, setExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  const active = activeIndex === null ? null : certificates[activeIndex];

  useEffect(() => setMounted(true), []);

  // Нативный showModal помещает просмотрщик в верхний слой браузера.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activeIndex !== null && !dialog.open) dialog.showModal();
    if (activeIndex === null && dialog.open) dialog.close();
  }, [activeIndex, mounted]);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      setLoaded(false);
      setFailed(false);
      setZoomed(false);
      const step = event.key === 'ArrowRight' ? 1 : -1;
      setActiveIndex((index) =>
        index === null ? null : (index + step + certificates.length) % certificates.length,
      );
    }

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [activeIndex]);

  function openCertificate(index: number) {
    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    setLoaded(false);
    setFailed(false);
    setZoomed(false);
    setActiveIndex(index);
  }

  function closeCertificate() {
    setActiveIndex(null);
    setZoomed(false);
    if (dialogRef.current?.open) dialogRef.current.close();
    lastFocusedRef.current?.focus();
  }

  function changeCertificate(step: number) {
    setLoaded(false);
    setFailed(false);
    setZoomed(false);
    setActiveIndex((index) =>
      index === null ? null : (index + step + certificates.length) % certificates.length,
    );
  }

  return (
    <>
      <div className="mt-4 w-full text-forest">
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          aria-controls="education-certificates-panel"
          className="flex w-full cursor-pointer items-center gap-3 rounded-2xl bg-pale px-4 py-3 text-left text-sm font-semibold transition-colors hover:bg-[#DAE9D1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive"
        >
          <span className="min-w-0 flex-1">Посмотреть документы об образовании</span>
          <span className="rounded-full border border-olive/40 px-2 py-0.5 text-xs tabular-nums">
            {certificates.length}
          </span>
          <svg
            className={`shrink-0 transition-transform duration-300 motion-reduce:transition-none ${expanded ? 'rotate-180' : ''}`}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div
          id="education-certificates-panel"
          inert={!expanded}
          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out motion-reduce:transition-none ${expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="pt-4">
              {groupedCertificates.map(([year, items]) => (
                <div key={year} className="mb-5 last:mb-0">
                  <h3 className="mb-2 text-sm font-extrabold tracking-wide text-olive">{year}</h3>
                  <ul className="overflow-hidden rounded-[20px] border border-olive/25 bg-[#FFFEFA]">
                    {items.map(({ certificate, index }, itemIndex) => (
                      <li key={`${certificate.date}-${certificate.title}`} className={itemIndex ? 'border-t border-olive/15' : ''}>
                        <button
                          type="button"
                          onClick={() => openCertificate(index)}
                          className="grid w-full cursor-pointer grid-cols-[56px_minmax(0,1fr)_20px] items-center gap-3 px-3 py-3 text-left transition-colors hover:bg-pale/65 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-olive sm:grid-cols-[68px_minmax(0,1fr)_20px] sm:gap-4 sm:px-4"
                          aria-label={`Просмотреть документ: ${certificate.title}, ${formatDate(certificate.date)}`}
                        >
                          {/* Настоящая миниатюра: Next.js уменьшает локальный оригинал автоматически. */}
                          <span className="block h-[76px] w-[56px] overflow-hidden rounded-lg border border-olive/25 bg-white shadow-sm sm:h-[90px] sm:w-[68px]">
                            <Image
                              src={certificate.thumbnailUrl ?? certificate.imageUrl}
                              alt=""
                              width={68}
                              height={90}
                              sizes="(max-width: 639px) 56px, 68px"
                              loading="lazy"
                              className="block h-full w-full object-contain p-1"
                            />
                          </span>

                          <span className="flex min-w-0 flex-col gap-1.5">
                            <time dateTime={certificate.date} className="text-xs tabular-nums text-forest/65">
                              {formatDate(certificate.date)}
                            </time>
                            <span className="text-sm font-semibold leading-snug text-forest">
                              {certificate.title}
                            </span>
                          </span>

                          <svg className="shrink-0 text-olive" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {mounted && createPortal(
        <dialog
          ref={dialogRef}
          aria-label="Просмотр документов об образовании"
          className="fixed inset-0 z-[9999] m-auto h-[calc(100dvh-16px)] w-[calc(100vw-16px)] max-h-none max-w-[1120px] overflow-hidden rounded-2xl border border-olive/30 bg-cream p-0 text-forest shadow-2xl backdrop:bg-[#071408]/85 sm:h-[min(860px,calc(100dvh-40px))] sm:w-[calc(100vw-48px)]"
          onCancel={(event) => {
            event.preventDefault();
            closeCertificate();
          }}
          onClose={() => {
            setActiveIndex(null);
            lastFocusedRef.current?.focus();
          }}
          onClick={(event) => {
            // Клик по затемнению за пределами окна.
            if (event.target !== event.currentTarget) return;
            const rect = event.currentTarget.getBoundingClientRect();
            if (
              event.clientX < rect.left || event.clientX > rect.right ||
              event.clientY < rect.top || event.clientY > rect.bottom
            ) closeCertificate();
          }}
        >
          {active && activeIndex !== null && (
            <div className="flex h-full min-h-0 flex-col">
              <div className="flex shrink-0 items-start justify-between gap-3 border-b border-olive/25 bg-cream px-3 py-3 sm:px-5 sm:py-4">
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold tabular-nums text-olive">
                    Документ {activeIndex + 1} из {certificates.length} · {formatDate(active.date)}
                  </p>
                  <h3 className="mt-1 text-sm font-bold leading-snug text-forest sm:text-lg">
                    {active.title}
                  </h3>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    className="grid size-9 cursor-pointer place-items-center rounded-full border border-olive/35 bg-white/90 text-forest transition-colors hover:bg-pale sm:size-10"
                    onClick={() => setZoomed((value) => !value)}
                    aria-label={zoomed ? 'Уменьшить документ' : 'Увеличить документ'}
                    aria-pressed={zoomed}
                    title={zoomed ? 'Уменьшить' : 'Увеличить'}
                  >
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                      <circle cx="10.5" cy="10.5" r="6.5" />
                      <path d={zoomed ? 'M7.5 10.5h6' : 'M7.5 10.5h6M10.5 7.5v6'} />
                      <path d="m15.5 15.5 5 5" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="grid size-9 cursor-pointer place-items-center rounded-full border border-olive/35 bg-white/90 text-forest transition-colors hover:bg-pale sm:size-10"
                    onClick={closeCertificate}
                    aria-label="Закрыть документ"
                    title="Закрыть"
                  >
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                      <path d="M5 5 19 19M19 5 5 19" />
                    </svg>
                  </button>
                </div>
              </div>

              <div
                className="relative min-h-0 flex-1 bg-[#E9EDE6]"
                onTouchStart={(event) => {
                  touchStartXRef.current = event.changedTouches[0].screenX;
                }}
                onTouchEnd={(event) => {
                  if (touchStartXRef.current === null) return;
                  const difference = event.changedTouches[0].screenX - touchStartXRef.current;
                  touchStartXRef.current = null;
                  if (Math.abs(difference) > 65) changeCertificate(difference < 0 ? 1 : -1);
                }}
              >
                <div className="flex h-full w-full items-center overflow-auto p-2 sm:p-5">
                  {failed ? (
                    <div className="max-w-md px-8 text-center text-sm leading-relaxed text-forest">
                      Не удалось открыть изображение. Проверьте путь к файлу в `data/site.ts`.
                    </div>
                  ) : (
                    <>
                      {!loaded && (
                        <span className="pointer-events-none absolute text-sm text-forest/60" role="status">
                          Загружаем документ…
                        </span>
                      )}
                      {/* Оригинал загружается только после клика; без Next.js fill и изменения качества. */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        key={active.imageUrl}
                        src={active.imageUrl}
                        alt={`Сертификат: ${active.title}`}
                        loading="eager"
                        decoding="async"
                        className={zoomed
                          ? 'relative m-auto block h-auto w-[160%] max-w-none shrink-0 cursor-zoom-out'
                          : 'relative m-auto block max-h-full max-w-full cursor-zoom-in object-contain'}
                        style={loaded ? undefined : { opacity: 0 }}
                        onLoad={() => setLoaded(true)}
                        onError={() => setFailed(true)}
                        onClick={() => setZoomed((value) => !value)}
                      />
                    </>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => changeCertificate(-1)}
                  aria-label="Предыдущий сертификат"
                  className="absolute top-1/2 left-1 z-10 grid size-9 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-cream/95 text-forest shadow-md transition-colors hover:bg-pale focus-visible:outline-2 focus-visible:outline-olive sm:left-4 sm:size-12"
                >
                  <ArrowIcon direction="left" />
                </button>
                <button
                  type="button"
                  onClick={() => changeCertificate(1)}
                  aria-label="Следующий сертификат"
                  className="absolute top-1/2 right-1 z-10 grid size-9 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-cream/95 text-forest shadow-md transition-colors hover:bg-pale focus-visible:outline-2 focus-visible:outline-olive sm:right-4 sm:size-12"
                >
                  <ArrowIcon direction="right" />
                </button>
              </div>

              <div className="flex shrink-0 items-center justify-center gap-3 border-t border-olive/25 bg-cream px-3 py-3 text-center sm:justify-between sm:px-5">
                <span className="hidden text-xs text-forest/65 sm:inline">← → для перелистывания · Esc для закрытия</span>
                <a
                  href={active.originalUrl ?? active.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-forest underline decoration-olive/60 underline-offset-4 hover:text-olive"
                >
                  Открыть оригинал ↗
                </a>
                <span className="text-xs tabular-nums text-forest/65 sm:hidden">{activeIndex + 1} / {certificates.length}</span>
              </div>
            </div>
          )}
        </dialog>,
        document.body,
      )}
    </>
  );
}
