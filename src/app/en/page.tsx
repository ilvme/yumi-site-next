import IconLinker from '@/components/IconLinker';
import InlineCode from '@/components/InlineCode';
import Linker from '@/components/Linker';
import HomeWidget from '@/components/website/HomeWidget';
import Image from 'next/image';
import { IoHome, IoMail } from 'react-icons/io5';
import { SiGithub, SiZhihu } from 'react-icons/si';

export default function Home() {
  return (
    <main className="py-28">
      <HomeWidget />

      <article className="text-gray-700 lg:flex lg:items-center lg:gap-8 lg:px-2 dark:text-gray-300">
        <div className="mx-auto mb-10 w-[240px]">
          <div className="flex flex-col items-center justify-center">
            <Image
              width="160"
              height="160"
              className="rounded-full"
              src="/images/avatar.png"
              alt="avatar"
            />
            <h1 className="mt-5 text-2xl font-bold">
              <span className="">ilvme</span>
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
                href="https://github.com/ilvme"
                icon={<SiGithub size={22} />}
              />

              <IconLinker href="/" icon={<SiZhihu size={22} />} />
              <IconLinker
                href="mailto:ikangjia.cn@outlook.com"
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
            lover (PS: like to buy not necessarily read). I am a half-Danshari,
            and I think arranging things is one of the most stressful ways to
            relieve stress.
          </p>

          <p>
            I like to go to the supermarket on weekends and make some delicious
            food. Occasionally a small drink. Only want savory when I'm hungry,
            not used to wearing slippers, don't like cookies. I've been trying
            out all the heroes I think are fun (and happy) in the support
            position, and believe in the premise of happy gaming: first thing
            you do when you enter a game, type
            <InlineCode code="/mute all" />, then press{' '}
            <InlineCode code="Enter" />.
          </p>

          <p className="mt-4">
            I have shared some <Linker text="Daily Essays" href="/essays" /> and{' '}
            <Linker text="Coding Notes" href="/notes" /> here, as well as
            occasional <Linker text="TuCao" href="/words" />
          </p>

          <p className="mt-2">
            Recently, the winds of AI are finally blowing here, and with the
            help of Trae, I've put together a{' '}
            <Linker text="Daily Hot News" href="https://hot.ikangjia.cn" />{' '}
            aggregator page, where I, a Next.js noob, built the project and
            deployed it without writing a single line of logical code...
          </p>
        </div>
      </article>
    </main>
  );
}
