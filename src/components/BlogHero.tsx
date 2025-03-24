export default function BlogHero({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-6">
      <h2 className="mb-2 text-2xl">{title}</h2>
      {description && (
        <p className="text-base dark:text-gray-500">{description}</p>
      )}
    </div>
  );
}
