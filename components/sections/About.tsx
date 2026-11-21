import Image from 'next/image';
import { principles, copy } from '@/data/site';
import EducationCertificates from '@/components/sections/EducationCertificates';

export default function About() {
  return (
    <section id="top" aria-labelledby="about-title" className="section-shell relative isolate overflow-hidden bg-cream">
      <div className="site-container relative z-10 grid items-start
      gap-y-6 pt-7 pb-12
      md:pt-14 md:pb-12
      lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">

        <div className="text-center lg:col-span-2">
          <h1
            id="about-title"
            className="mx-auto max-w-[1000px]
        text-[clamp(2rem,3.5vw,3.5rem)]
        leading-[1.1] font-extrabold
        tracking-[-0.035em] uppercase text-forest"
          >
            Меня зовут{" "}
            <span className="text-olive">Роханская Евгения</span>

          </h1>
        </div>

        <div className="min-w-0 lg:pr-10">

          <div className="max-w-[760px]">

            {/* Подзаголовок с профессией */}
            <p
              className="mt-3 max-w-[690px] text-[clamp(1.35rem,2.2vw,2.15rem)] leading-[1.25] font-bold tracking-[-0.025em] text-forest"
            >
              Я — дипломированный {' '}

              <span className="text-olive">нутрициолог-консультант</span>

              {' '} по питанию и образу жизни.
            </p>

          </div>
          <p className="mt-6 max-w-[690px] text-lg leading-relaxed text-forest/90">
            {copy.about.lead}
          </p>
          <blockquote className="mt-7 max-w-[690px] border-t-[1px] border-olive text-base leading-[1.85] text-ink/85 sm:text-lg">
            {copy.about.quoteOne}
          </blockquote>
          <blockquote className="mt-7 max-w-[690px] text-base leading-[1.85] text-ink/85 sm:text-lg">
            {copy.about.quoteTwo}
          </blockquote>


          <div className="mt-8 grid gap-3 sm:grid-cols-2">
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
                <EducationCertificates />
              </div>
            </div>
          </div>
        </div>

        <div className="relative isolate mx-auto min-h-[410px] w-full max-w-[520px] lg:self-start lg:mx-auto sm:min-h-[540px] lg:min-h-[650px]">

          <div className="about-photo-column relative isolate mx-auto w-full max-w-[520px] lg:mx-0 lg:max-w-none lg:self-start lg:justify-self-center">

            {/* Контейнер фотографии и blobs */}
            <div className="relative w-full">

              {/* Декоративные blobs */}
              <div className="portrait-blobs" aria-hidden="true">
                <div className="portrait-blob portrait-blob--one" />
                <div className="portrait-blob portrait-blob--two" />
              </div>

              {/* Фотография Евгении */}
              <Image
                src="/images/roh-ev-portret.png"
                alt="Портрет Евгении Роханской"
                width={1152}
                height={1366}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 38vw"
                className="relative z-10 block h-auto w-full object-contain object-bottom"
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
