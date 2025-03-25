import IconLinker from '@/components/IconLinker';
import InlineCode from '@/components/InlineCode';
import Linker from '@/components/Linker';
import HomeWidgets from '@/components/website/HomeWidget';
import Image from 'next/image';
import { IoHome, IoMail } from 'react-icons/io5';
import { SiGithub, SiZhihu } from 'react-icons/si';
import AvatarBack from '../../public/images/avatar.png';
import { SITE_CONFIG } from '../../yumi.config';

export default function Home() {
  return (
    <main className="py-28">
      <HomeWidgets />

      <article className="text-gray-700 lg:flex lg:items-center lg:gap-8 lg:px-2 dark:text-gray-300">
        <div className="mx-auto mb-10 w-[240px]">
          <div className="flex flex-col items-center justify-center">
            <Image
              className="size-[160px] rounded-full"
              src={AvatarBack}
              alt="avatar"
            />

            <h1 className="mt-5 text-2xl font-bold">
              <span className="">{SITE_CONFIG.title}</span>
            </h1>

            <div className="mt-2 text-sm">
              <span className="mr-2 text-gray-400">Web Developer.</span>
              <span className="mr-2 text-gray-400">Blogger.</span>
              <span className="mr-2 text-gray-400">ENFJ.</span>
            </div>

            <div className="mt-3 flex items-center gap-4">
              <IconLinker
                href="/essays"
                target="_self"
                icon={<IoHome size={22} />}
              />
              <IconLinker
                href={SITE_CONFIG.social.github}
                icon={<SiGithub size={22} />}
              />

              <IconLinker href="/" icon={<SiZhihu size={22} />} />
              <IconLinker
                href={`mailto:${SITE_CONFIG.email}`}
                icon={<IoMail size={22} />}
              />
            </div>
          </div>
        </div>

        {/*右侧*/}
        <div className="flex-1 px-3">
          <h1 className="text-2xl font-bold">Me</h1>
          <p className="py-3">
            96
            年程序员，现居天津。纯音乐爱好者，书籍爱好者（PS：喜欢买不一定看）。半个断舍离主义者，认为整理东西是最解压的方式之一。
          </p>

          <p>
            喜欢在周末逛个超市，做点美食。偶尔小酌一杯。饿的时候只想吃咸香的，不习惯穿拖鞋，不喜欢吃饼干。
            偶尔打打游戏，一直在辅助的位置尝试着所有自认为有趣（快乐）的英雄，信奉快乐游戏的前提是：进入游戏的第一件事，键入{' '}
            <InlineCode code="/mute all" />
            ，再按下 <InlineCode code="Enter" />。
          </p>

          <p className="mt-4">
            我在这里分享了一些
            <Linker text="日常随笔" href="/essays" />、
            <Linker text="技术笔记" href="/notes" />
            ，以及偶尔也会发发的
            <Linker text="牢骚" href="/words" />。
          </p>

          <p className="mt-2">
            最近 AI 的风终究是吹到了这里，借助 Trae 整了个
            <Linker text="新闻热点" href="https://hot.ikangjia.cn" />
            聚合网页，我一个 Next.js
            小白从搭建项目到部署几乎未写一行逻辑性代码...
          </p>

          <h2 className="mt-6 mb-1">一句话与君共勉：</h2>
          <blockquote className="">
            越来越明白，长大后的生活，没有喜出望外的惊喜，也没有自然而然的稳定前进，有的只不过是需要带上披荆斩棘般的勇气去开拓！
          </blockquote>
        </div>
      </article>
    </main>
  );
}
