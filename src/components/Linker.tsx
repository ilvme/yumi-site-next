import Link from 'next/link';

export default async function Linker({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="underline decoration-rose-400 decoration-wavy decoration-2 hover:text-rose-400"
    >
      {text}
    </Link>
  );
}
