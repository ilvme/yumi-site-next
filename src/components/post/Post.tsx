import ReactMarkdown from "react-markdown"


export default async function Post({content}) {

  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <article className="prose prose-lg dark:prose-invert mx-auto">
        <div className="markdown-content">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}