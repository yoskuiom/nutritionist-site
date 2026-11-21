/**
 * Контент страницы. До подключения Sanity меняйте тексты, цены и ссылки здесь.
 * Компоненты получают данные из этих массивов и не хранят тексты внутри разметки.
 */

export type Symptom = { label: string };
export type Principle = { title: string; icon: string };
export type Step = { title: string; description: string };
export type FocusArea = { title: string; description: string; icon: string };
export type Tariff = {
  id: string;
  name: string;
  duration?: string;
  description: string;
  features: string[];
  priceRub: number;
  featured?: boolean;
  cta: string;
};

export const site = {
  brand: 'Евгения Роханская',
  profession: 'Нутрициолог',
  consultationDuration: '60 минут',
  bookingUrl: 'https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F79243684628%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAafhJQhDxWBFkIXyP_LwcQE40LNegeO_0PnQAZM9BrFP-Focx6mcrk3sRBZkgA_aem_yPR-b2y-EssTO2K1NIJVsA&e=AUAJNv-aVHZAJMIwQ0v7FFLe481mKmnaUCCVomCQjXZoiyUks0h93vs8Q-uQKv_p8cMZxaNwSXe3cRbhNNb6nZgceXoQ1CSxS5lr56MzuFWXij_xXmxWKynkjXnrWe3uiz12HAU',
  email: '',
  socialUrl: 'https://www.instagram.com/rohanskaya.ev/',
} as const;

/** Заголовки и основные тексты тоже вынесены сюда: позже их сможет менять клиентка через CMS. */
export const copy = {

  about: {
    headingOne: 'Меня зовут Роханская Евгения,',
    headingTwo: 'я —',
    headingAccent: 'дипломированный нутрициолог-консультант',
    headingThree: 'по питанию и образу жизни',
    lead: 'Системная работа над здоровьем с персональной стратегией и поддержкой во внедрении рекомендаций.',
    quote: 'Помогаю разобраться в вашей ситуации, определить приоритеты и выстроить понятный план действий. Не готовые универсальные схемы, а работа с вашей ситуацией задачи.',
    qualificationTitle: 'Образование и квалификация',
    qualificationSummary: 'Сертификаты, дополнительное обучение и профессиональная подготовка.',
    qualificationDetails: 'Перечень конкретных программ и дипломов необходимо добавить после проверки документов специалиста.',
  },

  hero: {
    eyebrow: 'Нутрициолог · онлайн',
    lineOne: 'С какими',
    lineTwo: 'Запросами',
    lineThree: 'я работаю:',
  },

  work: {
    eyebrow: 'Пошаговый план',
    heading: 'Как проходит',
    headingAccent: 'работа',
    lead: 'От знакомства и разбора запроса до персональных рекомендаций и сопровождения.',
    areasEyebrow: 'Направления',
    areasHeadingAccent: 'С чем',
    areasHeading: 'я работаю',
    ctaLead: 'Готовы начать разбираться в своем здоровье и привычках?',
  },
  pricing: {
    eyebrow: 'Услуги и стоимость',
    heading: 'Выберите',
    headingAccent: 'свой формат',
    lead: 'Разовая встреча или сопровождение — в зависимости от ваших целей и потребностей.',
  },
  booking: {
    eyebrow: 'Первый шаг',
    heading: 'Начнём с',
    headingAccent: 'консультации?',
    lead: 'Обсудим ваш запрос, привычки и цели, а затем определим подходящие следующие шаги.',
  },
} as const;

export const symptoms: Symptom[] = [
  { label: 'Нарушения пищеварения' },
  { label: 'Тяга к сладкому' },
  { label: 'Выпадение волос' },
  { label: 'Акне' },
  { label: 'Лишний вес' },
  { label: 'ПМС' },
  { label: 'Пигментные пятна' },
  { label: 'Отсутствие энергии и сил' },
];

