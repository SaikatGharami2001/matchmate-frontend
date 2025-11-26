import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Home from "./components/Home";
import Body from "./components/Body";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Feed from "./components/Feed";
import Messages from "./components/Messages";
import Profile from "./components/Profile";
import About from "./components/About";

import { Navigate } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";

function App() {
  const user = useAuthStore((state) => state.user);
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />

            <Route element={user ? <Outlet /> : <Navigate to="/login" />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="feed" element={<Feed />} />
              <Route path="profile/edit" element={<Profile />} />
              <Route path="messages" element={<Messages />} />
            </Route>

            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
