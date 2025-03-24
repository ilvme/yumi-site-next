import { ThemeProvider } from '@/components/website/ThemeProvider';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import React from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: '林深时觉寒',
  description: 'A personal blog built with Next.js and Notion',
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
        className={`m-auto flex min-h-screen max-w-[900px] flex-col ${myFont.className}`}
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