export const principles: Principle[] = [
  { title: 'Индивидуальный подход', icon: '/icons/leaf.svg' },
  { title: 'поддержка', icon: '/icons/support.svg' },
  { title: 'системность', icon: '/icons/system.svg' },
  { title: 'выбор формата', icon: '/icons/format.svg' },
];

export const steps: Step[] = [
  {
    title: 'Знакомство',
    description: 'Вы рассказываете о своём самочувствии, жалобах, образе жизни и основной цели обращения.',
  },
  {
    title: 'Сбор информации',
    description: 'Собираем информацию о питании, привычках, режиме и имеющихся результатах обследований.',
  },
  {
    title: 'Анализ',
    description: 'Я систематизирую полученную информацию и определяю основные направления работы.',
  },
  {
    title: 'План',
    description: 'Вы получаете персональные рекомендации по питанию и образу жизни, а при необходимости — по дополнительной поддержке.',
  },
  {
    title: 'Сопровождение',
    description: 'В течение программы мы отслеживаем изменения и корректируем рекомендации с учётом динамики.',
  },
];

export const focusAreas: FocusArea[] = [
  {
    title: 'Пищеварение',
    description: 'Индивидуальная работа с питанием и образом жизни при жалобах на дискомфорт со стороны ЖКТ.',
    icon: '/icons/stomach.svg',
  },
  {
    title: 'Питание',
    description: 'Помогаю выстроить рацион, который соответствует вашему состоянию, образу жизни и задачам.',
    icon: '/icons/utensils.svg',
  },
  {
    title: 'Анализы',
    description: 'Помогаю систематизировать имеющиеся результаты обследований в рамках компетенции нутрициолога.',
    icon: '/icons/clipboard.svg',
  },
  {
    title: 'Образ жизни',
    description: 'Работаем с режимом сна, физической активностью и привычками, влияющими на самочувствие.',
    icon: '/icons/heart.svg',
  },
  {
    title: 'Нутрицевтическая поддержка',
    description: 'При необходимости обсуждаем дополнительную поддержку питания с учётом рекомендаций врача.',
    icon: '/icons/sprout.svg',
  },
];

export const tariffs: Tariff[] = [
  {
    id: 'consultation',
    name: 'Разовая консультация',
    duration: '60 минут',
    description: 'Если вы хотите начать с одной встречи и получить профессиональный взгляд на вашу ситуацию.',
    features: [
      'Разбираем ваш запрос',
      'Обсуждаем питание и образ жизни',
      'Определяем основные направления работы',
      'Формируем дальнейшие рекомендации',
    ],
    priceRub: 5000,
    cta: 'Записаться на консультацию',
  },
  {
    id: 'one-month',
    name: 'Комплексное сопровождение',
    duration: '1 месяц',
    description: 'Для тех, кто хочет пройти путь изменений системно и с поддержкой.',
    features: [
      'Учёт имеющихся обследований и назначений врача',
      'Оценка питания и образа жизни',
      'Индивидуальные рекомендации по рациону',
      'Обсуждение дополнительной поддержки при необходимости',
      'Корректировка рекомендаций в течение месяца',
    ],
    priceRub: 15000,
    featured: true,
    cta: 'Выбрать сопровождение',
  },
  {
    id: 'three-months',
    name: 'Комплексное сопровождение',
    duration: '3 месяца',
    description: 'Для тех, кому важно закрепить изменения и последовательно работать над привычками.',
    features: [
      'Учёт имеющихся обследований и назначений врача',
      'Оценка питания и образа жизни',
      'Индивидуальные рекомендации по рациону',
      'Обсуждение дополнительной поддержки при необходимости',
      'Корректировка рекомендаций в течение трёх месяцев',
    ],
    priceRub: 25000,
    cta: 'Выбрать сопровождение',
  },
];

export function formatRubles(value: number): string {
  return `${new Intl.NumberFormat('ru-RU').format(value)} ₽`;
}
