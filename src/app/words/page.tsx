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
            className="max-w-[300px] rounded-lg border px-2 py-3"
          >
            <p className="text-sm">{word.content}</p>
            <span className="text-center text-sm text-gray-500">
              {new Date(word.createAt).toDateString()}
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}
