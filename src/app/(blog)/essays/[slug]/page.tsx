import PostRender from '@/components/post/PostRender';
import { getPostBySlug } from '@/lib/notion';

export default async function PostPage({ params }) {
  const { slug } = await params;
  const { content, postMeta } = await getPostBySlug(slug);

  return (
    <div className="mx-auto py-4">
      <header className="mb-4">
        <h1 className="mb-2 text-3xl text-rose-700">{postMeta.title}</h1>
        <div className="space-x-4 text-gray-600 dark:text-gray-400">
          <span className="text-sm text-gray-400"> {postMeta.publishedAt}</span>
          {postMeta.tags && (
            <span className="space-x-2">
              {postMeta.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800"
                >
                  # {tag}
                </span>
              ))}
            </span>
          )}
        </div>
      </header>

      <div className="max-w-[800px]">
        <PostRender content={content} />
      </div>
    </div>
  );
}
