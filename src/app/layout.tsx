import type { Metadata } from 'next';
import localFont from 'next/font/local';
import React from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: '林深时觉寒',
  description: 'A personal blog built with Next.js and Notion',
};

const myFont = localFont({
  // src: './assets/font/LXGWWenKaiLite-Medium.ttf',
  // src: './assets/font/LXGWWenKaiMonoLite-Medium.ttf',
  // src: './assets/font/mini/LXGWNeoXiHei.ttf',
  src: './assets/font/mini/LXGWZhenKai-Regular.ttf',
  // src: './assets/font/LXGWWenKaiLite-Light.ttf',
  // src: './assets/font/LXGWWenKaiLite-Regular.ttf',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`m-auto flex min-h-screen max-w-[820px] flex-col ${myFont.className}`}
      >
        {children}
      </body>
    </html>
  );
}
