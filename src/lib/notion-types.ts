// 文章列表
export interface PostList {
    hasMore: boolean;
    nextCursor: string;

    posts: Post[];
}

// 文章
export interface Post {
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

// 说说相关
export interface WordList {
    hasMore: boolean;
    nextCursor: string;

    words: Word[];
}

export interface Word {
    id: string;
    content: string;
    publishedAt: string;
}