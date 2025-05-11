import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default AllRoutes;
