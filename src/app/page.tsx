import Link from 'next/link';

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl py-28">
      <article className="text-lg text-gray-700 dark:text-gray-300">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              Hi, <br />
              我是<span className="text-rose-500 italic">林深时觉寒</span>
            </h1>
            <div className="mt-2">
              <span className="mr-2 text-gray-400">Web Developer.</span>
              <span className="mr-2 text-gray-400">Blogger.</span>
              <span className="mr-2 text-gray-400">ENFJ.</span>
            </div>
          </div>
          <div>Logo</div>
        </div>

        <h2 className="mt-4 mb-2 text-2xl font-bold">about me</h2>
        <p className="py-3">
          96
          年程序员，ENFJ，现居天津。纯音乐爱好者，书籍爱好者（PS：喜欢买不一定看）。半个断舍离主义者，认为整理东西是最解压的方式之一。
        </p>
        <p className="py-3">
          喜欢在周末逛个超市，做点美食。偶尔小酌一杯。饿的时候只想吃咸香的，不习惯穿拖鞋，不喜欢吃饼干。
          偶尔打打游戏，一直在辅助的位置尝试着所有自认为有趣（快乐）的英雄，信奉快乐游戏的前提是：进入游戏的第一件事，键入{' '}
          <code className="rounded-sm bg-[#ededeb] px-1 text-rose-400">
            /mute all
          </code>
          ，再按下{' '}
          <code className="rounded-sm bg-[#ededeb] px-1 text-rose-400">
            Enter
          </code>
          。
        </p>
        <h2 className="mt-4 mb-2 text-2xl font-bold">highlight here</h2>
        <p>
          我在 Notion 里分享了一些
          <Link
            href="/essays"
            className="underline decoration-rose-300 decoration-wavy decoration-2 hover:text-rose-400"
          >
            日常随笔
          </Link>
          、
          <Link
            href="/notes"
            className="underline decoration-rose-300 decoration-wavy decoration-2 hover:text-rose-400"
          >
            技术笔记
          </Link>
          ，以及偶尔也会发发的
          <Link
            href="/notes"
            className="underline decoration-rose-300 decoration-wavy decoration-2 hover:text-rose-400"
          >
            牢骚
          </Link>
          。
        </p>
        <p className="py-3">
          最近 AI 的风终究是吹到了这里，借助 Trae 整了个
          <Link
            href="https://hot.ikangjia.cn"
            className="underline decoration-rose-300 decoration-wavy decoration-2 hover:text-rose-400"
          >
            新闻热点
          </Link>
          聚合网页，我一个 Next.js 小白从搭建项目到部署几乎未写一行逻辑性代码...
        </p>
        <h2 className="mt-4 mb-2 text-2xl font-bold">find me</h2>
        <div className="flex items-center gap-8">
          <Link href="/essays">GitHub</Link>
          <Link href="/notes">知乎</Link>
          <Link href="/notes">简历</Link>
          <Link href="/notes">发邮件</Link>
        </div>
        <h2 className="mt-8 mb-2">一句话与君共勉：</h2>
        <p className="">
          越来越明白，长大后的生活，没有喜出望外的惊喜，也没有自然而然的稳定前进，有的只不过是需要带上披荆斩棘般的勇气去开拓！
        </p>
      </article>
    </main>
  );
}
