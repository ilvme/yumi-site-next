import Link from 'next/link';

export default async function NoteItem({ note }) {
  return (
    <div key={note.id} className="flex items-center gap-5 p-0.5">
      <span className="text-sm text-gray-400">{note.publishedAt}</span>
      <Link
        className="text-gray-600 hover:text-rose-500 hover:underline dark:text-gray-300"
        href={`/notes/${note.slug}`}
      >
        {note.title}
      </Link>

      <div>
        <span className="space-x-2 text-sm text-gray-400">
          {note.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </span>
      </div>
    </div>
  );
}
