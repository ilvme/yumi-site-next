import navItems from '@/app/_data/nav';
import { ThemeToggle } from '@/components/website/ThemeToggle';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-[var(--background)] dark:border-gray-900">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-3xl font-bold">林深时觉寒</span>
        </Link>
        <nav className="flex items-center space-x-6 text-base font-medium">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="">
              <span className="text-lg font-bold text-gray-600 hover:text-rose-500 dark:text-[#c7cbd2]">
                {item.name}
              </span>
            </Link>
          ))}

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
