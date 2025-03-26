import NoteItem from '@/components/post/NoteItem';
import { listAllPages, listPublishedEssays } from '@/lib/notion';
import Link from 'next/link';
import { SITE_CONFIG } from '../../../../yumi.config';

async function getPosts(category: string) {
  'use cache';
  let options: object;
  if (category === 'All') {
    options = {
      sorts: [
        {
          property: 'publishedAt',
          direction: 'descending',
        },
      ],
    };
  } else {
    options = {
      sorts: [
        {
          property: 'publishedAt',
          direction: 'descending',
        },
      ],
      filter: {
        property: 'category',
        select: {
          equals: category,
        },
      },
    };
  }

  return await listPublishedEssays(SITE_CONFIG.notes_db_id, options);
}

export default async function NotesPage(props: {
  searchParams?: Promise<{ category: string }>;
}) {
  const searchParams = await props.searchParams;
  const category = searchParams?.category || 'All';
  const posts = await getPosts(category);

  // await reqSearchPostsByTitle('不');
  // 获取所有文章的类型
  const allPosts = await listAllPages(SITE_CONFIG.notes_db_id);
  const categories: string[] = ['All'];

  new Set(
    allPosts.map((page) => page.properties.category?.select?.name)
  ).forEach((c) => {
    categories.push(c);
  });
  return (
    <div className="py-3">
      <div className="sticky top-10 flex justify-center gap-5 bg-[var(--background)] pt-8 pb-6 text-2xl">
        {categories.map((cc) => {
          return cc === 'All' ? (
            <Link
              key={cc}
              href={`/notes`}
              className={`text-gray-500 hover:text-rose-500 ${category === cc ? 'font-bold text-rose-500 underline decoration-wavy' : ''}`}
            >
              {cc}
            </Link>
          ) : (
            <Link
              key={cc}
              href={`/notes?category=${cc}`}
              className={`text-gray-500 hover:text-rose-500 ${category === cc ? 'font-bold text-rose-500 underline decoration-wavy' : ''}`}
            >
              {cc}
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {posts.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}
