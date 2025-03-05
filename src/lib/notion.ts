import {Client} from "@notionhq/client";
import {NotionToMarkdown} from "notion-to-md";
import {PostList,Post} from "@/lib/notion-types";


export const notion = new Client({
  auth: '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',
});

export const n2m = new NotionToMarkdown({ notionClient: notion });

export const databases = {
  essays: '19dc485ef35680cf9e6ff20ccac5810f',
  words: process.env.NOTION_WORDS_DB_ID,
  notes: process.env.NOTION_NOTES_DB_ID,
  toolchains: process.env.NOTION_TOOLCHAINS_DB_ID,
  about: process.env.NOTION_ABOUT_PAGE_ID,
  links: process.env.NOTION_LINKS_DB_ID,
} as const;

// 获取文章内容并转换为 md 字符串
export async function getPostContent(pageId: string) {
  const mdBlocks = await n2m.pageToMarkdown(pageId);
  return n2m.toMarkdownString(mdBlocks);
}


// 获取指定数据库下所有已发布的文章
export async function listPublishedPost(databaseId: string) {
  try {
    const res = await notion.databases.query({
      database_id: databaseId,
      page_size: 10,
      filter: {
        property: "published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [{ property: "publishedAt", direction: "descending" }],
    });
    console.log('源数据', res);
    const posts = res.results.map((item:any) => ({
      id: item.id,
      title: item.properties.title?.title[0]?.plain_text || "Untitled",
      slug: item.properties.slug?.rich_text[0]?.plain_text || item.id,
      tags: item.properties.tags?.multi_select?.map((tag: any) => tag.name) || [],
      category: item.properties.category?.select?.name,
      publishedAt: item.properties.publishedAt?.date?.start,
      published: item.properties.published?.checkbox,
      cover: item.cover?.external?.url || item.cover?.file?.url,
      summary: item.properties.summary?.rich_text[0]?.plain_text,
    })) as Post[];

    const result = {
      hasMore: res.has_more,
      nextCursor: res.next_cursor,
      posts,
    }
    console.log('文章列表信息', result)
    return result as PostList;
  } catch (error) {
    console.error("Error fetching database:", error);
    throw error;
  }
}