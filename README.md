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
![License](https://img.shields.io/badge/License-MIT-green)

<br/>

### 🎥 Preview

> Add a GIF here for maximum impact  
> (Example: `src/assets/preview.gif`)

<img src="src/assets/preview.gif" width="700" />

<br/>
</div>
</div>

# ✨ **Features Overview**

- 🔐 Secure Authentication (JWT + HTTP-only cookies)
- 🤝 Connection requests (send, accept, ignore)
- 👤 Profile editing & user info
- ⚡ Zustand-based global state
- 📱 Fully responsive UI
- 🚀 Fast dev experience with Vite
- 💬 Real-time chat (coming soon)
- 🌙 Dark mode (planned)

---

# 📚 **Table of Contents**

- [🔐 Authentication](#authentication)
- [👥 Connection System](#connection-system)
- [👤 User Profile](#user-profile)
- [⚡ Performance](#performance)
- [📸 Screenshots](#screenshots)
- [🌍 Live Demo](#live-demo)
- [⚙️ Getting Started](#getting-started)
- [🧰 Technologies Used](#technologies-used)
- [🧱 Project Structure](#project-structure)
- [🏗️ Architecture](#architecture)
- [🎯 Why I Built This](#why-i-built-this)
- [🧠 What-I-Learned](#what-i-learned)
- [🛠 Roadmap](#roadmap)
- [👨‍💻 Author](#author)
- [📄 License](#license)

---

# 🔐 **Authentication**

- Signup / Login / Logout
- JWT-based authentication
- Secure **HTTP-only cookies**
- Password hashing (via backend)
- Auto-persisted login state

---

# 👥 **Connection System**

- Browse all users
- Send connection requests
- Accept / Ignore requests
- Manage **pending & received** requests
- Smooth realtime-like UI via Zustand

---

# 👤 **User Profile**

- Edit profile
- View user details
- Responsive design
- Reusable components

---

# ⚡ **Performance**

- Optimized global state
- Lean Axios requests
- Fast routing via React Router
- Minimal re-renders
- Tailwind for consistent UI

---

# 📸 **Screenshots**

![Home](src/assets/home.png)
![SignUp](src/assets/signup.png)
![Login](src/assets/login.png)
![Dashboard](src/assets/dashboard.png)
![Feed](src/assets/feed.png)

---

# 🌍 **Live Demo**

👉 https://matchmate-frontend.vercel.app

---

# 🔗 **Backend Repository**

👉 https://github.com/SaikatGharami2001/matchmate-backend

---

# ⚙️ **Getting Started**

Follow these steps to run the project locally.

---

## **1️⃣ Clone the repository**

```bash
git clone https://github.com/SaikatGharami2001/matchmate-frontend.git
cd matchmate-frontend
```

## **2️⃣ Install dependencies**

```bash
npm install
```

## **3️⃣ Configure environment variables**

- Responsive UI

```bash
VITE_BASE_URL=https://your-backend-url.com
```

## **4️⃣ Start development server**

```bash
npm run dev
```

## **5️⃣ Build for production**

- Responsive UI

```bash
npm run build
```

## **🧰 Technologies Used**

| Category         | Tech         |
| ---------------- | ------------ |
| Framework        | React, Vite  |
| State Management | Zustand      |
| Routing          | React Router |
| Networking       | Axios        |
| Styling          | Tailwind CSS |
| Deployment       | Vercel       |

## **🧱 Project Structure**

```bash

matchmate-frontend/
├── src/
│   ├── assets/                     # Images, icons, previews
│   │
│   ├── components/                 # Reusable UI components
│   │   ├── About.jsx
│   │   ├── BackgroundParticles.jsx
│   │   ├── Body.jsx
│   │   ├── ChangePassword.jsx
│   │   ├── Connections.jsx
│   │   ├── Dashboard.jsx
│   │   ├── DropdownPortal.jsx
│   │   ├── EditProfile.jsx
│   │   ├── Feed.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Messages.jsx
│   │   ├── Navbar.jsx
│   │   ├── Profile.jsx
│   │   ├── Requests.jsx
│   │   ├── SignUp.jsx
│   │   └── UserCard.jsx
│   │
│   ├── hooks/                      # Custom React hooks
│   │
│   ├── store/                      # Zustand state stores
│   │   ├── useAuthStore.js
│   │   ├── useConnectionStore.js
│   │   ├── useFeedStore.js
│   │   └── usePending.js
│   │
│   ├── utils/
│   │   └── constants.js            # Base URLs & project constants
│   │
│   ├── app.css
│   ├── App.jsx                     # App + Routes
│   └── main.jsx                    # Vite entry point
│
├── .env                            # Environment variables
├── index.html
├── eslint.config.js
├── vite.config.js
├── vercel.json
├── package.json
└── package-lock.json


```

## **❌ How It Works – Architecture**

```bash

Frontend (React + Zustand + Axios)
    |
    |  HTTP (JWT, Cookies)
    v
Backend (Node.js + Express + MongoDB)
    |
    |  Mongoose Models
    v
Database (MongoDB Atlas)

```

- Frontend handles UI + state
- Backend handles auth, cookies, hashing
- Both communicate via REST APIs

## **🎯 Why I Built This**

MatchMate was built to practice and demonstrate real-world MERN skills:

- Authentication with secure cookies
- Zustand global state architecture
- Component-based UI patterns
- Proper folder structuring
- Working with REST APIs
- Deploying full-stack apps

## **🧠 What I Learned**

- Implementing JWT + HTTP-only cookie auth
- Building scalable Zustand stores
- Writing clean reusable components
- Deploying on Vercel
- Handling API state and errors gracefully

## **🛠 Roadmap**

- Real-time chat (Socket.io)
- Push notifications
- Profile photo upload
- Framer Motion animations
- Infinite scroll

## **👨‍💻 Author**

- Saikat Gharami
  GitHub: https://github.com/SaikatGharami2001
