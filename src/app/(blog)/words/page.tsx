'use cache';

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
      <div className="mb-6">
        <h2 className="text-2xl font-bold">说说</h2>
        <p className="text-gray-500">
          一句话叙当前所历之事，一句话抒此刻难言之情，一句话吐所遇违心之槽。
        </p>
      </div>
      <div className={`flex flex-wrap gap-3`}>
        {words.map((word) => (
          <article
            key={word.id}
            className="flex max-w-[300px] flex-col justify-between gap-3 rounded-lg border border-gray-200 px-2 py-3 dark:border-gray-800"
          >
            <p className="text-base text-gray-800 dark:text-rose-200">
              {word.content}
            </p>
            <span className="text-right text-xs text-gray-500">
              {new Date(word.createAt).toDateString()}
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}
