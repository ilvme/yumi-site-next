import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-300">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold">Yumi</span>
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          <Link href="/" className="group relative">
            <span className="hover:text-blue-600/80">主页</span>
          </Link>
          <Link href="/essays" className="group relative">
            <span className="hover:text-blue-600/80">随笔</span>
          </Link>
          <Link href="/words" className="group relative">
            <span className="hover:text-blue-600/80">说说</span>
          </Link>
          <Link href="/notes" className="group relative">
            <span className="hover:text-blue-600">技术笔记</span>
          </Link>
          <Link href="/about" className="group relative">
            <span className="hover:text-blue-600/80">关于</span>
          </Link>
          <Link href="/friends" className="group relative">
            <span className="hover:text-blue-600/80">友链</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
