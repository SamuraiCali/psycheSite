"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/lib/UserContext";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const { login } = useUser();
  const router = useRouter();

  const handleLogin = () => {
    if (email) {
      login({ email, name: "Default Name" });
      router.push("/user");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-2 mb-4 border rounded"
        />
        <Button onClick={handleLogin} className="w-full text-black">
          Login
        </Button>
      </div>
    </div>
  );
}
