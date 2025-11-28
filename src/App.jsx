import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import Home from "./components/Home";
import Body from "./components/Body";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ChangePassword from "./components/ChangePassword";
import Dashboard from "./components/Dashboard";
import Feed from "./components/Feed";
import Messages from "./components/Messages";
import Profile from "./components/Profile";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import About from "./components/About";

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
            <Route path="changePassword" element={<ChangePassword />} />

            <Route element={user ? <Outlet /> : <Navigate to="/login" />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="feed" element={<Feed />} />
              <Route path="profile/edit" element={<Profile />} />
              <Route path="messages/:targetUserId" element={<Messages />} />
              <Route path="connections" element={<Connections />} />
              <Route path="/requests/pending" element={<Requests />} />
            </Route>

            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
