MatchMate – Frontend (React + Vite) 🚀

A modern, fast, and secure frontend for MatchMate, a social networking platform built for managing real human connections.
This UI focuses on clean design, efficient state management, and production-ready architecture.
Future versions will include messaging and real-time features.

🔥 Core Features
🔐 Authentication

Signup / Login / Logout

JWT-based authentication

Secure HTTP-only cookies

Password hashing (via backend)

Persistent login state

👥 Connection System

Browse all users

Send connection requests

Accept / Ignore incoming requests

Manage pending & received requests

Smooth UI state updates using Zustand

👤 User Profile

Edit profile information

View user details

Fully responsive layout

Reusable component design

⚡ Performance

Optimized state management

Lean API calls with Axios

Fast routing via React Router

Minimal re-renders

Tailwind-based UI for consistent styling

🛠️ Tech Stack
Category Technologies
Framework React (Vite)
Routing React Router
State Management Zustand
HTTP Client Axios
Styling Tailwind CSS
Build Tool Vite
Deployment Vercel
📁 Project Structure
matchmate-frontend/
├── src/
│ ├── assets/ # Images, icons, design assets
│ ├── components/ # Reusable UI components
│ ├── hooks/ # Custom hooks
│ ├── store/ # Zustand stores
│ │ ├── useAuthStore.js
│ │ ├── useConnectionStore.js
│ │ ├── useFeedStore.js
│ │ └── usePending.js
│ ├── utils/
│ │ └── constants.js # API base URLs, helper constants
│ ├── app.css
│ ├── App.jsx # Application routes
│ └── main.jsx # Vite entry file
│
├── index.html
├── .env # Environment variables
├── vite.config.js
├── vercel.json # Deployment config
├── eslint.config.js
└── package.json

🔗 Live Demo

👉 https://matchmate-frontend.vercel.app

📸 Screenshots

Add preview images in src/assets/screenshots/:

![Home Page](src/assets/screenshots/home.png)
![Profile Page](src/assets/screenshots/profile.png)
![Requests Page](src/assets/screenshots/requests.png)

⚙️ Installation & Setup

1. Clone repository
   git clone https://github.com/yourusername/matchmate-frontend.git
   cd matchmate-frontend

2. Install dependencies
   npm install

3. Create environment file

.env

VITE_BASE_URL=https://your-backend-url.com

4. Start dev server
   npm run dev

5. Build for production
   npm run build

🧠 Architecture Notes

Modular Zustand stores → auth, connection, feed, pending

Component-driven UI → scalable structure

Axios prepared for interceptors → token refresh + error handling

Utilities extracted for clean constants

Vite ensures fast dev & optimized builds

Future-ready for messaging + real-time systems

🔮 Future Enhancements

Real-time chat (Socket.io / WebSockets)

Push notifications

Profile photo upload

Dark mode

Micro-interactions from Framer Motion

Infinite scroll for feed

📄 License

MIT License
