import Linker from '@/components/Linker';
import PostRender from '@/components/post/PostRender';
import { getResumeStr } from '@/lib/notion';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `康佳的简历`,
  description: '康佳的简历',
};

export default async function Resume() {
  const resumeStr = await getResumeStr();

  return (
    <div className="pt-16 pb-32">
      {resumeStr ? (
        <PostRender content={resumeStr} />
      ) : (
        <>
          <div className="flex flex-col items-center justify-center">
            <div className="py-8 text-3xl font-bold">
              简历页面正在努力开发中...
            </div>
            <Linker href="/about" text="先返回网站查看其他精彩内容吧~" />
          </div>
        </>
      )}
    </div>
  );
}
