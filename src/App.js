import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default App;
