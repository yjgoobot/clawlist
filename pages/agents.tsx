import React from 'react';
import Layout from '../components/Layout';

const MOCK_AGENTS = [
  { id: '1', name: 'OpenAI GPT-4o', description: '主要的任务处理 Agent', provider: 'openai', isActive: true },
  { id: '2', name: 'Claude 3.5 Sonnet', description: '代码审查与逻辑分析', provider: 'anthropic', isActive: true },
  { id: '3', name: 'Local Llama 3', description: '本地数据隐私处理', provider: 'custom', isActive: false },
];

const AgentsPage = () => {
  return (
    <Layout title="AI Agent 管理 - ClawList">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">AI Agent 管理</h1>
          <p className="text-gray-500">配置并集成您的 AI 助手</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-semibold transition duration-300 shadow-md">
          添加 Agent
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_AGENTS.map((agent) => (
          <div key={agent.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900">{agent.name}</h2>
              </div>
              <span className={`px-2 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider ${
                agent.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
              }`}>
                {agent.isActive ? '活跃' : '离线'}
              </span>
            </div>
            <p className="text-gray-600 mb-6 text-sm">{agent.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-gray-400 bg-gray-50 px-2 py-1 rounded">Provider: {agent.provider}</span>
              <div className="flex gap-2">
                <button className="p-2 text-gray-400 hover:text-blue-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
        
        <button className="border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 text-gray-400 hover:border-blue-300 hover:text-blue-500 transition duration-300">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span className="font-semibold">集成新 Agent</span>
        </button>
      </div>
    </Layout>
  );
};

export default AgentsPage;
