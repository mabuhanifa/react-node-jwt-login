import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="p-10 ">
      <h2>
        Go to <Link to={"/login"}>Login Page</Link>
      </h2>
      <h2>
        Go to Register <Link to={"/register"}>Register Page</Link>
      </h2>
    </div>
  );
}
