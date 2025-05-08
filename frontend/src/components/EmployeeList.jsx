import { useEffect, useState } from "react";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [editing, setEditing] = useState(null);
  const [updatedEmployee, setUpdatedEmployee] = useState({
    name: "",
    age: "",
    email: "",
  });

  const fetchEmployees = async () => {
    const res = await fetch("http://localhost:8080/employees");
    const data = await res.json();
    setEmployees(data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const deleteEmployee = async (id) => {
    await fetch(`http://localhost:8080/employees/${id}`, { method: "DELETE" });
    fetchEmployees();
  };

  const startEdit = (emp) => {
    setEditing(emp.id);
    setUpdatedEmployee({ name: emp.name, age: emp.age, email: emp.email });
  };

  const saveEdit = async (id) => {
    await fetch(`http://localhost:8080/employees/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedEmployee),
    });
    setEditing(null);
    fetchEmployees();
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Employee List</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td className="border p-2">{emp.id}</td>
              {editing === emp.id ? (
                <>
                  <td className="border p-2">
                    <input
                      value={updatedEmployee.name}
                      onChange={(e) =>
                        setUpdatedEmployee({
                          ...updatedEmployee,
                          name: e.target.value,
                        })
                      }
                      className="border p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      value={updatedEmployee.age}
                      onChange={(e) =>
                        setUpdatedEmployee({
                          ...updatedEmployee,
                          age: e.target.value,
                        })
                      }
                      className="border p-1"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      value={updatedEmployee.email}
                      onChange={(e) =>
                        setUpdatedEmployee({
                          ...updatedEmployee,
                          email: e.target.value,
                        })
                      }
                      className="border p-1"
                    />
                  </td>
                </>
              ) : (
                <>
                  <td className="border p-2">{emp.name}</td>
                  <td className="border p-2">{emp.age}</td>
                  <td className="border p-2">{emp.email}</td>
                </>
              )}
              <td className="border p-2 flex gap-2">
                {editing === emp.id ? (
                  <button
                    onClick={() => saveEdit(emp.id)}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => startEdit(emp)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => deleteEmployee(emp.id)}
                  className="bg-red-600 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
