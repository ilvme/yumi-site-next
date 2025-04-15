import { Post, PostMeta, Word } from '@/lib/notion-types';
import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { SITE_CONFIG } from '../../yumi.config';

export const notion = new Client({ auth: SITE_CONFIG.NOTION_AUTH });
export const n2m = new NotionToMarkdown({ notionClient: notion });

/**
 * 通过 slug 获取文章信息
 * @param databaseId 数据库 id
 * @param slug 文章 slug，当 slug 为空时，则 slug 为 pageId
 */
export async function getPostBySlug(databaseId: string, slug: string) {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Slug',
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });

  if (response.results.length > 1) {
    throw new Error('找到多个文章');
  }

  if (response.results.length === 1) {
    const page = response.results[0];
    const mdBlocks = await n2m.pageToMarkdown(page.id);
    const mdString = n2m.toMarkdownString(mdBlocks);

    const post: Post = {
      postMeta: toPostMeta(page),
      content: mdString.parent,
    };
    return post;
  }

  // slug 未设置，为 pageId
  const res = await notion.pages.retrieve({ page_id: slug });

  const mdBlocks = await n2m.pageToMarkdown(slug);
  const mdString = n2m.toMarkdownString(mdBlocks);
  return {
    postMeta: toPostMeta(res),
    content: mdString.parent,
  };
}

// 获取指定数据库下所有文章，带分页
export async function listPublishedPostsLimit(
  databaseId: string,
  options?: {
    filter?: any;
    sorts?: any;
    pageSize?: number;
  }
) {
  const res = await notion.databases.query({
    database_id: databaseId,
    page_size: options?.pageSize || 5,
    filter: options?.filter,
    sorts: options?.sorts,
  });
  return res.results.map((item) => toPostMeta(item));
}

// 获取指定数据库下所有文章，突破分页限制
export async function listPublishedPosts(
  databaseId: string,
  options?: {
    filter?: any;
    sorts?: any;
    pageSize?: number;
  }
) {
  const allPages = await listAllPages(databaseId, options);

  // 因为搜索不生效，在此手动筛选
  return allPages
    .map((item) => toPostMeta(item))
    .filter((item) => item.status === 'Published');
}

// 当未设置 slug 时，自动取 id 为路由

export const toPostMeta = (item) =>
  ({
    id: item.id,
    icon: item.icon?.emoji,
    title: item.properties.Title?.title[0]?.plain_text || 'Untitled',
    slug: item.properties.Slug?.rich_text[0]?.plain_text || item.id,
    tags: item.properties.Tags?.multi_select?.map((tag) => tag.name) || [],
    category: item.properties.Category?.select?.name,
    publishedAt: item.properties.PublishedAt?.date?.start,
    cover: item.cover?.external?.url || item.cover?.file?.url,
    highlight: item.properties.isHL?.checkbox,
    status: item.properties.Status?.select?.name,
    summary: item.properties.Summary?.rich_text[0]?.plain_text,
  }) as PostMeta;

// 获取所有发布的说说
export async function listWords(databaseId: string) {
  const allPages = await listAllPages(databaseId, {
    sorts: [{ property: 'PublishAt', direction: 'descending' }],
  });

  const allWords = allPages.map((item) => {
    return {
      id: item.id,
      content:
        item.properties.Title.title[0]?.plain_text || '这条说说内容去火星啦~',
      createAt: item.properties.PublishAt.formula.date.start,
    };
  });
  return allWords as Word[];
}

// 获取简历
export async function getResumeStr() {
  if (!SITE_CONFIG.NOTION_RESUME_PAGE_ID) {
    return '您尚未配置简历相关信息，请参照 README 文档完善环境变量「NOTION_RESUME_PAGE_ID」';
  }
  const mdBlocks = await n2m.pageToMarkdown(SITE_CONFIG.NOTION_RESUME_PAGE_ID);
  const mdString = n2m.toMarkdownString(mdBlocks);

  return mdString.parent;
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
