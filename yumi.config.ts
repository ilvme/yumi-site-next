export const SITE_CONFIG = {
  title: '林深时觉寒',
  description: '林深时觉寒的个人网站',
  keywords: '博客, Blog, Homepage, 主页, 简历, 林深时觉寒',
  author: '林深时觉寒',
  url: 'https://ikangjia.cn',
  email: 'ikangjia.cn@outlook.com',
  lang: 'zh_CN', // zh_CN, en_US, ja_JP, ko_KR, ...

  // social config
  social: {
    github: 'https://github.com/ilvme',
    twitter: '',
    linkedin: '',
    zhihu: 'https://www.zhihu.com/people/ikangjia',
    weibo: '',
    resume: 'https://ikangjia.cn/resume',
  },

  /// config, do not modify, unless you know what you are doing!!!
  // notion config，do not modify!!!
  NOTION_AUTH: process.env.NOTION_AUTH || '',
  NOTION_ESSAYS_DB_ID: process.env.NOTION_ESSAYS_DB_ID || '',
  NOTION_WORDS_DB_ID: process.env.NOTION_WORDS_DB_ID || '',
  NOTION_NOTES_DB_ID: process.env.NOTION_NOTES_DB_ID || '',
  NOTION_RESUME_PAGE_ID: process.env.NOTION_RESUME_PAGE_ID || '',

  // github config，do not modify!!!
  GITHUB_TOKEN: process.env.GITHUB_TOKEN || '',
};
