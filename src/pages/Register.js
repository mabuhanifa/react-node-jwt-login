import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    console.log(data);
  }
  return (
    <div className="p-10">
      <h1 className="text-xl font-bold my-10">Register</h1>
      <div>
        <form onSubmit={registerUser}>
          <input
            className="my-3 py-2 px-5 rounded-sm bg-gray-300"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
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
            value="Register"
            className="bg-indigo-700 px-10 py-3 text-white font-bold rounded-sm"
          />
        </form>
      </div>
      <h2 className="mt-10 text-blue-600">
        Go to <Link to={"/login"}>Login Page</Link>
      </h2>
    </div>
  );
}
