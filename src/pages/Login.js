import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function logUser(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.user) {
      localStorage.setItem("userToken", data.user);
    }
    if (data.user) {
      alert("Login successfully");
      navigate("/dashboard");
    } else {
      alert("Please check your email and password");
    }
    console.log(data);
  }
  return (
    <div className="p-10">
      <h1 className="text-xl font-bold my-10">Login</h1>
      <div>
        <form onSubmit={logUser}>
          <input
            className="my-3 py-2 px-5 rounded-sm bg-gray-300"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            className="my-3 py-2 px-5 rounded-sm bg-gray-300"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            type="submit"
            value="Login"
            className="bg-indigo-700 px-10 py-3 text-white font-bold rounded-sm"
          />
        </form>
      </div>
      <h2 className="mt-10 text-blue-600">
        Go to <Link to={"/register"}>Register Page</Link>
      </h2>
    </div>
  );
}
