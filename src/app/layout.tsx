import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import React from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: "Yumi's Blog",
  description: 'A personal blog built with Next.js and Notion',
};

const myFont = localFont({
  src: './assets/font/LXGWWenKai-Regular.ttf',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`m-auto flex min-h-screen max-w-[880px] flex-col ${myFont.className}`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
