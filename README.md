# JCurveIQ Screening Assignment App
Live demo: https://jcurveiq-assignment-teal.vercel.app

This project implements the JCurveIQ assignment using React, Redux Toolkit, TailwindCSS, and Vite. It includes a sidebar with project actions, filtering, state transitions, and mock API support.

## 🚀 Tech Stack
### Frontend:
React
Vite
React-Redux
Redux-Toolkit (RTK)
Tailwind CSS v4.1

### Developer Experience:
ESLint
Prettier

### Key Decisions:
Used Redux Toolkit for predictable UI state transitions.
Created reusable and customizable components for repeated and varied use throughout the application.
Created state variables and reducers in the UI slice to manage the collapsed and expanded state of the left side panel. 
Created a state variable in the UI slice to determine the device type and prevent keyboard navigation to unopened sidebars in mobile devices.
Used an async thunk instead of RTK Query to fetch mock data to keep the application simple, and implement it within the stipulated time duration.
Used memoized selectors to avoid refetching fetched data on component re-render.
Utility-first Tailwind CSS styling for rapid development and responsive UI.
Used a desktop-first approach owing to the desktop layout displayed in the Figma design.

## 📁 Folder Structure
```pgsql
root-folder/
├── public/
│   ├── logo.png
│   └── projects.json
├── src/
│   ├── assets
│   │   └── fonts
│   │       └── MessinaSans-Regular.ttf
│   ├── features
│   │   └── projects
│   │       ├── ProjectActions.jsx
│   │       ├── ProjectItem.jsx
│   │       ├── ProjectsList.jsx
│   │       └── projectSlice.js
│   ├── helpers
│   │   └── formatDateAndTime.js
│   ├── hooks
│   │   ├── useActivateMobileLayout.js
│   │   ├── useCloseCollapseSidebar.js
│   │   └── useProjectLoad.js
│   ├── ui
│   │   ├── AppLayout.jsx
│   │   ├── ButtonIcon.jsx
│   │   ├── Disclaimer.jsx
│   │   ├── EmptyMainWorkspace.jsx
│   │   ├── Error.jsx
│   │   ├── HeaderLeftSidebar.jsx
│   │   ├── HeaderMain.jsx
│   │   ├── HeaderRightSidebar.jsx
│   │   ├── KeyHighlightNumberTag.jsx
│   │   ├── LeftSidebar.jsx
│   │   ├── MainContent.jsx
│   │   ├── MobileSidebarOpeners.jsx
│   │   ├── ProjectSummaryRightSidebar.jsx
│   │   ├── QuestionForm.jsx
│   │   ├── RightSidebar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── SlidingButtonLabel.jsx
│   │   ├── Spinner.jsx
│   │   ├── SquareButtons.jsx
│   │   ├── Tag.jsx
│   │   ├── uiSlice.js
│   │   └── UserActions.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── store.js
├── .eslintrc
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🛠️ Setup & Run Instructions
### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
App runs at: http://localhost:5173

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

## 🔄 Known Gaps / Tradeoffs
1. Mock API only — no real backend integration yet.
2. Layout has basic accessibility enhancements and can be further enhanced.
3. No dedicated animation library — transitions are basic.
4. Component testing (Vitest/Jest) is not included to keep the project lightweight.
5. RTK Query is not used to keep the assignment simple, but can be used for caching remote state and invalidating stale remote state.
6. The UI can be further polished and made more professional-looking for the mobile layout.

## 🌐 Deployment
The project is deployed on Vercel:
➡️ https://jcurveiq-assignment-teal.vercel.app

To re-deploy, fork the repository to your account and deploy on Netlify or Vercel by importing the project on either platform.

## 📲 Mobile layout:
