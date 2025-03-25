import { Post, PostList, PostMeta, Word } from '@/lib/notion-types';
import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { SITE_CONFIG } from '../../yumi.config';

export const notion = new Client({ auth: SITE_CONFIG.notion_token });
export const n2m = new NotionToMarkdown({ notionClient: notion });

// 通过 slug 获取文章信息
export async function getPostBySlug(databaseId: string, slug: string) {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'slug',
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });

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

// 获取指定数据库下所有已发布的文章，有分页限制，最大100条
export async function listPublishedPost(
  databaseId: string,
  options?: {
    sorts?: any;
    pageSize?: number;
    filter?: any;
    startCursor?: string;
  }
) {
  try {
    const res = await notion.databases.query({
      database_id: databaseId,
      page_size: options?.pageSize || 10,
      start_cursor: options?.startCursor,
      filter: options?.filter,
      sorts: options?.sorts,
    });

    const posts = res.results.map((item) => toPostMeta(item)) as PostMeta[];

    const result = {
      hasMore: res.has_more,
      nextCursor: res.next_cursor,
      posts,
    };

    return result as PostList;
  } catch (error) {
    console.error('分页获取文章列表失败:', error);
    throw error;
  }
}

// 获取指定数据库下所有文章，突破分页限制
export async function listPublishedEssays(databaseId: string) {
  const allPages = await listAllPages(databaseId, {
    sorts: [{ property: 'publishedAt', direction: 'descending' }],
  });
  const posts = allPages.map((item) => toPostMeta(item));
  return posts;
}

export const toPostMeta = (item): PostMeta => ({
  id: item.id,
  title: item.properties.title?.title[0]?.plain_text || 'Untitled',
  slug: item.properties.slug?.rich_text[0]?.plain_text || item.id,
  tags: item.properties.tags?.multi_select?.map((tag) => tag.name) || [],
  category: item.properties.category?.select?.name,
  publishedAt: item.properties.publishedAt?.date?.start,
  published: item.properties.published?.checkbox,
  cover: item.cover?.external?.url || item.cover?.file?.url,
  summary: item.properties.summary?.rich_text[0]?.plain_text,
});

// 获取所有发布的说说
export async function listPublishedWords(databaseId: string) {
  const allPages = await listAllPages(databaseId, {
    sorts: [{ property: '发布时间', direction: 'descending' }],
  });

  const allWords: Word[] = allPages.map((item) => {
    return {
      id: item.id,
      content: item.properties.Title.title[0]?.plain_text || 'Untitled',
      createAt: item.properties[`发布时间`].formula.date.start,
    };
  });
  return allWords;
}

// 获取简历
export async function getResumeStr() {
  if (!SITE_CONFIG.resume_page_id) {
    return;
  }
  const mdBlocks = await n2m.pageToMarkdown(SITE_CONFIG.resume_page_id);
  const mdString = n2m.toMarkdownString(mdBlocks);

  return mdString.parent;
}

//
export async function reqSearchPostsByTitle(searchText: string) {
  if (!SITE_CONFIG.notes_db_id) {
    return;
  }

  const res = await notion.databases.query({
    database_id: SITE_CONFIG.notes_db_id,
    filter: {
      property: 'title',
      title: {
        contains: searchText,
      },
    },
  });
  console.log('search', res);
  console.log(
    'search-results',
    res.results.map((item) => item.properties.title.title[0].plain_text)
  );
}

// 获取指定数据库下所有页面，支持自定义查询参数
export async function listAllPages(
  databaseId: string,
  options?: {
    filter?: any;
    sorts?: any;
    pageSize?: number;
  }
) {
  try {
    const allPages = [];
    let hasMore = true;
    let nextCursor: string | null = undefined;

    while (hasMore) {
      const res = await notion.databases.query({
        database_id: databaseId,
        page_size: options?.pageSize || 100,
        start_cursor: nextCursor,
        filter: options?.filter,
        sorts: options?.sorts,
      });

      allPages.push(...res.results);

      hasMore = res.has_more;
      nextCursor = res.next_cursor;
    }

    console.log(`获取所有页面完成，总数：${allPages.length}`);
    return allPages;
  } catch (error) {
    console.error('Error fetching all pages:', error);
    throw error;
  }
}
