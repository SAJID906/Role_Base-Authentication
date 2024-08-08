import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import Project from "./pages/Project";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { Toaster } from "react-hot-toast";
import Admin from "./pages/Admin";
import AdminLayout from "./Layout/AdminLayout";
import UserLayout from "./Layout/UserLayout";
import PublicLayout from "./Layout/PublicLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Header />
        {/* UserLayout  */}
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="career" element={<Career />} />l
            <Route path="project" element={<Project />} />
          </Route>
          <Route path="/" element={<PublicLayout />}>
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
