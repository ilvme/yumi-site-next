'use cache';
import BlogHero from '@/components/BlogHero';
import NoteItem from '@/components/post/NoteItem';
import { listPublishedPost, reqSearchPostsByTitle } from '@/lib/notion';
import { SITE_CONFIG } from '../../../../yumi.config';

export default async function NotesPage() {
  const posts = await listPublishedPost(SITE_CONFIG.essays_db_id);

  await reqSearchPostsByTitle('不');

  const categories = [
    { name: '所有', slug: 'all' },
    { name: '进击的前端', slug: 'frontend' },
    { name: '折戟的后端', slug: 'backend' },
    { name: 'DevOps', slug: 'devops' },
    { name: '架构与设计', slug: 'architecture' },
    { name: '工具链', slug: 'toolchain' },
  ];
  return (
    <div className="py-3">
      <BlogHero title="技术笔记" description="" />

      <div className="mb-5 flex justify-center gap-5 text-xl">
        {categories.map((category) => {
          return (
            <a
              key={category.slug}
              href={`/notes/${category.slug}`}
              className="text-gray-500 hover:text-gray-700"
            >
              {category.name}
            </a>
          );
        })}
      </div>

      <div>
        {posts.posts.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}
