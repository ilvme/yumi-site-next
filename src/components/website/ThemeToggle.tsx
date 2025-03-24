'use client';

import { useTheme } from 'next-themes';
import { LuLaptop, LuMoon, LuSun } from 'react-icons/lu';

import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="">
      {theme === 'light' && (
        <Button variant="ghost" size="icon" onClick={() => setTheme('dark')}>
          <LuSun className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      )}

      {theme === 'dark' && (
        <Button variant="ghost" size="icon" onClick={() => setTheme('system')}>
          <LuMoon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      )}

      {theme === 'system' && (
        <Button variant="ghost" size="icon" onClick={() => setTheme('light')}>
          <LuLaptop className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      )}
    </div>
  );
}
