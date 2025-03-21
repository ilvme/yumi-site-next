import PostItem from '@/components/post/PostItem';
import { databases, listPublishedPost } from '@/lib/notion';

export default async function EssaysPage() {
  const posts = await listPublishedPost(databases.essays);

  // 按年份分组文章
  const postsByYear = posts.posts.reduce((acc, post) => {
    const year = new Date(post.publishedAt).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});

  // 获取年份并降序排序
  const years = Object.keys(postsByYear).sort((a, b) => b - a);

  return (
    <div className="container max-w-6xl px-8 py-3">
      <div className="space-y-6">
        {years.map((year) => (
          <section key={year} className="">
            <h2 className="mb-2 text-xl font-semibold text-blue-200 dark:text-blue-600 dark:text-blue-800">
              {year}
            </h2>
            <div className="ml-4">
              {postsByYear[year].map((essay) => (
                <PostItem key={essay.id} essay={essay} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
