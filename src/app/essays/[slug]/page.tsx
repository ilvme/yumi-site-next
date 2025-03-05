import {getPostContent} from "@/lib/notion";
import ReactMarkdown from "react-markdown"

async function getPost(pageId: string) {
    return await getPostContent(pageId);
}

export default async function PostPage({params}) {
  const {slug} = await params
    // const post = await getPost('19dc485ef3568093a22fda97f12ef03b');
    console.log('slug', slug)
    const post = await getPost(slug);
    console.log(post)

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">随笔内容</h1>
        <article>
            <ReactMarkdown>
                {post.parent}
            </ReactMarkdown>
        </article>
    </div>
  );
}