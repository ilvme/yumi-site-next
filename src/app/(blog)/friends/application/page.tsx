'use client';
import Comment from '@/components/website/Comment';
import { useRouter } from 'next/navigation';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function FriendApplicationPage() {
  const codeString = `{
  "name": "林深时觉寒",
  "avatar": "头像链接",
  "url": "https://ikangjia.cn",
  "word": "Every dog has its day."
}`;
  const router = useRouter();
  return (
    <div className="relative flex flex-col items-center justify-center gap-3 py-10">
      <IoMdArrowRoundBack
        className="absolute top-10 left-10 cursor-pointer"
        size={30}
        onClick={() => {
          router.push('/friends');
        }}
      />

      <h1 className="text-3xl font-bold">申请友链</h1>
      <p className="text-base">
        如果你也有网站、博客、个人主页，欢迎交换友链！请参考以下格式：
      </p>
      <SyntaxHighlighter
        customStyle={{
          fontSize: '0.9rem',
          padding: '.6rem 1.2rem',
          width: 'fit-content',
        }}
        language="json"
        showLineNumbers={false}
        style={okaidia}
      >
        {codeString}
      </SyntaxHighlighter>

      <Comment />
    </div>
  );
}
