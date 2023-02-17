import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      const user = token;
      if (!user) {
        localStorage.removeItem("userToken");
        navigate("/login");
      }
    }
  }, [navigate]);
  return <div>Dashboard</div>;
}
