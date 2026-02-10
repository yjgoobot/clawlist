import React from 'react';
import Layout from '../components/Layout';

const MOCK_PROJECTS = [
  { id: '1', title: 'Cocoling', description: '英语学习平台开发', status: 'active', taskCount: 12, agentCount: 2 },
  { id: '2', title: 'ClawList', description: 'AI Agent 项目管理工具', status: 'active', taskCount: 5, agentCount: 1 },
];

const ProjectsPage = () => {
  return (
    <Layout title="项目管理 - ClawList">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">我的项目</h1>
          <p className="text-gray-500">管理您的所有项目及与之关联的 AI Agent</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-semibold transition duration-300 shadow-md">
          新建项目
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_PROJECTS.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-gray-900">{project.title}</h2>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                project.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
              }`}>
                进行中
              </span>
            </div>
            <p className="text-gray-600 mb-6 line-clamp-2">{project.description}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                {project.taskCount} 任务
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {project.agentCount} Agents
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-50 flex justify-end">
              <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                查看详情 →
              </button>
            </div>
          </div>
        ))}
        
        <button className="border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 text-gray-400 hover:border-blue-300 hover:text-blue-500 transition duration-300">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span className="font-semibold">添加新项目</span>
        </button>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
