import Decorations from '@/components/ui/Decorations';
import BookingLink from '@/components/ui/BookingLink';
import { tariffs, formatRubles, copy } from '@/data/site';

export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="section-shell relative isolate overflow-hidden bg-cream py-18 md:py-24">
      <Decorations variant="pricing" />
      <div className="site-container relative z-10">
        <div className="mb-10 text-center">
          <p className="section-kicker">{copy.pricing.eyebrow}</p>
          <h2 id="pricing-title" className="section-title mt-3">{copy.pricing.heading} <span>{copy.pricing.headingAccent}</span></h2>
          <p className="mx-auto mt-4 max-w-[640px] text-base leading-relaxed text-forest/75 sm:text-lg">
            {copy.pricing.lead}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {tariffs.map((tariff) => (
            <article key={tariff.id} className={`flex flex-col rounded-[34px] border p-6 sm:p-8 ${tariff.featured ? 'border-olive/60 bg-pale/75 shadow-[0_14px_38px_rgba(33,57,33,0.07)]' : 'border-olive/35 bg-cream/90'}`}>
              {tariff.featured && <p className="mb-4 w-fit rounded-full bg-sage px-3 py-1 text-xs font-bold text-forest">Популярный формат</p>}
              <h3 className="min-h-[58px] text-2xl leading-tight font-extrabold text-olive">{tariff.name}</h3>
              {tariff.duration && <p className="mt-2 text-lg font-bold text-forest">{tariff.duration}</p>}
              <p className="mt-5 text-sm leading-relaxed text-forest/80 sm:text-base">{tariff.description}</p>
              <div className="mt-7 border-t border-olive/20 pt-6">
                <h4 className="mb-4 text-base font-bold text-forest">Что входит</h4>
                <ul className="space-y-3">
                  {tariff.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-forest/85 sm:text-[15px]">
                      <span aria-hidden="true" className="mt-[7px] size-[7px] shrink-0 rounded-full bg-olive" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-8">
                <p className="mb-5 text-center text-[30px] font-extrabold text-forest">{formatRubles(tariff.priceRub)}</p>
                <BookingLink variant={tariff.featured ? 'primary' : 'soft'} className="w-full">{tariff.cta}</BookingLink>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-sm leading-relaxed text-forest/65">Подробные условия, объём сопровождения и порядок оплаты уточняются до записи.</p>
      </div>
    </section>
  );
}
