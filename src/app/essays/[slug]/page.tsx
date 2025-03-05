import Post from "@/components/post/Post";
import {getPostBySlug} from "@/lib/notion";


export default async function PostPage({params}) {
  const {slug} = await params
  const {content, postMeta} = await getPostBySlug(slug);

  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <article className="prose prose-lg dark:prose-invert mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{postMeta.title}</h1>
          <div className="text-gray-600 dark:text-gray-400 space-x-4">
            <time dateTime={postMeta.publishedAt}>
              {postMeta.publishedAt}
            </time>
            {postMeta.tags && (
              <span className="space-x-2">
                {postMeta.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 text-sm"
                  >
                    # {tag}
                  </span>
                ))}
              </span>
            )}
          </div>
        </header>
        
        <Post content={content}/>

      </article>
    </div>
  );
}