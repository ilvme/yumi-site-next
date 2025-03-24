'use client';

import friends, { FriendItem } from '@/app/_data/friends';
import BlogHero from '@/components/BlogHero';
import { Button } from '@/components/ui/button';
import Comment from '@/components/website/Comment';
import Link from 'next/link';
import { useState } from 'react';

export default function AboutPage() {
  const Friend = (friend: FriendItem) => {
    return (
      <div className="flex items-center">
        <Link
          key={friend.name}
          href={friend.url}
          target="_blank"
          rel="noreferrer"
          className="py-0.5 underline"
        >
          {friend.name}
        </Link>
        <div className="px-4 text-sm text-gray-500"> / {friend.word}</div>
      </div>
    );
  };

  const [commentShow, setCommentShow] = useState(false);
  const toggleComment = () => {
    setCommentShow(!commentShow);
  };

  return (
    <div className="py-3">
      <BlogHero
        title="朋友"
        description="欢迎交换友链，申请请点击页面最下方「申请友链」链接。"
      />

      {friends.map((friend) => (
        <Friend key={friend.name} {...friend} />
      ))}

      <hr className="mt-5 mb-8" />
      <Button onClick={toggleComment}>申请友链</Button>

      {commentShow && <Comment />}
    </div>
  );
}
