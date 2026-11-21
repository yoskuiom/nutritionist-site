import BookingLink from '@/components/ui/BookingLink';
import { site, copy } from '@/data/site';
import BookingInfo from '@/components/sections/BookingInfo';

export default function Booking() {
  return (
    <section id="booking" aria-labelledby="booking-title" className="scroll-mt-[100px] bg-[#E5EDDC] pt-15 pb-18 md:pt-14 md:pb-14 lg:pt-20 lg:pb-16">
      <div className="site-container mx-auto flex max-w-[850px] flex-col items-center text-center">
        <p className="section-kicker">{copy.booking.eyebrow}</p>
        <h2 id="booking-title" className="section-title mt-4">{copy.booking.heading} <span>{copy.booking.headingAccent}</span></h2>
        <p className="mt-5 max-w-[600px] text-base leading-relaxed text-forest/80 sm:text-lg">
          {copy.booking.lead}
        </p>

        {/* Последняя кнопка — переход в WhatsApp */}
        {site.bookingUrl && (
          <div className="mt-10 flex w-full flex-col items-center gap-3">
            <BookingLink
              href={site.bookingUrl}
              className="w-full sm:w-auto sm:min-w-[280px]"
            >
              Запись по WhatsApp
            </BookingLink>
          </div>
        )}
        <BookingInfo />
      </div>
    </section>
  );
}
