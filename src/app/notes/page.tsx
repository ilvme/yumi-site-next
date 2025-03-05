import { databases, getDatabase, type NotionPage } from "@/lib/notion";

async function getNotes() {
  if (!databases.notes) {
    throw new Error("Missing NOTION_NOTES_DB_ID environment variable");
  }

  const response = await getDatabase(databases.notes);
  const notes = response.results.map((page: any) => ({
    id: page.id,
    title: page.properties.title?.title[0]?.plain_text || "Untitled",
    slug: page.properties.slug?.rich_text[0]?.plain_text || page.id,
    tags: page.properties.tags?.multi_select?.map((tag: any) => tag.name) || [],
    category: page.properties.category?.select?.name,
    createdAt: page.created_time,
    lastEditedAt: page.last_edited_time,
    cover: page.cover?.external?.url || page.cover?.file?.url,
    description: page.properties.description?.rich_text[0]?.plain_text,
  })) as NotionPage[];

  return notes;
}

export default async function NotesPage() {
  const notes = await getNotes();

  // 按分类组织笔记
  const notesByCategory = notes.reduce((acc: { [key: string]: NotionPage[] }, note) => {
    const category = note.category || "未分类";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(note);
    return acc;
  }, {});

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">技术笔记</h1>
      {Object.entries(notesByCategory).map(([category, categoryNotes]) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{category}</h2>
          <div className="grid gap-6">
            {categoryNotes.map((note) => (
              <article key={note.id} className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  <a href={`/notes/${note.slug}`} className="hover:underline">
                    {note.title}
                  </a>
                </h3>
                {note.description && (
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {note.description}
                  </p>
                )}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <time dateTime={note.createdAt}>
                    {new Date(note.createdAt).toLocaleDateString()}
                  </time>
                  {note.tags.length > 0 && (
                    <div className="flex gap-2">
                      {note.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}