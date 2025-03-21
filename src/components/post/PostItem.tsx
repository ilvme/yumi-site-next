import Link from 'next/link';

export default async function PostItem({ essay }) {
  return (
    <article
      key={essay.id}
      className="align-center flex gap-6 p-1 transition-all duration-300"
    >
      <span>{essay.publishedAt}</span>
      <span className="hover:text-blue-500">
        <Link href={`/essays/${essay.slug}`}>{essay.title}</Link>
      </span>
    </article>
  );
}
