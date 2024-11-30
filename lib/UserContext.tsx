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

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [testResults, setTestResults] = useState<TestResult[]>([]);

  const login = (user: User) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
    setTestResults([]);
  };

  const addTestResult = (result: TestResult) => {
    setTestResults((prevResults) => [...prevResults, result]);
  };

  return (
    <UserContext.Provider
      value={{ user, testResults, login, logout, addTestResult }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
