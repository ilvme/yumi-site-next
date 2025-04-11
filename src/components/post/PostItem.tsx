import Link from 'next/link';

export default async function PostItem({ essay }) {
  return (
    <article key={essay.id} className="flex items-center justify-between gap-5">
      <Link
        className="text-gray-600 hover:text-rose-500 hover:underline dark:text-gray-300 hover:dark:text-rose-600"
        href={`/essays/${essay.slug}`}
      >
        <span>
          <span className="mr-2"> {essay.icon}</span>
          <span>{essay.title}</span>
        </span>
      </Link>
      <span className="text-sm text-gray-400">{essay.publishedAt}</span>
    </article>
  );
}
