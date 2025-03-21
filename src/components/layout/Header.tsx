import navItems from '@/app/_data/nav';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-[var(--background)] dark:border-gray-900">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-3xl font-bold text-gray-500">林深时觉寒</span>
        </Link>
        <nav className="space-x-6 text-base font-medium md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="">
              <span className="text-gray-600 hover:text-blue-600/80 dark:text-[#c7cbd2] dark:hover:text-blue-400">
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
