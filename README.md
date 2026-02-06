# Local-First Auth & Engine

A React-based permission system showcasing authentication, authorization, protected routes, and local-first persistence using Context API and localStorage.

## Features

- Role-based access control (Viewer, Editor, Admin)
- Protected routing
- Persistent login with localStorage
- Cross-tab logout sync
- Immutable state management
- No backend required

## Tech Stack  & Versions

- React
- React Router
- Context API
- localStorage

## Project Structure
```text
src/
│
├── main.jsx
├── App.jsx
│
├── context/
│ └── AuthContext.jsx
│
├── data/
│ └── resources.js
│
├── components/
│ ├── ProtectedRoute.jsx
│ ├── ResourceList.jsx
│ └── ResourceItem.jsx
│
├── pages/
│ ├── Login.jsx
│ ├── Dashboard.jsx
│ ├── AdminPage.jsx
│ └── Unauthorized.jsx
|
├── .gitignore
├── package-lock.json
├── package.json
├── README.md


```

## Setup

1.  Install dependencies

    npm install
    npm install react-router-dom

2. Run server

    npm run dev

Server will start at:

    http://localhost:5173

## Roles & Permissions

Role	View	Edit	Delete
Viewer	✅	   ❌	❌
Editor	✅	   ✅	❌
Admin	✅	   ✅	✅