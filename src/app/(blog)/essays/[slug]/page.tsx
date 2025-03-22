import { getPostBySlug } from '@/lib/notion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import rehypeRaw from 'rehype-raw';

const CodeBlock = ({
  language,
  codestring,
}: {
  language: string;
  codestring: string;
}) => {
  return (
    <SyntaxHighlighter language={language} style={vscDarkPlus} PreTag="div">
      {codestring}
    </SyntaxHighlighter>
  );
};

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
        <article className="prose prose-p:text-lg dark:prose-invert prose-a:break-words prose-code:break-words prose-img:mx-auto prose-img:rounded-md prose-inline-code:text-rose-400 prose-inline-code:before:content-none prose-inline-code:after:content-none prose-img:sm:w-[90%] max-w-[800px]">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              blockquote(props) {
                return (
                  <blockquote className="text-rose-500 not-italic">
                    {props.children}
                  </blockquote>
                );
              },
              table(props) {
                return (
                  <table className="table-auto border-collapse border border-gray-400">
                    {props.children}
                  </table>
                );
              },
              th(props) {
                return (
                  <th className="border border-gray-300">{props.children}</th>
                );
              },
              thead(props) {
                return <thead className="bg-[#f3f4f6]">{props.children}</thead>;
              },
              li(props) {
                return <li className="mt-0 mb-0">{props.children}</li>;
              },
              a(props) {
                return (
                  <a className="text-rose-400 underline" {...props}>
                    {props.children}
                  </a>
                );
              },

              // img(props) {
              //   return (
              //     // eslint-disable-next-line @next/next/no-img-element
              //     <img
              //       src={props.src}
              //       alt={props.alt || ''}
              //       onClick={() => onViewImage(props.src)}
              //     />
              //   );
              // },
              code({ inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <CodeBlock
                    codestring={String(children).replace(/\n$/, '')}
                    language={match[1]}
                  />
                ) : (
                  <code
                    className="rounded-sm bg-[#ededeb] px-1.5 py-0.5 text-rose-400 before:content-none after:content-none dark:bg-[#292927]"
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
