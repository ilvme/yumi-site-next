import { databases, listPublishedWords } from '@/lib/notion';

async function getWords() {
  const response = await listPublishedWords(databases.words);
  const words = response.posts;

  return words;
}

export default async function WordsPage() {
  const words = await getWords();

  return (
    <div className="py-4">
      <h1 className="mb-6 text-xl font-bold">说说</h1>
      <div className="flex flex-wrap gap-3">
        {words.map((word) => (
          <article
            key={word.id}
            className="max-w-[300px] rounded-lg border border-gray-200 px-2 py-3 dark:border-gray-800"
          >
            <p className="text-sm text-gray-800 dark:text-gray-400">
              {word.content}
            </p>
            <span className="text-xs text-gray-500">
              {new Date(word.createAt).toDateString()}
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}
