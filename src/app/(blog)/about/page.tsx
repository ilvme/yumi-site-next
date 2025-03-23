import BlogHero from '@/components/BlogHero';
import Sponsor from '@/components/Sponsor';
import Link from 'next/link';

export default async function AboutPage() {
  return (
    <div className="py-3">
      <BlogHero
        title="关于"
        description="一个脱离不了低级趣味的人的寻常日子里的惨淡经营"
      />
      如见首页。
      <h2 className="mt-4 mb-3 text-2xl font-bold">find me</h2>
      <div className="flex items-center gap-8">
        <Link href="https://github.com/ilvme">GitHub</Link>
        <Link href="/">知乎</Link>
        <Link href="/">简历</Link>
        <Link href="mailto:ikangjia.cn@outlook.com">发邮件</Link>
      </div>
      <Sponsor />
    </div>
  );
}
