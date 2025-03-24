// TODO
export const SITE_CONFIG = {
  title: '林深时觉寒',
  description: '',
  keywords: '',
  author: '',
  email: '',
  lang: '',

  // notion config
  notion_token: process.env.NOTION_AUTH,
  essays: process.env.NOTION_ESSAYS_DB_ID,
  words: process.env.NOTION_WORDS_DB_ID,
  notes: process.env.NOTION_NOTES_DB_ID,

  // github config
  github_token: process.env.GITHUB_TOKEN,
};
