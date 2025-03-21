import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import type { Metadata } from 'next';
import React from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: "Yumi's Blog",
  description: 'A personal blog built with Next.js and Notion',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`m-auto flex min-h-screen max-w-[880px] flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
