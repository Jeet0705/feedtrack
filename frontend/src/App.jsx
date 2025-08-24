import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Feedback from "./pages/Feedback";
// import About from "./pages/About";
// import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/feedback"
            element={
              <ProtectedRoute>
                <Feedback />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
