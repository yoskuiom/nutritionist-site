
import Image from 'next/image';
import BookingLink from '@/components/ui/BookingLink';
import { site, symptoms } from '@/data/site';

export default function Hero() {
  return (
    <section
      id="zaprosi"
      aria-labelledby="requests-title"
      className="section-shell relative isolate overflow-hidden bg-cream"
    >
      <div className="site-container relative z-10 pt-0 pb-12 md:pt-5 md:pb-16">

        {/* Заголовок раздела */}
        <div
          id="consultation"
          className="mx-auto max-w-[900px] scroll-mt-[90px] text-center"
        >
          <p className="section-kicker">
            Запросы
          </p>

          <h2
            id="requests-title"
            className="section-title mt-3"
          >
            С какими <span>запросами</span> я работаю
          </h2>

          <p className="mx-auto mt-4 max-w-[650px] text-base leading-relaxed text-forest/75 sm:text-lg">
            Я помогу вам бережно и мягко без стресса для вас изменить ваш образ жизни поменять рацион без ограничений, диет и отказов. Чтобы это стало вашим образом жизни а не временным изменением.
          </p>
        </div>

        {/* Список запросов */}
        <ul className="mx-auto mt-9 grid max-w-[1100px] grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-11 lg:grid-cols-4 lg:gap-4">
          {symptoms.map((symptom) => (
            <li
              key={symptom.label}
              className="flex min-h-[76px] items-center gap-3 rounded-[24px] border border-olive/25 bg-pale/65 px-5 py-4 text-[15px] leading-snug text-ink sm:text-base"
            >
              <Image
                src="/icons/leaf.svg"
                alt=""
                width={24}
                height={24}
                className="size-6 shrink-0 object-contain"
              />

              <span>{symptom.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
