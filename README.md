# **MatchMate – Frontend (React + Vite) 🚀**

A modern, fast, and secure frontend for **MatchMate**, a social networking platform built for managing real human connections.  
This UI focuses on clean design, efficient state management, and production-ready architecture.  
Future versions will include messaging and real-time features.

---

## 🔥 **Core Features**

### 🔐 **Authentication**

- Signup / Login / Logout
- JWT-based authentication
- Secure **HTTP-only cookies**
- Password hashing (via backend)
- Auto-persisted login state

---

### 👥 **Connection System**

- Browse all users
- Send connection requests
- Accept / Ignore incoming requests
- Manage **pending & received** requests
- Smooth UI state updates using Zustand

---

### 👤 **User Profile**

- Edit profile information
- View user details
- Fully responsive layout
- Reusable component structure

---

### ⚡ **Performance**

- Optimized global state management
- Lean API calls with Axios
- Fast routing via React Router
- Smooth UI transitions & minimal re-renders
- Tailwind CSS for fast and consistent styling

---

## 🛠️ **Tech Stack**

| Category             | Technologies |
| -------------------- | ------------ |
| **Framework**        | React (Vite) |
| **Routing**          | React Router |
| **State Management** | Zustand      |
| **HTTP Client**      | Axios        |
| **Styling**          | Tailwind CSS |
| **Build Tool**       | Vite         |
| **Deployment**       | Vercel       |

---

## 📁 **Project Structure**

```txt
matchmate-frontend/
├── src/
│   ├── assets/               # Images, icons, design assets
│   ├── components/           # Reusable UI components
│   ├── hooks/                # Custom hooks
│   ├── store/                # Zustand global stores
│   │   ├── useAuthStore.js
│   │   ├── useConnectionStore.js
│   │   ├── useFeedStore.js
│   │   └── usePending.js
│   ├── utils/
│   │   └── constants.js      # API base URLs, helper constants
│   ├── app.css
│   ├── App.jsx               # Application routes
│   └── main.jsx              # Vite entry file
│
├── index.html
├── .env                      # Environment variables
├── vite.config.js
├── vercel.json               # Deployment config
├── eslint.config.js
└── package.json
```
