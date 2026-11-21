import { bookingContent } from '@/data/booking';
import { formatRubles, tariffs } from '@/data/site';

/**
 * Дополнительная информация под существующей кнопкой записи в Booking.tsx.
 * Никаких новых кнопок или обработчиков здесь нет: прежний BookingLink остаётся на месте.
 */
export default function BookingInfo() {
  const { payment, steps, feedback, approach, contact } = bookingContent;

  return (
    <div className="mt-10 w-full space-y-5 text-left sm:mt-12 sm:space-y-6">
      {/* Условия оплаты */}
      <section aria-labelledby="booking-payment-title" className="rounded-[28px] border border-olive/25 bg-cream/90 p-5 sm:rounded-[32px] sm:p-7">
        <p className="text-xs font-bold tracking-[0.12em] uppercase text-olive">{payment.kicker}</p>
        <h3 id="booking-payment-title" className="mt-2 text-[clamp(1.4rem,3vw,2rem)] leading-tight font-extrabold tracking-[-0.025em] text-forest">
          {payment.heading}
        </h3>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {tariffs.map((tariff) => (
            <div key={tariff.id} className="flex min-w-0 flex-col justify-between gap-3 rounded-[20px] border border-olive/15 bg-pale/70 px-4 py-4 sm:min-h-[142px] sm:px-4">
              <p className="text-sm leading-snug font-semibold text-forest/90">
                {tariff.duration
                  ? `${tariff.name} · ${tariff.duration}`
                  : tariff.name}
              </p>
              <p className="whitespace-nowrap text-[clamp(1.45rem,3vw,1.9rem)] leading-none font-extrabold tracking-[-0.04em] text-forest tabular-nums">
                {formatRubles(tariff.priceRub)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-4 border-t border-olive/20 pt-5 md:grid-cols-2 md:gap-5">
          <div>
            <h4 className="text-sm font-bold text-forest">{payment.oneTimeLabel}</h4>
            <p className="mt-1 text-sm leading-relaxed text-forest/80 sm:text-base">{payment.oneTimePayment}</p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-forest">{payment.accompanimentLabel}</h4>
            <p className="mt-1 text-sm leading-relaxed text-forest/80 sm:text-base">{payment.accompanimentPayment}</p>
          </div>
        </div>
      </section>

      {/* Этапы начала работы */}
      <section aria-labelledby="booking-steps-title" className="rounded-[28px] border border-olive/25 bg-cream/90 p-5 sm:rounded-[32px] sm:p-7">
        <p className="text-xs font-bold tracking-[0.12em] uppercase text-olive">{steps.kicker}</p>
        <h3 id="booking-steps-title" className="mt-2 text-[clamp(1.4rem,3vw,2rem)] leading-tight font-extrabold tracking-[-0.025em] text-forest">
          {steps.heading}
        </h3>

        <ol className="mt-6 grid gap-3 md:grid-cols-3 md:gap-4">
          {steps.items.map((item, index) => (
            <li key={item.title} className="flex min-w-0 flex-col rounded-[20px] border border-olive/20 bg-pale/45 px-4 py-5">
              <span aria-hidden="true" className="inline-flex size-10 items-center justify-center rounded-full bg-sage/65 text-sm font-bold text-forest tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h4 className="mt-4 text-base leading-snug font-bold text-forest">{item.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-forest/80">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Сопровождение и человеческая поддержка */}
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        <div className="rounded-[24px] border border-olive/25 bg-pale/85 p-5 sm:p-6">
          <div aria-hidden="true" className="flex size-10 items-center justify-center rounded-full bg-cream text-olive">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-bold text-forest">{feedback.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-forest/80 sm:text-base">{feedback.schedule}</p>
          <p className="mt-1 text-xl font-extrabold text-forest tabular-nums">{feedback.hours}</p>
        </div>

        <div className="rounded-[24px] border border-olive/25 bg-pale/85 p-5 sm:p-6">
          <div aria-hidden="true" className="flex size-10 items-center justify-center rounded-full bg-cream text-olive">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.8 8.6c0 4.3-8.8 10.1-8.8 10.1S3.2 12.9 3.2 8.6a4.7 4.7 0 0 1 8.8-2.1 4.7 4.7 0 0 1 8.8 2.1Z" />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-bold text-forest">{approach.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-forest/80 sm:text-base">{approach.text}</p>
        </div>
      </div>

      <p className="mx-auto max-w-[670px] px-2 pt-1 text-center text-sm leading-relaxed text-forest/80 sm:text-base">
        {contact}
      </p>
    </div>
  );
}
