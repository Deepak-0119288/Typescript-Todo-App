Taskify
Taskify is a minimalist todo application designed to help users manage tasks with a smooth and intuitive user experience. Built as a learning project to master TypeScript, this app leverages React and Vite for a fast, modern development workflow. It’s deployed on Render and features a clean design with drag-and-drop functionality powered by react-beautiful-dnd.

Live Demo: [Insert your Render URL, e.g., https://taskify.onrender.com]

 (Add a screenshot if you have one!)

Features
Task Management: Add, edit, and delete tasks effortlessly.
Drag-and-Drop: Move tasks to the "Completed" list using drag-and-drop, powered by react-beautiful-dnd.
Auto-Completion: Mark tasks as done with a single click, automatically shifting them to the Completed section.
Persistent Data: Tasks are saved in local storage, ensuring they persist across page refreshes.
Responsive Design: A minimalist UI with custom styling (orange #de6834, black, and white theme), animations, shadows, and scrollbars, optimized for all devices.
Smooth UX: Subtle transitions and hover effects for a polished feel.
Why TypeScript?
I chose TypeScript for this project to take advantage of its static typing, which:

Catches errors early during development.
Improves code reliability and maintainability.
Enhances the developer experience with better tooling (e.g., autocompletion and type checking).
These benefits made scaling Taskify’s features more manageable and robust.

Tech Stack
Frontend: React (v19.0.0)
Build Tool: Vite (v5.2.0)
Language: TypeScript (v5.2.2)
Drag-and-Drop: react-beautiful-dnd (v13.1.1)
Icons: react-icons (v5.0.1)
Styling: Custom CSS with a minimalist orange, black, and white theme
Deployment: Render (Static Site)
Installation
To run Taskify locally, follow these steps:

Prerequisites
Node.js (v16 or higher recommended)
npm (v8 or higher)
Git
Steps
Clone the Repository:
git clone https://github.com/your-username/taskify.git
cd taskify
Install Dependencies:

Copy
npm install
Run Locally:

Copy
npm run dev
Open http://localhost:5173 in your browser to see Taskify in action.

Copy
npm run build
npm run preview
Preview the production build at http://localhost:4173.

Usage
Add a Task: Type in the input field and click "GO" to add a new task to the Active list.
Edit a Task: Click the edit icon, modify the text, and press Enter or click away to save.
Mark as Done: Click the tick icon to complete a task—it moves to the Completed list automatically.
Drag-and-Drop: Drag tasks between Active and Completed lists; dropping into Completed marks them done.
Delete a Task: Click the delete icon to remove a task.
Tasks persist in your browser’s local storage, so they’ll remain even after refreshing the page.

Deployment
Taskify is deployed as a static site on Render. To deploy your own version:

Push to GitHub: Ensure your code is in a GitHub repository (public or private).
Set Up Render:
Go to Render and create a new Static Site.
Connect your GitHub repo.
Configure:
Build Command: npm install && npm run build
Publish Directory: dist
Deploy and access your live URL (e.g., https://taskify.onrender.com).
Custom Domain (Optional): Add a custom domain in Render’s settings and update your DNS.

Project Structure:
taskify/
├── src/
│   ├── components/
│   │   ├── InputField.tsx
│   │   ├── TodoList.tsx
│   │   └── SingleTodo.tsx
│   ├── models/
│   │   └── models.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── public/
├── dist/ (generated after build)
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md

Challenges and Learnings
TypeScript Mastery: Learned to define interfaces (e.g., Todo) and leverage type safety.
Dependency Management: Navigated peer dependency conflicts with React 19 and react-beautiful-dnd.
Styling: Crafted a minimalist, responsive design with custom scrollbars and animations.
Deployment: Successfully deployed a Vite-built static site to Render.
Contributing
Feel free to fork this repo, submit issues, or send pull requests! I’d love to see how others enhance Taskify.


Acknowledgments
Thanks to the React, Vite, and TypeScript communities for amazing tools and docs.
Inspired by countless todo app tutorials, but built from scratch to learn by doing.
Created by Deepak as a TypeScript learning project, March 2025.