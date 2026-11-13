import Image from 'next/image';
import { site } from '@/data/site';

export default function Footer() {
  return (
    <footer className="bg-cream py-10">
      <div className="site-container flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <a href="#top" className="inline-flex items-center gap-3 text-sm font-semibold text-forest">
          <Image src="/icons/logo-aloe.svg" alt="" width={28} height={28} />
          {site.brand}
        </a>
        <p className="max-w-[650px] text-xs leading-relaxed text-forest/65">
          Материалы сайта носят информационный характер. Консультация нутрициолога не заменяет диагностику и лечение у врача.
        </p>
        <span className="text-xs text-forest/65">
          © 2026
        </span>
      </div>
    </footer>
  );
}
