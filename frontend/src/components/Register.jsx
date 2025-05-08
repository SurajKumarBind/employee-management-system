import React from "react";

function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen text-white">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded"
          />
          <button className="bg-blue-600 px-4 py-2 rounded text-white">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
