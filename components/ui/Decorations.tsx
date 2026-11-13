type Props = { variant?: 'hero' | 'about' | 'format' | 'pricing' };

/** Фигуры исключительно декоративные. Не влияют на разметку и не доступны скринридерам. */
export default function Decorations({ variant = 'hero' }: Props) {
  return (
    <div aria-hidden="true" className={`decorations decorations--${variant}`}>
      <span className="decor-blob decor-blob--a" />
      <span className="decor-blob decor-blob--b" />
      <svg className="decor-curve" viewBox="0 0 340 610" fill="none" preserveAspectRatio="none">
        <path d="M30 0C240 125-90 190 135 360S300 530 170 610" stroke="#97B28B" strokeWidth="1.3" />
      </svg>
    </div>
  );
}
