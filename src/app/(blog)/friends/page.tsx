import friends from '@/app/_data/friends';
import BlogHero from '@/components/BlogHero';
import Link from 'next/link';

export default async function AboutPage() {
  return (
    <div className="py-3">
      <BlogHero title="朋友" description="欢迎交换友链" />

      {friends.map((friend) => (
        <Link
          key={friend.name}
          href={friend.url}
          target="_blank"
          rel="noreferrer"
          className="block px-4 py-0.5 underline"
        >
          {friend.name}
        </Link>
      ))}
    </div>
  );
}
