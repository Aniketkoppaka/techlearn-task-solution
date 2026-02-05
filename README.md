# TechLearn Solutions - Full Stack Developer Task

Welcome to my submission for the Round 1 Technical Task. This repository contains a fully functional, full-stack recreation of the TechLearn Course Topic page, built with **React** (Frontend) and **Node.js/Express** (Backend).

## 🚀 Quick Start (Deployment)

This application is configured for easy deployment and local testing.

### Prerequisites
*   Node.js (v14+ recommended)
*   npm

### Installation & Build
Run the following command in the root directory to install dependencies for both client/server and build the frontend:

```bash
npm run setup
```

### Running the Application
Once setup is complete, start the production server:

```bash
npm start
```
*   The application will be available at: `http://localhost:3000`
*   The backend serves the React frontend statically.

## 🛠️ Tech Stack
*   **Frontend**: React, Vite, React Router DOM, Lucide React (Icons).
*   **Backend**: Node.js, Express.
*   **Styling**: Plain CSS (Variable-based theming) + Glassmorphism effects.

## ✨ Key Features & Refactoring
Per the requirements, I have recreated the page while implementing specific UX improvements:

### 1. Unified Scrolling (No Nested Scrollbars)
*   **Change**: Removed the scrollable container logic that confined notes to a small box.
*   **Reasoning**: Nested scrollbars create friction and are poor UX on mobile. The content now flows naturally with the page, providing a distraction-free reading experience.

### 2. Streamlined Navigation (No Quizzes)
*   **Change**: Removed all "checkpoint" and "quiz" interruptions.
*   **Reasoning**: Transitioning between topics is now seamless, focusing purely on content consumption.

### 3. Sidebar Minimization (UX Bonus)
*   **Change**: Added a toggle to minimize the sidebar into a compact "Icon Mode".
*   **Reasoning**: Allows users to maximize screen real estate for the learning content, useful for code snippets and large diagrams.

### 4. Code Formatting & Dark Mode
*   **Change**: Implemented a custom Markdown parser for `**bold**` and `` `inline code` ``.
*   **Change**: Full Dark Mode support with persisted preferences.

## 📂 Project Structure
```
/
├── client/         # React Frontend
│   ├── src/        # Source code
│   └── dist/       # Production build (generated)
├── server/         # Node.js Backend
│   └── server.js   # API + Static File Server
└── package.json    # Root scripts for easy deployment
```

---
*Submitted by Candidate*
