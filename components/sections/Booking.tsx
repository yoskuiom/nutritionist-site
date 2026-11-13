import BookingLink from '@/components/ui/BookingLink';
import { site, copy } from '@/data/site';

export default function Booking() {
  return (
    <section id="booking" aria-labelledby="booking-title" className="scroll-mt-[100px] bg-[#EAF0E3] py-18 md:py-24">
      <div className="site-container mx-auto flex max-w-[850px] flex-col items-center text-center">
        <p className="section-kicker">{copy.booking.eyebrow}</p>
        <h2 id="booking-title" className="section-title mt-4">{copy.booking.heading} <span>{copy.booking.headingAccent}</span></h2>
        <p className="mt-5 max-w-[600px] text-base leading-relaxed text-forest/80 sm:text-lg">
          {copy.booking.lead}
        </p>
        {site.bookingUrl ? (
          <BookingLink className="mt-8">Выбрать дату и время</BookingLink>
        ) : site.email ? (
          <a className="mt-8 inline-flex min-h-12 items-center rounded-full bg-forest px-6 py-3 font-semibold text-white hover:bg-olive" href={`mailto:${site.email}?subject=${encodeURIComponent('Запись на консультацию')}`}>
            Написать для записи →
          </a>
        ) : (
          <p className="mt-8 max-w-[550px] rounded-2xl border border-olive/30 bg-cream px-6 py-4 text-sm leading-relaxed text-forest">
            Для запуска онлайн-записи нужно указать ссылку на сервис бронирования или контактный email в <code className="font-bold">data/site.ts</code>. Пока это демонстрационная версия сайта.
          </p>
        )}
        <p className="mt-4 text-sm text-forest/65">Онлайн · {site.consultationDuration}</p>
      </div>
    </section>
  );
}
