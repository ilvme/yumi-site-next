import { Post, PostList, PostMeta } from '@/lib/notion-types';
import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

export const notion = new Client({
  auth: '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',
});

export const n2m = new NotionToMarkdown({ notionClient: notion });

export const databases = {
  essays: '76b60dd049a34d1f995701cfce25c13e',
  words: '1a4c485ef35680f18abdf460c74835e4',
  notes: process.env.NOTION_NOTES_DB_ID,
  toolchains: process.env.NOTION_TOOLCHAINS_DB_ID,
  about: process.env.NOTION_ABOUT_PAGE_ID,
  links: process.env.NOTION_LINKS_DB_ID,
} as const;

// 通过 slug 获取文章信息
export async function getPostBySlug(slug: string) {
  const response = await notion.databases.query({
    database_id: databases.essays,
    filter: {
      property: 'slug',
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });
  console.log('文章信息', response);

  if (response.results.length === 0) {
    return null;
  }

  if (response.results.length > 1) {
    throw new Error('找到多个文章');
  }

  const page = response.results[0];
  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdBlocks);

  const post: Post = {
    postMeta: toPostMeta(page),
    content: mdString.parent,
  };
  return post;
}

// 获取指定数据库下所有已发布的文章
export async function listPublishedPost(databaseId: string) {
  try {
    const res = await notion.databases.query({
      database_id: databaseId,
      // page_size: 20,
      // filter: {
      //   property: 'published',
      //   checkbox: {
      //     equals: true,
      //   },
      // },
      sorts: [{ property: 'publishedAt', direction: 'descending' }],
    });
    console.log('源数据', res);
    const posts = res.results.map((item: any) =>
      toPostMeta(item)
    ) as PostMeta[];

    const result = {
      hasMore: res.has_more,
      nextCursor: res.next_cursor,
      posts,
    };
    console.log('文章列表信息', result);
    return result as PostList;
  } catch (error) {
    console.error('Error fetching database:', error);
    throw error;
  }
}

export const toPostMeta = (item: any): PostMeta => ({
  id: item.id,
  title: item.properties.title?.title[0]?.plain_text || 'Untitled',
  slug: item.properties.slug?.rich_text[0]?.plain_text || item.id,
  tags: item.properties.tags?.multi_select?.map((tag: any) => tag.name) || [],
  category: item.properties.category?.select?.name,
  publishedAt: item.properties.publishedAt?.date?.start,
  published: item.properties.published?.checkbox,
  cover: item.cover?.external?.url || item.cover?.file?.url,
  summary: item.properties.summary?.rich_text[0]?.plain_text,
});

// 获取指定数据库下所有已发布的文章
export async function listPublishedWords(databaseId: string) {
  try {
    const res = await notion.databases.query({
      database_id: databaseId,
      page_size: 200,
      // filter: {
      //   property: 'published',
      //   checkbox: {
      //     equals: true,
      //   },
      // },
      sorts: [{ property: '发布时间', direction: 'descending' }],
    });
    console.log('源数据', res);
    const posts = [];
    res.results.forEach((item) => {
      const i = {
        id: item.id,
        content: item.properties.Title.title[0]?.plain_text || 'Untitled',
        createAt: item.properties[`发布时间`].formula.date.start,
      };
      posts.push(i);
    });

    const result = {
      hasMore: res.has_more,
      nextCursor: res.next_cursor,
      posts,
    };
    console.log('文章列表信息', result);
    return result as PostList;
  } catch (error) {
    console.error('Error fetching database:', error);
    throw error;
  }
}
