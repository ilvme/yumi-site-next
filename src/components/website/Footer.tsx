import Link from 'next/link';
import { SITE_CONFIG } from '../../../yumi.config';

export default function Footer() {
  return (
    <footer className="mt-10 mb-6 text-base">
      以上内容版权所有 ©<Link href="/">林深时觉寒</Link>{' '}
      {SITE_CONFIG.since || new Date().getFullYear()} -{' '}
      {new Date().getFullYear()}
      <div>
        Powered by{' '}
        <Link href="https://nextjs.org/" className="underline">
          Next.js
        </Link>
        ,{' '}
        <Link href="https://tailwindcss.com/" className="underline">
          Tailwindcss
        </Link>
        ,{' '}
        <Link href="https://www.notion.com/zh-cn" className="underline">
          Notion
        </Link>
        ,
        <Link href="https://vercel.com" className="underline">
          Vercel
        </Link>
        . View Source on{' '}
        <Link
          href="https://github.com/ilvme/yumi-site-next"
          className="underline"
        >
          GitHub
        </Link>
        .
      </div>
    </footer>
  );
}
