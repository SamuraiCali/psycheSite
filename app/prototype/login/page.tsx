"use client";
import React, { useState } from "react";
import { useUser } from "@/lib/UserContext";
import { useRouter } from "next/navigation"; // Move this inside the component

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUser(); // Assuming login is part of your context
  const router = useRouter(); // Now inside the component

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      login({ name: username, email: `${username}@example.com` });
      router.push("/home"); // Redirect to home or wherever after login
    } else {
      alert("Please enter both a username and password.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
