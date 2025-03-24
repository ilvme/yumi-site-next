import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-10 mb-6 text-base">
      以上内容版权所有 ©<Link href="/public">林深时觉寒</Link> 2012 -{' '}
      {new Date().getFullYear()}
      <div>
        Powered by{' '}
        <Link href="/public" className="underline">
          Next.js
        </Link>
        ,{' '}
        <Link href="/public" className="underline">
          Tailwindcss
        </Link>
        ,{' '}
        <Link href="/public" className="underline">
          Notion
        </Link>
        ,
        <Link href="/public" className="underline">
          Vercel
        </Link>
        . View Source on{' '}
        <Link href="/public" className="underline">
          GitHub
        </Link>
        .
      </div>
    </footer>
  );
}
