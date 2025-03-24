import { ReactNode } from 'react';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <section>{children}</section>;
}
