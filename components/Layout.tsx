import React from 'react';
import Navbar from './Navbar';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout = ({ children, title = 'ClawList - AI Agent 时代项目管理软件' }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Modern project management tool designed for the AI Agent era" />
      </Head>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} ClawList. Project management software designed for the AI Agent era.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
