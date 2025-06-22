import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    identifier: "", // username or email
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/api/admin/login", credentials);
      localStorage.setItem("token", res.data.token);
      navigate("/menu");
    } catch (err) {
      alert("Invalid login. Please check your credentials.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Admin Login
        </h2>
        <input
          type="text"
          name="identifier"
          placeholder="Email or Username"
          value={credentials.identifier}
          onChange={(e) =>
            setCredentials({ ...credentials, identifier: e.target.value })
          }
          className="w-full mb-4 px-4 py-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          className="w-full mb-4 px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
