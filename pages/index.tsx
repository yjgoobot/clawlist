import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Head>
        <title>ClawList - AI Agent 时代项目管理软件</title>
        <meta name="description" content="专为 AI Agent 时代设计的现代化项目管理工具" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            欢迎使用 <span className="text-blue-600">ClawList</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            专为 AI Agent 时代设计的现代化项目管理工具，让人类与 AI 的协作更加高效
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              开始使用
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-lg transition duration-300">
              查看文档
            </button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">AI Agent 集成</h2>
            <p className="text-gray-600">
              无缝集成各种 AI Agent，支持任务分配和自动执行，提升项目效率
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">智能任务管理</h2>
            <p className="text-gray-600">
              基于 AI 的任务优先级排序和资源分配，让项目管理更加智能化
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">实时协作</h2>
            <p className="text-gray-600">
              实时同步的项目看板和团队协作功能，确保团队成员始终保持同步
            </p>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">快速开始</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>克隆项目仓库到本地</li>
            <li>安装依赖: <code className="bg-gray-100 px-2 py-1 rounded">npm install</code></li>
            <li>配置环境变量: <code className="bg-gray-100 px-2 py-1 rounded">cp .env.example .env.local</code></li>
            <li>初始化数据库: <code className="bg-gray-100 px-2 py-1 rounded">npx prisma migrate dev</code></li>
            <li>启动开发服务器: <code className="bg-gray-100 px-2 py-1 rounded">npm run dev</code></li>
          </ol>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} ClawList. 专为 AI Agent 时代设计的项目管理软件.</p>
        </div>
      </footer>
    </div>
  );
}