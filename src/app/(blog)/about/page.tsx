import BlogHero from '@/components/BlogHero';
import Sponsor from '@/components/Sponsor';
import Link from 'next/link';
import { FaRegAddressCard } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { SiGithub, SiZhihu } from 'react-icons/si';

export default async function AboutPage() {
  return (
    <div className="py-3">
      <BlogHero
        title="关于"
        description="一个脱离不了低级趣味的人的寻常日子里的惨淡经营"
      />
      一些信息如见主页。
      <h2 className="mt-4 mb-3 text-2xl font-bold">find me</h2>
      <div className="flex items-center gap-8">
        <Link
          href="https://github.com/ilvme"
          className="flex items-center gap-1.5"
        >
          <SiGithub size={20} /> GitHub
        </Link>
        <Link
          href="https://www.zhihu.com/people/ikangjia"
          className="flex items-center gap-1.5"
        >
          <SiZhihu /> 知乎
        </Link>
        <Link
          href="/resume"
          className="flex items-center gap-1.5"
          target="_blank"
        >
          <FaRegAddressCard /> 简历
        </Link>
        <Link
          href="mailto:ikangjia.cn@outlook.com"
          className="flex items-center gap-1.5"
        >
          <IoMail /> 发邮件
        </Link>
      </div>
      <Sponsor />
    </div>
  );
}
