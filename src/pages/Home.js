import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="p-10">
      <h2>
        go to Login <Link to={"/login"}>Login</Link>
      </h2>
      <h2>
        go to Register <Link to={"/register"}>Register</Link>
      </h2>
    </div>
  );
}
