import { getPostBySlug } from '@/lib/notion';
import ReactMarkdown from 'react-markdown';

export default async function PostPage({ params }) {
  const { slug } = await params;
  const { content, postMeta } = await getPostBySlug(slug);

  return (
    <div className="container mx-auto max-w-4xl py-4">
      <article className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:leading-relaxed prose-p:mb-6 prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-800 prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-em:text-gray-700 dark:prose-em:text-gray-300 prose-code:text-pink-500 dark:prose-code:text-pink-400 prose-code:before:content-none prose-code:after:content-none prose-img:rounded-lg prose-img:shadow-lg prose-ul:space-y-2 prose-ol:space-y-2 prose-li:marker:text-gray-400 mx-auto transition-colors duration-200">
        <header className="mb-4">
          <h1 className="mb-2 text-2xl">{postMeta.title}</h1>
          <div className="space-x-4 text-gray-600 dark:text-gray-400">
            <span className=""> {postMeta.publishedAt}</span>
            {postMeta.tags && (
              <span className="space-x-2">
                {postMeta.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800"
                  >
                    # {tag}
                  </span>
                ))}
              </span>
            )}
          </div>
        </header>

        <article className="prose prose-a:break-words prose-code:break-words prose-img:mx-auto prose-img:rounded-md prose-inline-code:text-rose-400 prose-inline-code:before:content-none prose-inline-code:after:content-none prose-img:sm:w-[90%] max-w-none font-normal">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </article>
    </div>
  );
}
