import IconLinker from '@/components/IconLinker';
import InlineCode from '@/components/InlineCode';
import Linker from '@/components/Linker';
import HomeWidget from '@/components/website/HomeWidget';
import Image from 'next/image';
import { IoHome, IoMail } from 'react-icons/io5';
import { SiGithub, SiZhihu } from 'react-icons/si';

import AvatarBack from '../../../public/images/avatar.png';
import { SITE_CONFIG } from '../../../yumi.config';

export default function Home() {
  return (
    <main className="py-28">
      <HomeWidget />

      <article className="text-gray-700 lg:flex lg:items-center lg:gap-8 lg:px-2 dark:text-gray-300">
        <div className="mx-auto mb-10 w-[240px]">
          <div className="flex flex-col items-center justify-center">
            <Image
              className="size-[160px] rounded-full dark:opacity-80"
              src={AvatarBack}
              alt="avatar"
            />
            <h1 className="mt-5 text-2xl font-bold">
              <span className="">Ilvme</span>
            </h1>

            <div className="mt-2 text-sm">
              <span className="mr-2 text-gray-400">Web Developer.</span>
              <span className="mr-2 text-gray-400">Blogger.</span>
              <span className="mr-2 text-gray-400">ENFJ.</span>
            </div>

            <div className="mt-2 flex items-center gap-4">
              <IconLinker
                href="/essays"
                target="_self"
                icon={<IoHome size={22} />}
              />
              <IconLinker
                href={SITE_CONFIG.social.github}
                icon={<SiGithub size={22} />}
              />

              <IconLinker
                href={SITE_CONFIG.social.zhihu}
                icon={<SiZhihu size={22} />}
              />
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
            I’m a software engineer living in Tianjin. Pure music lover, books
            lover. I am a half-Danshari, and I think arranging things is one of
            the most stressful ways.
          </p>

          <p>
            I like to go to the supermarket on weekends and make some delicious
            food. Occasionally a small drink. Only want savory when I'm hungry,
            don't like cookies. I've been trying out all the heroes I think are
            fun in the support position, and believe in the premise of nice
            gaming: first thing you do when you enter a game, type
            <InlineCode code="/mute all" />, then press{' '}
            <InlineCode code="Enter" />.
          </p>

          <p className="mt-3">
            I have shared some <Linker text="Daily Essays" href="/essays" /> and{' '}
            <Linker text="Coding Notes" href="/notes" /> here, as well as
            occasional <Linker text="TuCao" href="/words" />.
          </p>

          <p className="mt-3">
            Recently, the winds of AI are finally blowing here, and with the
            help of Trae, I've create a{' '}
            <Linker
              text="Daily Hot News"
              target="_blank"
              href="https://hot.ikangjia.cn"
            />{' '}
            website, where I, a Next.js noob, built the project and deployed it
            without writing one line of logical code...
          </p>
        </div>
      </article>
    </main>
  );
}
