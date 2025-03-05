import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Welcome to Yumi's Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl text-center sm:text-left">
          这里是我的个人空间，记录生活、技术和思考。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          <a href="/essays" className="p-6 border rounded-lg hover:border-gray-400 transition-colors">
            <h2 className="text-2xl font-semibold mb-2">随笔</h2>
            <p className="text-gray-600 dark:text-gray-400">记录生活中的所思所想</p>
          </a>
          <a href="/notes" className="p-6 border rounded-lg hover:border-gray-400 transition-colors">
            <h2 className="text-2xl font-semibold mb-2">技术笔记</h2>
            <p className="text-gray-600 dark:text-gray-400">分享技术学习和经验</p>
          </a>
          <a href="/words" className="p-6 border rounded-lg hover:border-gray-400 transition-colors">
            <h2 className="text-2xl font-semibold mb-2">说说</h2>
            <p className="text-gray-600 dark:text-gray-400">记录日常的碎碎念</p>
          </a>
          <a href="/toolchains" className="p-6 border rounded-lg hover:border-gray-400 transition-colors">
            <h2 className="text-2xl font-semibold mb-2">工具链</h2>
            <p className="text-gray-600 dark:text-gray-400">分享实用的工具和技巧</p>
          </a>
          <a href="/about" className="p-6 border rounded-lg hover:border-gray-400 transition-colors">
            <h2 className="text-2xl font-semibold mb-2">关于</h2>
            <p className="text-gray-600 dark:text-gray-400">了解更多关于我</p>
          </a>
          <a href="/links" className="p-6 border rounded-lg hover:border-gray-400 transition-colors">
            <h2 className="text-2xl font-semibold mb-2">友链</h2>
            <p className="text-gray-600 dark:text-gray-400">发现更多有趣的博客</p>
          </a>
        </div>
      </main>
    </div>
  );
}
