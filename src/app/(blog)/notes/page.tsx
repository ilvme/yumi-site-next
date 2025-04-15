import NoteItem from '@/components/post/NoteItem';
import {
  listAllPages,
  listPublishedPosts,
  listPublishedPostsLimit,
} from '@/lib/notion';
import Link from 'next/link';
import { SITE_CONFIG } from '../../../../yumi.config';

async function getPosts(category: string) {
  'use cache';
  let options: object;
  if (category === 'Recently') {
    options = {
      filter: {
        property: 'Status',
        select: {
          is_not_empty: true,
          equals: 'Published',
        },
      },
      pageSize: 6,
      sorts: [
        {
          property: 'PublishedAt',
          direction: 'descending',
        },
      ],
    };
    return await listPublishedPostsLimit(
      SITE_CONFIG.NOTION_NOTES_DB_ID,
      options
    );
  }

  if (category === 'All') {
    options = {
      filter: {
        property: 'Status',
        select: {
          is_not_empty: true,
          equals: 'Published',
        },
      },
      sorts: [
        {
          property: 'PublishedAt',
          direction: 'descending',
        },
      ],
    };
  } else {
    options = {
      sorts: [
        {
          property: 'PublishedAt',
          direction: 'descending',
        },
      ],
      filter: {
        and: [
          {
            property: 'Status',
            select: {
              is_not_empty: true,
              equals: 'Published',
            },
          },
          {
            property: 'Category',
            select: {
              equals: category,
            },
          },
        ],
      },
    };
  }

  return await listPublishedPosts(SITE_CONFIG.NOTION_NOTES_DB_ID, options);
}

export default async function NotesPage(props: {
  searchParams?: Promise<{ category: string }>;
}) {
  const searchParams = await props.searchParams;
  const category = searchParams?.category || 'Recently';
  const posts = await getPosts(category);

  // await reqSearchPostsByTitle('不');
  // 获取所有文章的类型
  const allPosts = await listAllPages(SITE_CONFIG.NOTION_NOTES_DB_ID);
  const categories: string[] = ['Recently', 'All'];

  new Set(
    allPosts.map((page) => page.properties.Category?.select?.name)
  ).forEach((c) => {
    categories.push(c);
  });
  return (
    <div className="py-3">
      <div className="sticky top-14 flex justify-center gap-5 bg-[var(--background)] pt-2 pb-4 text-lg font-bold">
        {categories.map((cc) => {
          return cc === 'Recently' ? (
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
