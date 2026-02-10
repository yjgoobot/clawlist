import React from 'react';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="text-center mb-16 pt-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
          欢迎使用 <span className="text-blue-600">ClawList</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          专为 AI Agent 时代设计的现代化项目管理工具，让人类与 AI 的协作更高效、更直观。
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition duration-300 shadow-lg shadow-blue-200">
            立即开始
          </button>
          <button className="bg-white border border-gray-200 hover:border-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-xl transition duration-300">
            查看文档
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">AI Agent 集成</h2>
          <p className="text-gray-600 leading-relaxed">
            无缝集成各种 AI Agent，支持任务分配与自动化执行，极大提升项目执行效率。
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">智能任务管理</h2>
          <p className="text-gray-600 leading-relaxed">
            AI 辅助的任务优先级排序与资源分配，根据进度自动调整，让管理更从容。
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
          <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">实时协作</h2>
          <p className="text-gray-600 leading-relaxed">
            实时同步的项目看板与团队协作功能，确保团队成员与 AI Agent 始终保持同步。
          </p>
        </div>
      </section>

      <section className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">快速开始</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">创建项目</h3>
                <p className="text-gray-500 text-sm">定义您的项目目标与里程碑。</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">添加 AIAgent</h3>
                <p className="text-gray-500 text-sm">配置并连接您的 AI 助手。</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">分配任务</h3>
                <p className="text-gray-500 text-sm">将任务分配给团队成员或 AI Agent。</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 font-mono text-sm text-blue-300">
            <p className="text-gray-500 mb-2"># 初始化环境</p>
            <p>npm install</p>
            <p>npx prisma db push</p>
            <p className="text-gray-500 mt-4 mb-2"># 启动开发服务器</p>
            <p>npm run dev</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
