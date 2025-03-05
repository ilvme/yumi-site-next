import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['www.notion.so', 'notion.so', 's3.us-west-2.amazonaws.com'],
  },
  env: {
    NOTION_TOKEN: process.env.NOTION_TOKEN,
    NOTION_ESSAYS_DB_ID: process.env.NOTION_ESSAYS_DB_ID,
    NOTION_WORDS_DB_ID: process.env.NOTION_WORDS_DB_ID,
    NOTION_NOTES_DB_ID: process.env.NOTION_NOTES_DB_ID,
    NOTION_TOOLCHAINS_DB_ID: process.env.NOTION_TOOLCHAINS_DB_ID,
    NOTION_ABOUT_PAGE_ID: process.env.NOTION_ABOUT_PAGE_ID,
    NOTION_LINKS_DB_ID: process.env.NOTION_LINKS_DB_ID,
  },
};

export default nextConfig;
