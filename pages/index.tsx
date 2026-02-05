import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Head>
        <title>ClawList - AI Agent Era Project Management Software</title>
        <meta name="description" content="Modern project management tool designed for the AI Agent era" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">ClawList</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Modern project management tool designed for the AI Agent era, making human-AI collaboration more efficient
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              Get Started
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-lg transition duration-300">
              View Docs
            </button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">AI Agent Integration</h2>
            <p className="text-gray-600">
              Seamless integration with various AI Agents, supporting task assignment and automatic execution to enhance project efficiency
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Intelligent Task Management</h2>
            <p className="text-gray-600">
              AI-powered task prioritization and resource allocation, making project management more intelligent
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Real-time Collaboration</h2>
            <p className="text-gray-600">
              Real-time synchronized project boards and team collaboration features, ensuring team members remain always in sync
            </p>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quick Start</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Clone the project repository locally</li>
            <li>Install dependencies: <code className="bg-gray-100 px-2 py-1 rounded">npm install</code></li>
            <li>Configure environment variables: <code className="bg-gray-100 px-2 py-1 rounded">cp .env.example .env.local</code></li>
            <li>Initialize the database: <code className="bg-gray-100 px-2 py-1 rounded">npx prisma migrate dev</code></li>
            <li>Start the development server: <code className="bg-gray-100 px-2 py-1 rounded">npm run dev</code></li>
          </ol>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} ClawList. Project management software designed for the AI Agent era.</p>
        </div>
      </footer>
    </div>
  );
}