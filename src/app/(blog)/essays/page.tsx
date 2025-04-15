'use cache';
import BlogHero from '@/components/BlogHero';
import PostItem from '@/components/post/PostItem';
import { listPublishedPosts } from '@/lib/notion';
import { SITE_CONFIG } from '../../../../yumi.config';

export default async function EssaysPage() {
  const posts = await listPublishedPosts(SITE_CONFIG.NOTION_ESSAYS_DB_ID, {
    filter: {
      property: 'Status',
      // TODO 探索为啥不生效
      select: {
        is_not_empty: true,
        equals: 'Published',
      },
    },
    sorts: [{ property: 'PublishedAt', direction: 'descending' }],
  });

  // 按年份分组文章
  const postsByYear = posts.reduce((acc, post) => {
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
    <div className="mx-auto py-3">
      <BlogHero title="随笔" description="记录我的所见、所闻、所思、所感。" />

      <div className="space-y-6">
        {years.map((year) => (
          <section key={year} className="">
            <h3 className="mb-2 text-2xl font-bold text-gray-300">{year}</h3>
            <div className="flex flex-col gap-2">
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
