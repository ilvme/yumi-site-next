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
    <div className="container max-w-6xl px-4 py-5">
      <h1 className="mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-center text-xl font-bold text-transparent">
        随笔
      </h1>
      <div className="space-y-8">
        {years.map((year) => (
          <section key={year} className="group">
            <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-400">
              {year}
            </h2>
            <div className="space-y-2">
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
