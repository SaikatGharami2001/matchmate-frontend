import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Body = () => {
  return (
    <h1>
      <Navbar />
      <Outlet />
      <Footer />
    </h1>
  );
};

export default Body;
