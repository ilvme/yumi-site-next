interface SiteConfig {
  title: string;
  description: string;
  keywords: string;
  author: string;
  email: string;
  lang: string;

  notion_token: string;
  essays_db_id: string;
  words_db_id: string;
  notes_db_id: string;
  resume_page_id: string;

  github_token: string;
}

export const SITE_CONFIG: SiteConfig = {
  title: '林深时觉寒',
  description: '林深时觉寒的个人网站',
  keywords: '博客, Blog, Homepage, 主页, 简历, 林深时觉寒',
  author: '林深时觉寒',
  email: 'ikangjia.cn@outlook.com',
  lang: 'zh_CN', // zh_CN, en_US, ja_JP, ko_KR, ...

  /// config, do not modify, unless you know what you are doing!!!
  // notion config，do not modify!!!
  notion_token: process.env.NOTION_AUTH || '',
  essays_db_id: process.env.NOTION_ESSAYS_DB_ID || '',
  words_db_id: process.env.NOTION_WORDS_DB_ID || '',
  notes_db_id: process.env.NOTION_NOTES_DB_ID || '',
  resume_page_id: process.env.NOTION_RESUME_PAGE_ID || '',

  // github config，do not modify!!!
  github_token: process.env.GITHUB_TOKEN || '',
};
