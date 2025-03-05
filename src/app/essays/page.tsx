import {databases, listPublishedPost} from "@/lib/notion";

async function getEssays() {
  if (!databases.essays) {
    throw new Error("Missing NOTION_ESSAYS_DB_ID environment variable");
  }
  return await listPublishedPost(databases.essays);
}

export default async function EssaysPage() {
  const essays = await getEssays();

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">随笔</h1>
      <div className="grid gap-6">
        {essays.posts.map((essay) => (
          <article key={essay.id} className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">
              <a href={`/essays/${essay.id}`} className="hover:underline">
                {essay.title}
              </a>
            </h2>
            {essay.summary && (
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {essay.summary}
              </p>
            )}
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <time dateTime={essay.publishedAt}>
                {essay.publishedAt}
              </time>
              {essay.category && (
                <span className="px-2 py-1 bg-red-100 dark:bg-gray-800 rounded">
                  {essay.category}
                </span>
              )}
              {essay.tags.length > 0 && (
                <div className="flex gap-2">
                  {essay.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded"
                    >
                      # {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}