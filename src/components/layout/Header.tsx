import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Yumi</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/essays" className="transition-colors hover:text-foreground/80">随笔</Link>
            <Link href="/words" className="transition-colors hover:text-foreground/80">说说</Link>
            <Link href="/notes" className="transition-colors hover:text-foreground/80">笔记</Link>
            <Link href="/toolchains" className="transition-colors hover:text-foreground/80">工具链</Link>
            <Link href="/about" className="transition-colors hover:text-foreground/80">关于</Link>
            <Link href="/links" className="transition-colors hover:text-foreground/80">友链</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}