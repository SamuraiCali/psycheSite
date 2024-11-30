"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type User = {
  email: string;
  name: string;
} | null;

type TestResult = {
  testId: string;
  score: number;
  date: string;
};

type UserContextType = {
  user: User;
  testResults: TestResult[];
  login: (user: User) => void;
  logout: () => void;
  addTestResult: (result: TestResult) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const [testResults, setTestResults] = useState<TestResult[]>([]);

  const login = (user: User) => setUser(user);
  const logout = () => {
    setUser(null);
    setTestResults([]); // Clear test results on logout
  };

  const addTestResult = (result: TestResult) => {
    setTestResults((prev) => [...prev, result]);
  };

  return (
    <UserContext.Provider
      value={{ user, testResults, login, logout, addTestResult }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
