import { ThemeProvider } from '@/components/website/ThemeProvider';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import React from 'react';
import { SITE_CONFIG } from '../../yumi.config';
import './globals.css';

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  authors: [
    {
      name: SITE_CONFIG.author,
      url: SITE_CONFIG.url,
    },
  ],
  icons: [
    {
      url: '/images/avatar-old.png',
      sizes: '16x16',
      type: 'image/png',
    },
  ],
  keywords: [
    '林深时觉寒',
    'ilvme',
    '博客',
    'Blog',
    '个人网站',
    '主页',
    'Homepage',
    '技术',
    '前端',
    '后端',
    '全栈',
    'Notion',
  ],
};

const myFont = localFont({
  src: './assets/font/LXGWZhenKai-Regular.ttf',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body
        className={`m-auto flex min-h-screen max-w-[880px] flex-col ${myFont.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
