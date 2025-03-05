export default async function PostItem({ essay }) {
  return (
    <article
      key={essay.id}
      className="group p-6 border rounded-xl transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 bg-background/50 backdrop-blur"
    >
      <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-500 transition-colors">
        <a
          href={`/essays/${essay.slug}`}
          className="hover:underline decoration-2 decoration-blue-500/50"
        >
          {essay.title}
        </a>
      </h2>
      {essay.summary && (
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {essay.summary}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <time dateTime={essay.publishedAt} className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {essay.publishedAt}
        </time>
        {essay.category && (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
            {essay.category}
          </span>
        )}
        {essay.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {essay.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                  />
                </svg>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
