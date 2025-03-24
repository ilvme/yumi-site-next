'use client';

import LocaleToggle from '@/components/website/LocaleToggle';
import { ThemeToggle } from '@/components/website/ThemeToggle';

export default function HomeWidgets() {
  return (
    <>
      <div className="absolute top-4 right-2 flex items-center gap-2.5">
        <LocaleToggle />

        <ThemeToggle />
      </div>
    </>
  );
}
