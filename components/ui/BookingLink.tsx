import type { ReactNode } from 'react';
import { site } from '@/data/site';

type Props = {
  children?: ReactNode;
  className?: string;
  variant?: 'primary' | 'soft' | 'outline';
};

export default function BookingLink({
  children = 'Записаться',
  className = '',
  variant = 'primary',
}: Props) {
  const href = site.bookingUrl || '#booking';
  const external = /^https?:\/\//.test(href);
  const styles = {
    primary: 'bg-forest text-white hover:bg-[#38512F]',
    soft: 'bg-sage text-forest hover:bg-[#B6D0A5]',
    outline: 'border border-forest text-forest hover:bg-pale',
  }[variant];

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest ${styles} ${className}`}
    >
      <span>{children}</span>
      <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </a>
  );
}
