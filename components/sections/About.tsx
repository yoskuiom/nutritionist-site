import Image from 'next/image';
import Decorations from '@/components/ui/Decorations';
import { principles, copy } from '@/data/site';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-shell relative isolate overflow-hidden bg-cream">
      <Decorations variant="about" />
      <div className="site-container relative z-10 grid gap-8 py-16 md:py-24 lg:min-h-[810px] lg:grid-cols-[60%_40%] lg:gap-1 lg:py-24">
        <div className="min-w-0 lg:pr-10">
          <h2 id="about-title" className="mt-5 text-[clamp(2.1rem,3.2vw,3.65rem)] leading-[1.12] font-extrabold tracking-[-0.03em] uppercase text-forest">
            {copy.about.headingOne}
            <span className="block">{copy.about.headingTwo} <span className="text-olive">{copy.about.headingAccent}</span></span>
          </h2>
          <p className="mt-6 max-w-[690px] text-lg leading-relaxed text-forest/90">
            {copy.about.lead}
          </p>
          <blockquote className="mt-7 max-w-[690px] border-l-[3px] border-olive pl-5 text-base leading-[1.85] text-ink/85 sm:text-lg">
            {copy.about.quote}
          </blockquote>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {principles.map((item) => (
              <div key={item.title} className="flex min-h-[92px] items-center gap-3 rounded-[26px] bg-pale/85 px-4 py-4">
                <Image src={item.icon} alt="" width={42} height={42} className="size-9 shrink-0 object-contain" />
                <p className="text-sm leading-snug font-medium text-forest">{item.title}</p>
              </div>
            ))}
          </div>

          <div id="education" className="mt-8 rounded-[30px] border border-olive/40 bg-cream/90 p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <Image src="/icons/graduation-cap.svg" alt="" width={54} height={54} className="size-12 shrink-0" />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-forest">{copy.about.qualificationTitle}</h3>
                <p className="mt-1 text-sm leading-relaxed text-forest/75">{copy.about.qualificationSummary}</p>
                <details className="education-details mt-3">
                  <summary className="cursor-pointer text-sm font-semibold text-forest underline decoration-olive/50 underline-offset-4 hover:text-olive">
                    Подробнее об образовании →
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-forest/75">
                    {copy.about.qualificationDetails}
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto min-h-[410px] w-full max-w-[520px] self-end sm:min-h-[540px] lg:min-h-[650px]">
          <div aria-hidden="true" className="absolute inset-x-5 bottom-0 top-8 rounded-t-[48%] bg-pale/95" />
          <div aria-hidden="true" className="absolute inset-x-[-12px] bottom-0 top-[24%] rounded-t-[45%] bg-sage/25" />
          <Image
            src="/images/roh-ev-portret.png"
            alt="Портрет Евгении Роханской"
            width={1152}
            height={1366}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 38vw"
            className="absolute bottom-[-16px] left-1/2 h-auto w-[min(110%,570px)] max-w-none -translate-x-1/2 object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
