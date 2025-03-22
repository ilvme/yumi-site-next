import Link from 'next/link';

export default async function PostItem({ essay }) {
  return (
    <article
      key={essay.id}
      className="align-center flex gap-5 p-0.5 transition-all duration-300"
    >
      <span className="text-sm text-gray-400">{essay.publishedAt}</span>
      <Link
        className="text-gray-500 hover:text-rose-500 hover:underline dark:text-gray-300"
        href={`/essays/${essay.slug}`}
      >
        {essay.title}
      </Link>
    </article>
  );
}
