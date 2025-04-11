import Footer from '@/components/website/Footer';
import Header from '@/components/website/Header';
import React from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-[660px]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
