import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1 className="text-blue-500">Register</h1>
      <div>
        <form></form>
      </div>
    </div>
  );
}

export default App;
