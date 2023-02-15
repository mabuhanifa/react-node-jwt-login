import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="p-10">
      <h1 className="text-xl font-bold my-10">Register</h1>
      <div>
        <form>
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
    </div>
  );
}

export default App;
