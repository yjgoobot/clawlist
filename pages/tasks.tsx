import React from 'react';
import Layout from '../components/Layout';

const MOCK_TASKS = [
  { id: '1', title: '实现登录页面', status: 'done', priority: 'high', assignee: 'yjgoo', project: 'ClawList' },
  { id: '2', title: '集成 OpenAI API', status: 'in_progress', priority: 'high', assignee: 'Agent GPT-4o', project: 'ClawList' },
  { id: '3', title: '设计看板 UI', status: 'todo', priority: 'medium', assignee: 'yjgoo', project: 'ClawList' },
  { id: '4', title: '编写 API 文档', status: 'todo', priority: 'low', assignee: 'Agent Claude', project: 'ClawList' },
];

const TasksPage = () => {
  return (
    <Layout title="任务列表 - ClawList">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">任务管理</h1>
          <p className="text-gray-500">跟踪并分配任务给团队成员或 AI Agent</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-xl font-medium hover:bg-gray-50 transition">
            筛选器
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-semibold transition duration-300 shadow-md">
            添加任务
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">任务名称</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">状态</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">优先级</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">分配给</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">项目</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600 text-right">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {MOCK_TASKS.map((task) => (
              <tr key={task.id} className="hover:bg-gray-50/50 transition">
                <td className="px-6 py-4">
                  <div className="font-medium text-gray-900">{task.title}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    task.status === 'done' ? 'bg-green-100 text-green-700' :
                    task.status === 'in_progress' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {task.status === 'done' ? '已完成' : task.status === 'in_progress' ? '进行中' : '待处理'}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                   <span className={`flex items-center gap-1 ${
                     task.priority === 'high' ? 'text-red-500' :
                     task.priority === 'medium' ? 'text-orange-500' :
                     'text-blue-500'
                   }`}>
                     <span className="w-2 h-2 rounded-full bg-current" />
                     {task.priority === 'high' ? '紧急' : task.priority === 'medium' ? '普通' : '低'}
                   </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{task.assignee}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{task.project}</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-gray-400 hover:text-blue-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default TasksPage;
