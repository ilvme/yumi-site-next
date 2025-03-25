import { Post, PostList, PostMeta, Word } from '@/lib/notion-types';
import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { SITE_CONFIG } from '../../yumi.config';

export const notion = new Client({ auth: SITE_CONFIG.notion_token });
export const n2m = new NotionToMarkdown({ notionClient: notion });

// 通过 slug 获取文章信息
export async function getPostBySlug(slug: string) {
  const response = await notion.databases.query({
    database_id: SITE_CONFIG.essays_db_id,
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
      page_size: 10,
      // filter: {
      //   property: 'published',
      //   checkbox: {
      //     equals: true,
      //   },
      // },
      sorts: [{ property: 'publishedAt', direction: 'descending' }],
    });
    console.log('源数据', res);
    const posts = res.results.map((item) => toPostMeta(item)) as PostMeta[];

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
    const posts: Word[] = [];
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
    return result;
  } catch (error) {
    console.error('Error fetching database:', error);
    throw error;
  }
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
