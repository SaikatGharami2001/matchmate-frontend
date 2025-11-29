🚀 Core Features
🔐 Authentication

Signup, Login, Logout

JWT-based authentication

Secure HTTP-only cookies

Password hashing (backend integration)

👥 Connection System

Browse users

Send connection requests

Accept or ignore requests

Manage pending & received requests

👤 Profile

Edit profile information

View basic user info

Responsive layout for all screens

💨 Performance

Optimized state management

API calls with Axios + lean responses

Smooth transitions & minimal rerenders

🛠️ Tech Stack
Category Technologies
Framework React (Vite)
Routing React Router
State Management Zustand
HTTP Client Axios
Styling Tailwind CSS
Env & Build Vite
📁 Project Structure

This section matches your exact repo:

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
│ │ └── constants.js # Config, base URLs, helper constants
│ ├── app.css
│ ├── App.jsx # App component + routes
│ └── main.jsx # Vite entry file
│
├── index.html
├── .env # Environment variables
├── vite.config.js
├── vercel.json # Deployment config
├── eslint.config.js
└── package.json

Clear, professional — recruiters love this section.

🔗 Live Demo

Add your Vercel link here once deployed:
https://matchmate-frontend.vercel.app

📸 Screenshots

Place your screenshots in src/assets/screenshots/ and add them here:

![Home Page](src/assets/screenshots/home.png)
![Profile Page](src/assets/screenshots/profile.png)
![Requests Page](src/assets/screenshots/requests.png)

⚙️ Installation & Setup

1. Clone Repository
   git clone https://github.com/yourusername/matchmate-frontend.git
   cd matchmate-frontend

2. Install Dependencies
   npm install

3. Add Environment Variables

Create .env:

VITE_BASE_URL=https://your-backend-url.com

4. Run Development Server
   npm run dev

5. Build for Production
   npm run build

🧠 Architecture Design Notes

Zustand-based store separation for Auth, Feed, Pending, and Connections → clean logic & maintainability

Isolated utils for better reuse

Component-first structure ensures scalable UI growth

API integration via Axios with interceptors (if added later)

Future-ready structure for messaging module + real-time updates

This section shows you think like a real developer.

🔮 Future Enhancements

Real-time chat (WebSockets / Socket.io)

Push notifications

Profile photo upload

Dark mode

UI transitions & micro-interactions

📄 License

MIT License
