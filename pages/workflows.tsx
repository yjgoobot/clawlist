import React from 'react';
import Layout from '../components/Layout';

const MOCK_WORKFLOWS = [
  { id: '1', name: '每日任务自动分配', trigger: '定时 (09:00)', status: 'active', project: 'ClawList' },
  { id: '2', name: '代码提交后自动审查', trigger: 'Webhook', status: 'active', project: 'ClawList' },
  { id: '3', name: '月度报告生成', trigger: '手动', status: 'inactive', project: 'ClawList' },
];

const WorkflowsPage = () => {
  return (
    <Layout title="工作流引擎 - ClawList">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">工作流引擎</h1>
          <p className="text-gray-500">自动化项目任务与 AI Agent 的协作流程</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-semibold transition duration-300 shadow-md">
          新建工作流
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {MOCK_WORKFLOWS.map((workflow) => (
          <div key={workflow.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition duration-300">
            <div className="flex items-center gap-6">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                workflow.status === 'active' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'
              }`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">{workflow.name}</h2>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs text-gray-400 font-medium">触发方式: {workflow.trigger}</span>
                  <span className="text-xs text-gray-300">|</span>
                  <span className="text-xs text-gray-400 font-medium">项目: {workflow.project}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end mr-4">
                <span className={`text-[10px] uppercase font-bold tracking-wider ${
                  workflow.status === 'active' ? 'text-green-500' : 'text-gray-400'
                }`}>
                  {workflow.status === 'active' ? '运行中' : '已暂停'}
                </span>
              </div>
              <button className="text-gray-400 hover:text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default WorkflowsPage;
