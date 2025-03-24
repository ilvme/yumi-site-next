'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LocaleToggle() {
  const pathname = usePathname();

  const Switcher = ({ label, href }: { label?: string; href: string }) => {
    return (
      <Link href={href} className="m-0 p-0">
        <Button variant="ghost">{label}</Button>
      </Link>
    );
  };

  return (
    <div>
      {pathname === '/' ? (
        <Switcher href="/en" label="EN" />
      ) : (
        <Switcher href="/" label="中文" />
      )}
    </div>
  );
}
