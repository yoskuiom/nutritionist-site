import Image from 'next/image';
import Decorations from '@/components/ui/Decorations';
import BookingLink from '@/components/ui/BookingLink';
import { focusAreas, steps, copy } from '@/data/site';

export default function Work() {
  return (
    <section id="format" aria-labelledby="work-title" className="section-shell relative isolate overflow-hidden bg-cream py-18 md:py-24">
      <Decorations variant="format" />
      <div className="site-container relative z-10">
        <div className="mb-10 text-center md:mb-12">
          <p className="section-kicker">{copy.work.eyebrow}</p>
          <h2 id="work-title" className="section-title mt-3">{copy.work.heading} <span>{copy.work.headingAccent}</span></h2>
          <p className="mx-auto mt-4 max-w-[650px] text-base leading-relaxed text-forest/75 sm:text-lg">
            {copy.work.lead}
          </p>
        </div>

        <ol className="mx-auto max-w-[1080px] space-y-4">
          {steps.map((step, idx) => (
            <li key={step.title} className="grid grid-cols-[42px_minmax(0,1fr)] items-stretch gap-3 sm:grid-cols-[60px_minmax(0,1fr)] sm:gap-5">
              <div className="relative flex justify-center pt-5">
                {idx < steps.length - 1 && <div aria-hidden="true" className="absolute top-[54px] bottom-[-38px] w-[1.5px] bg-olive/55" />}
                <span className="relative z-10 flex size-10 items-center justify-center rounded-full bg-pale text-lg font-bold text-forest sm:size-12 sm:text-xl">
                  {idx + 1}
                </span>
              </div>
              <div className="rounded-[28px] border border-olive/35 bg-cream/90 px-5 py-5 sm:px-8 sm:py-6">
                <h3 className="text-lg font-extrabold text-forest sm:text-xl">{step.title}</h3>
                <p className="mt-1 max-w-[930px] text-sm leading-relaxed text-forest/85 sm:text-base">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-18 md:mt-24" aria-labelledby="focus-title" id="focus">
          <div className="mb-10 text-center">
            <p className="section-kicker">{copy.work.areasEyebrow}</p>
            <h2 id="focus-title" className="section-title mt-3"><span>{copy.work.areasHeadingAccent}</span> {copy.work.areasHeading}</h2>
          </div>
          <div className="mx-auto grid max-w-[1080px] gap-4 md:grid-cols-2 md:gap-5">
            {focusAreas.map((area, idx) => (
              <article key={area.title} className={`flex flex-col gap-3 rounded-[28px] border border-olive/30 bg-cream/90 p-6 transition-colors hover:bg-pale/60 sm:p-7 ${idx === focusAreas.length - 1 ? 'md:col-span-2 md:flex-row md:items-center md:gap-6' : ''}`}>
                <Image src={area.icon} alt="" width={52} height={52} className="size-10 shrink-0 object-contain" />
                <div>
                  <h3 className="text-lg font-extrabold text-forest">{area.title}</h3>
                  <p className="mt-2 max-w-[790px] text-sm leading-relaxed text-forest/85 sm:text-base">{area.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="mb-5 text-lg font-semibold text-forest">{copy.work.ctaLead}</p>
            <BookingLink>Записаться на консультацию</BookingLink>
          </div>
        </div>
      </div>
    </section>
  );
}
