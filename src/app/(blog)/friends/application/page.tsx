'use client';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Octokit } from 'octokit';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function FriendApplicationPage() {
  const codeString = `{
  "name": "林深时觉寒",
  "avatar": "头像链接",
  "url": "https://ikangjia.cn",
  "word": "Every dog has its day."
}`;

  const octokit = new Octokit({});
  octokit.request('POST /repos/ilvme/yumi-site-next/issues', {
    owner: 'ilvme',
    repo: 'yumi-site-next',
    title: 'Friend Application',
    body: "I'm having a friend soon.",
    assignees: ['octocat'],
    milestone: 1,
    labels: ['friend-application'],
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold">申请友链</h1>
        <p className="text-lg">如果您有网站、博客、个人主页，欢迎申请友链。</p>
      </div>
      <SyntaxHighlighter
        customStyle={{
          fontSize: '0.9rem',
          padding: '.8rem 1.6rem',
          width: 'fit-content',
        }}
        language="json"
        showLineNumbers={false}
        style={okaidia}
      >
        {codeString}
      </SyntaxHighlighter>

      <Textarea
        placeholder="请按照上述格式，输入你的网站信息"
        className="my-8 h-30 w-[80%]"
      />
      <Button
        className="px-20"
        onClick={() => {
          alert('xx');
        }}
      >
        点击申请
      </Button>
    </div>
  );
}
