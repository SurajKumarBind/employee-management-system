import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white/10 backdrop-blur-lg shadow-lg sticky top-0 z-50">
      <h2 className="text-2xl font-bold tracking-wide text-white drop-shadow-md">
        🌟 EMS Portal
      </h2>
      <div className="flex justify-between gap-8">
        <ul className="flex gap-8 text-lg font-semibold">
          <li className="hover:text-yellow-400 cursor-pointer transition duration-300">
            <Link to="/">About</Link>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition duration-300">
            <Link to="/login">Login</Link>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition duration-300">
            <Link to="/register">Register</Link>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition duration-300">
            <Link to="/employee-list">Employee List</Link>
          </li>
        </ul>
        <FaUserCircle className="text-3xl text-white hover:text-yellow-400 cursor-pointer transition duration-300" />
      </div>
    </nav>
  );
}

export default Navbar;
