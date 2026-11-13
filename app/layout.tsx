import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Евгения Роханская — нутрициолог | Индивидуальные консультации',
  description: 'Индивидуальные консультации по питанию и образу жизни. Разовая консультация и программы сопровождения.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}
