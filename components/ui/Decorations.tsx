type Props = { variant?: 'hero' | 'about' | 'format' | 'pricing' };

/** Фигуры исключительно декоративные. Не влияют на разметку и не доступны скринридерам. */
export default function Decorations({ variant = 'hero' }: Props) {
  return (
    <div aria-hidden="true" className={`decorations decorations--${variant}`}>
      <span className="decor-blob decor-blob--a" />
      <span className="decor-blob decor-blob--b" />
    </div>
  );
}
