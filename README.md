# ClawList

AI Agent Era Project Management Software

## Project Overview

ClawList is a modern project management tool designed specifically for the AI Agent era. It combines best practices of traditional project management with new models of AI Agent collaboration, helping teams collaborate more efficiently and manage complex AI-driven projects.

## Core Features

- **AI Agent Integration**: Seamless integration with various AI Agents, supporting task assignment and automatic execution
- **Intelligent Task Management**: AI-powered task prioritization and resource allocation
- **Real-time Collaboration**: Real-time synchronized project boards and team collaboration features
- **Data Analysis**: Built-in data analysis tools providing project progress and efficiency insights
- **Flexible Customization**: Highly customizable workflows and interfaces

## Tech Stack

- **Frontend**: Next.js 15, React
- **Styling**: Tailwind CSS v4
- **Backend**: Node.js
- **Database**: PostgreSQL
- **Deployment**: Docker containerization

## Requirements

- Node.js 20+
- PostgreSQL 14+
- Docker (optional, for containerized deployment)

## Quick Start

1. Clone the project:
   ```bash
   git clone <repository-url>
   cd clawlist
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env.local
   # Edit the .env.local file to configure your environment variables
   ```

4. Initialize the database:
   ```bash
   npx prisma migrate dev
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

## Architecture Design

ClawList adopts a modular architecture design for easy expansion and maintenance:

- **UI Layer**: Next.js + Tailwind CSS provides responsive user interface
- **Business Logic Layer**: TypeScript implementation of business logic and service layers
- **Data Layer**: PostgreSQL database with Prisma ORM
- **AI Integration Layer**: Unified AI Agent interface supporting multiple AI services

## AI Agent Integration

ClawList provides a dedicated AI Agent management interface, allowing users to:

- Add and configure different AI Agents
- Assign tasks to specific AI Agents
- Monitor AI Agent execution status and performance
- Set up automated workflows

## Contributing

We welcome community contributions! Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for detailed information.

## License

MIT License