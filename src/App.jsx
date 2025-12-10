import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import Home from "./pages/01_Home/Home";
import SignUp from "./pages/02_Signup/SignUp";
import Login from "./pages/03_Login/Login";
import ChangePassword from "./pages/04_ChangePassword/ChangePassword";
import Dashboard from "./pages/05_Dashboard/Dashboard";
import Feed from "./pages/06_Feed/Feed";
import Connections from "./pages/07_Connection/Connections";
import Messages from "./pages/08_Messages/Messages";
import Requests from "./pages/09_Requests/Requests";
import Profile from "./pages/10_Profile/EditProfile";
import Body from "./components/Body";
import About from "./pages/11_About/About";

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
            <Route path="change-password" element={<ChangePassword />} />

            <Route element={user ? <Outlet /> : <Navigate to="/login" />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="feed" element={<Feed />} />
              <Route path="profile/edit" element={<Profile />} />
              <Route path="messages/:targetUserId" element={<Messages />} />
              <Route path="connections" element={<Connections />} />
              <Route path="requests/pending" element={<Requests />} />
            </Route>

            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
