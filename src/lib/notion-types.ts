// 文章列表
export interface PostList {
  hasMore: boolean;
  nextCursor: string;

  posts: PostMeta[];
}

// 文章
export interface PostMeta {
  id: string;
  title: string;
  slug: string;
  tags: string[];
  category?: string;
  published: boolean;
  publishedAt: string;
  cover?: string;
  summary?: string;
}

export interface Post {
  postMeta: PostMeta;
  content: string;
}

// 说说相关
export interface Word {
  id: string;
  content: string;
  createAt: string;
}
