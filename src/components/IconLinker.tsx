import Link from 'next/link';
import { ReactNode } from 'react';

export default async function IconLinker({
  icon,
  href,
  target = '_blank',
}: {
  href: string;
  icon: ReactNode;
  target?: string;
}) {
  return (
    <Link href={href} className="flex items-center gap-1.5" target={target}>
      {icon}
    </Link>
  );
}
