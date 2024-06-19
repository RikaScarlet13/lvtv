import React from "react";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const { logout, user } = useAuth();

  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      <p>Welcome, {user?.name}</p>
      <button onClick={logout}>Logout</button>
      {/* Authenticated home page content */}
    </div>
  );
};

export default HomePage;
