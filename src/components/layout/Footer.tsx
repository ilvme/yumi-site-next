import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-10 mb-6">
      以上内容版权所有 ©<Link href="/">林深时觉寒</Link> 2012 -{' '}
      {new Date().getFullYear()}
      <div>
        Powered by{' '}
        <Link href="/" className="underline">
          Next.js
        </Link>
        ,{' '}
        <Link href="/" className="underline">
          Tailwindcss
        </Link>
        ,{' '}
        <Link href="/" className="underline">
          Notion
        </Link>
        ,
        <Link href="/" className="underline">
          Vercel
        </Link>
        . View Source on{' '}
        <Link href="/" className="underline">
          GitHub
        </Link>
        .
      </div>
    </footer>
  );
}
