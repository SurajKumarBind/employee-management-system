import React from "react";

function Profile() {
  // Dummy user details (aap API se replace kar sakte hain)
  const user = {
    name: "Suraj Kumar Bind",
    email: "skbindpurwa@gmail.com",
    role: "Admin",
  };

  return (
    <div className="text-center text-white mt-10">
      <h2 className="text-3xl font-bold mb-4">User Profile</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Role:</strong> {user.role}
      </p>
    </div>
  );
}

export default Profile;
