// 文章元信息
export interface PostMeta {
  id: string;
  title: string;
  icon?: string;
  slug: string;
  cover?: string;
  summary?: string;
  publishedAt: string;
  highlight?: boolean;

  tags?: string[];
  category?: string;
}

// 文章信息
export interface Post {
  postMeta: PostMeta;
  content: string;
}

// 说说
export interface Word {
  id: string;
  content: string;
  createAt: string;
}
