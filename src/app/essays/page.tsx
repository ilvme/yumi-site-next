import PostItem from "@/components/post/PostItem";
import {databases, listPublishedPost} from "@/lib/notion";


export default async function EssaysPage() {
  const posts = await listPublishedPost(databases.essays);

  return (
    <div className="container py-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">随笔</h1>
      <div className="grid gap-8">
        {posts.posts.map((essay) => (
          <PostItem key={essay.id} essay={essay} />
        ))}
      </div>
    </div>
  );
}