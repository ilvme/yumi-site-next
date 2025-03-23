export default async function WordCard({ word }) {
  return (
    <article
      key={word.id}
      className="flex max-w-[300px] flex-col justify-between gap-3 rounded-lg border border-rose-200 px-2 py-3 dark:border-gray-800"
    >
      <p className="text-base text-rose-500 dark:text-rose-300">
        {word.content}
      </p>
      <span className="text-right text-xs text-gray-500">
        {new Date(word.createAt).toDateString()}
      </span>
    </article>
  );
}
