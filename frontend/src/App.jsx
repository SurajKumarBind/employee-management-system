import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1a1a40] via-[#1f1f5e] to-[#282871] text-white">
      {/* Navbar hamesha dikhega */}
      <Navbar />

      {/* Hamesha center me dikhne wala EmployeeForm (Hero style) */}
      <EmployeeForm />

      {/* Popup ya modal ke liye future routes */}
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </div>
  );
}

export default App;
