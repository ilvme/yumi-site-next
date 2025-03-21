import friends from '@/app/_data/friends';
import Link from 'next/link';

export default async function AboutPage() {
  return (
    <div className="">
      <h2 className="py-4 text-xl font-bold">朋友</h2>
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
