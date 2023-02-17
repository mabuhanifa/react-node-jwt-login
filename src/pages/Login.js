import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function logUser(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
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
    </div>
  );
}
