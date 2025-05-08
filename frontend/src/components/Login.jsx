import React from "react";

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen text-white">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form className="space-y-4">
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
          <button className="bg-green-600 px-4 py-2 rounded text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
