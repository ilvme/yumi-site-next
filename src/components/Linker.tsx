import Link from 'next/link';

export default function Linker({
  text,
  href,
  target = '_self',
}: {
  text: string;
  href: string;
  target?: string;
}) {
  return (
    <Link
      href={href}
      target={target}
      className="underline decoration-rose-400 decoration-wavy decoration-2 hover:text-rose-400"
    >
      {text}
    </Link>
  );
}
