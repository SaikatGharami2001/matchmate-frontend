<div align="center">

# 🚀 **MatchMate – Frontend (React + Vite)**

Modern UI for building real social connections.

A fast, clean, and optimized frontend for the MatchMate platform — built with React, Tailwind, Zustand & Vite.  
Future updates will include messaging, notifications, and real-time features.

<br/>

### 🏅 Tech Stack

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-000000?logo=react&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white)
![Tailwind](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)

<br/>
</div>

---

## 🔐 **Authentication**

- Signup / Login / Logout
- JWT-based authentication
- Secure **HTTP-only cookies**
- Password hashing (via backend)
- Auto-persisted login state

---

## 👥 **Connection System**

- Browse all users
- Send connection requests
- Accept / Ignore requests
- Manage **pending & received** requests
- Smooth realtime-like UI via Zustand

---

## 👤 **User Profile**

- Edit profile information
- View basic user details
- Fully responsive layout
- Reusable components

---

## ⚡ **Performance**

- Optimized global state
- Lean API calls with Axios
- Fast routing via React Router
- Minimal re-renders
- Tailwind CSS utility-first styling

---

## 🧱 **Project Structure**

matchmate-frontend/
├── src/
│ ├── assets/ # Images, icons, previews
│ │
│ ├── components/ # Reusable UI components
│ │ ├── About.jsx
│ │ ├── BackgroundParticles.jsx
│ │ ├── Body.jsx
│ │ ├── ChangePassword.jsx
│ │ ├── Connections.jsx
│ │ ├── Dashboard.jsx
│ │ ├── DropdownPortal.jsx
│ │ ├── EditProfile.jsx
│ │ ├── Feed.jsx
│ │ ├── Footer.jsx
│ │ ├── Home.jsx
│ │ ├── Login.jsx
│ │ ├── Messages.jsx
│ │ ├── Navbar.jsx
│ │ ├── Profile.jsx
│ │ ├── Requests.jsx
│ │ ├── SignUp.jsx
│ │ └── UserCard.jsx
│ │
│ ├── hooks/ # Custom React hooks
│ │
│ ├── store/ # Zustand state stores
│ │ ├── useAuthStore.js
│ │ ├── useConnectionStore.js
│ │ ├── useFeedStore.js
│ │ └── usePending.js
│ │
│ ├── utils/
│ │ └── constants.js # Base URLs & project constants
│ │
│ ├── app.css
│ ├── App.jsx # App + Routes
│ └── main.jsx # Vite entry file
│
├── index.html
├── .env # Environment variables
├── eslint.config.js
├── vite.config.js
├── vercel.json
├── package.json
└── package-lock.json
