import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const UserProfile = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchUser = async () => {
      const response = await fetch("http://localhost:5000/api/auth/getuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      });

      const data = await response.json();
      setUser({ name: data.name, email: data.email });
    };

    fetchUser();
  }, []);

  return (
    <div className="container my-5" style={{ maxWidth: "500px" }}>
      <div className="card shadow-sm">
        <div className="card-body text-center">
          <FaUserCircle size={80} color="#007bff" />
          <h3 className="card-title mt-3">{user.name || "User Name"}</h3>
          <p className="text-muted">{user.email || "user@example.com"}</p>
          <hr />
          <h5>Account details</h5>
          <ul className="list-group list-group-flush text-start">
            <li className="list-group-item">
              <p>
                <strong>Name:</strong> {user.name}
              </p>
            </li>
            <li className="list-group-item">
              <p>
                <strong>Email:</strong> {user.email}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
