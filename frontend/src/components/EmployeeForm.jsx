import React, { useState } from "react";

function EmployeeForm() {
  const [employee, setEmployee] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8080/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
    });
    alert("🎉 Employee Added Successfully!");
    setEmployee({ name: "", age: "", email: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-800 text-white p-6 relative">
      {/* Hero Section */}
      <h1 className="text-4xl font-bold mb-4">🧑‍💼 Employee Management Portal</h1>
      <p className="mb-6">Add New Employee Below 👇</p>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-black"
      >
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChange}
          placeholder="👤 Full Name"
          className="p-4 border-2 border-purple-500 rounded-2xl w-full mb-4"
          required
        />
        <input
          type="number"
          name="age"
          value={employee.age}
          onChange={handleChange}
          placeholder="🎂 Age"
          className="p-4 border-2 border-purple-500 rounded-2xl w-full mb-4"
          required
        />
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
          placeholder="📧 Email Address"
          className="p-4 border-2 border-purple-500 rounded-2xl w-full mb-4"
          required
        />

        <button
          type="submit"
          className="py-3 bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-2xl w-full"
        >
          ➕ Add Employee
        </button>
      </form>
    </div>
  );
}

export default EmployeeForm;
