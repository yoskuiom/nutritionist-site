type Props = { variant?: 'hero' | 'about' | 'format' | 'pricing' };

export default function Decorations({ variant = 'hero' }: Props) {
  return (
    <div aria-hidden="true" className={`decorations decorations--${variant}`}>
      <span className="decor-blob decor-blob--a" />
      <span className="decor-blob decor-blob--b" />
    </div>
  );
}
