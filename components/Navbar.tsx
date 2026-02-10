import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            ClawList
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/projects" className="text-gray-600 hover:text-blue-600 font-medium">
              项目
            </Link>
            <Link href="/tasks" className="text-gray-600 hover:text-blue-600 font-medium">
              任务
            </Link>
            <Link href="/agents" className="text-gray-600 hover:text-blue-600 font-medium">
              AI Agent
            </Link>
            <Link href="/workflows" className="text-gray-600 hover:text-blue-600 font-medium">
              工作流
            </Link>
            <Link href="/analytics" className="text-gray-600 hover:text-blue-600 font-medium">
              分析
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium">
            个人中心
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
