import Link from 'next/link';

export default async function NoteItem({ note }) {
  return (
    <Link href={`/notes/${note.slug}`}>
      <div className="flex h-[160px] flex-col justify-between rounded-xl border border-rose-200 px-3 py-2 shadow-md hover:scale-105 hover:shadow-md dark:border-rose-800">
        <h2 className="flex space-x-2">
          <span>{note.icon}</span>
          <span className="hover:cursor-pointer hover:text-rose-500 dark:text-gray-300 hover:dark:text-rose-600">
            {note.title}
          </span>
        </h2>

        <div className="text-right text-sm text-gray-400">
          <p className="space-x-2">
            {note.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </p>

          <p className="mt-1">发布于 {note.publishedAt}</p>
        </div>
      </div>
    </Link>
  );
}
