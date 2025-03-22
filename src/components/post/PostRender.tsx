import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

const CodeBlock = ({ language, codeString }) => {
  return (
    <SyntaxHighlighter language={language} style={vscDarkPlus} PreTag="div">
      {codeString}
    </SyntaxHighlighter>
  );
};

export default async function PostRender({ content }) {
  return (
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
            return <th className="border border-gray-300">{props.children}</th>;
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
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <CodeBlock
                codeString={String(children).replace(/\n$/, '')}
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
  );
}
