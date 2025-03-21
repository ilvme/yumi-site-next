import Link from 'next/link';

export default async function PostItem({ essay }) {
  return (
    <article
      key={essay.id}
      className="align-center flex gap-6 p-0.5 transition-all duration-300"
    >
      <span className="text-sm text-gray-500">{essay.publishedAt}</span>
      <span className="hover:text-blue-500 hover:underline">
        <Link href={`/essays/${essay.slug}`}>{essay.title}</Link>
      </span>
    </article>
  );
}
