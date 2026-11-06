import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { PageMetadata } from '@/components/PageMetadata';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <PageMetadata />
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
};
