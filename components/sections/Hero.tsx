import Image from 'next/image';
import Decorations from '@/components/ui/Decorations';
import BookingLink from '@/components/ui/BookingLink';
import { site, symptoms, copy } from '@/data/site';

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="hero-section relative isolate overflow-hidden bg-cream">
      <Decorations variant="hero" />
      <div className="site-container relative z-10 grid min-h-[740px] items-center gap-6 lg:grid-cols-[43%_57%] lg:gap-0 xl:min-h-[820px]">
        <div className="relative hidden self-stretch lg:block">
          <Image
            src="/images/roh-ev-home-page.png"
            alt="Евгения Роханская — нутрициолог"
            width={521}
            height={855}
            priority
            sizes="(max-width: 1024px) 0px, 36vw"
            className="hero-photo absolute bottom-0 left-0 h-auto w-[min(36vw,460px)] max-w-none"
          />
        </div>

        <div className="min-w-0 pt-14 pb-12 sm:pt-20 lg:py-20">
          <span className="eyebrow inline-flex items-center rounded-full bg-pale px-5 py-2 text-xs font-medium tracking-[0.09em] text-forest sm:text-sm">
            {copy.hero.eyebrow}
          </span>
          <h1 id="hero-title" className="mt-5 max-w-[760px] text-[clamp(2.55rem,4.3vw,4.65rem)] leading-[1.08] font-extrabold tracking-[-0.035em] uppercase text-forest">
            <span className="block text-olive">{copy.hero.lineOne}</span>
            {copy.hero.lineTwo}
            <span className="block">{copy.hero.lineThree}</span>
          </h1>

          <div className="relative mx-auto mt-7 h-[270px] max-w-[350px] lg:hidden sm:h-[340px]">
            <div aria-hidden="true" className="absolute inset-x-7 bottom-0 h-[90%] rounded-t-[46%] bg-pale" />
            <Image
              src="/images/roh-ev-home-page.png"
              alt="Евгения Роханская"
              width={521}
              height={855}
              sizes="(max-width: 640px) 280px, 340px"
              priority
              className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
            />
          </div>

          <ul className="mt-7 grid grid-cols-1 gap-x-5 gap-y-4 rounded-[32px] border border-olive/35 bg-cream/75 px-5 py-6 sm:grid-cols-2 sm:px-7">
            {symptoms.map((symptom) => (
              <li key={symptom.label} className="flex items-center gap-3 text-[15px] leading-snug text-ink sm:text-base">
                <Image src="/icons/leaf.svg" alt="" width={24} height={24} className="size-5 shrink-0" />
                <span>{symptom.label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
            <BookingLink className="w-full sm:w-auto">Записаться на консультацию</BookingLink>
            <p className="text-sm font-medium text-forest sm:text-base">Онлайн · {site.consultationDuration}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
