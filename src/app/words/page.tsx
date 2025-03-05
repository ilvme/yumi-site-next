import { databases, getDatabase } from "@/lib/notion";
import {Word} from "@/lib/notion-types";

async function getWords() {
  if (!databases.words) {
    throw new Error("Missing NOTION_WORDS_DB_ID environment variable");
  }

  const response = await getDatabase(databases.words);
  const words = response.results.map((page: any) => ({
    id: page.id,
    content: page.properties.content?.rich_text[0]?.plain_text || "",
    createdAt: page.created_time,
  })) as Word[];

  return words;
}

export default async function WordsPage() {
  const words = await getWords();

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">说说</h1>
      <div className="grid gap-6">
        {words.map((word) => (
          <article key={word.id} className="p-6 border rounded-lg">
            <p className="text-lg mb-4">{word.content}</p>
            <time
              dateTime={word.createdAt}
              className="text-sm text-gray-500"
            >
              {new Date(word.createdAt).toLocaleDateString()}
            </time>
          </article>
        ))}
      </div>
    </div>
  );
}