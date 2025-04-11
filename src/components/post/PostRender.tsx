import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

const CodeBlock = ({ language, codeString }) => {
  return (
    <SyntaxHighlighter
      language={language}
      showLineNumbers={true}
      style={okaidia}
      PreTag="div"
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

export default async function PostRender({ content }) {
  return (
    <>
      <article className="prose prose-p:text-base prose-p:leading-7 dark:prose-invert prose-a:break-words prose-code:break-words prose-img:mx-auto prose-img:rounded-md prose-inline-code:text-rose-400 prose-inline-code:before:content-none prose-inline-code:after:content-none prose-img:sm:w-[90%] max-w-[660px]">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            blockquote(props) {
              return (
                // <blockquote className="border-l-[4px] border-l-rose-500 text-rose-500 not-italic">
                <blockquote className="border-l-[4px] not-italic">
                  {props.children}
                </blockquote>
              );
            },
            table(props) {
              return (
                <table className="mx-auto max-w-[90%]">{props.children}</table>
              );
            },
            th(props) {
              return (
                <th className="border border-[#e9e9e7] bg-[#f7f6f3] px-3 dark:border-[#2f2f2f] dark:bg-[#272727]">
                  {props.children}
                </th>
              );
            },
            td(props) {
              return (
                <td className="border border-[#e9e9e7] px-3 dark:border-[#2f2f2f]">
                  {props.children}
                </td>
              );
            },
            li(props) {
              return <li className="mt-0 mb-0">{props.children}</li>;
            },
            pre(props) {
              return <pre className="p-0">{props.children}</pre>;
            },
            a(props) {
              return (
                <a className="font-bold underline" {...props}>
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
                  className="rounded-sm bg-[#ededeb] px-1.5 py-0.5 text-rose-400 before:content-none after:content-none dark:bg-[#2f2f2d]"
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
    </>
  );
}
