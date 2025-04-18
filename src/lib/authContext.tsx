"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "./axiosInstance";
import { useRouter } from "next/navigation";

// Define user types
export type UserRole = "user" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (
    name: string,
    email: string,
    mobileNo: string,
    password: string
  ) => Promise<boolean>;
  logout: () => void;
  checkAuth: () => Promise<boolean>;
  isAdmin: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Check if the user is already logged in
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    setIsLoading(true);
    try {
      // In a real app, we'd make an API call to validate the token
      const token = localStorage.getItem("authToken");
      if (!token) {
        setUser(null);
        setIsLoading(false);
        return false;
      }

      // For demo purposes, we'll use a mock user
      // In a real application, this would be an API call to validate the token
      // const res = await axios.get("/api/auth/me");
      // setUser(res.data.user);

      // Mock user data - this would come from your backend API
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setIsLoading(false);
        return true;
      }

      setUser(null);
      setIsLoading(false);
      return false;
    } catch (error) {
      console.error("Auth check error:", error);
      setUser(null);
      setIsLoading(false);
      return false;
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // In a real app, this would be an actual API call
      // const res = await axios.post("/api/auth/login", { identifier: email, password });
      // setUser(res.data.user);
      // localStorage.setItem("authToken", res.data.token);

      // Mock login logic for demo purposes
      // In a real application, remove this and use the actual API call
      if (email === "admin@example.com" && password === "admin123") {
        const adminUser = {
          id: "1",
          name: "Admin User",
          email: "admin@example.com",
          role: "admin" as UserRole,
        };
        setUser(adminUser);
        localStorage.setItem("authToken", "mock-jwt-token-admin");
        localStorage.setItem("user", JSON.stringify(adminUser));
        setIsLoading(false);
        return true;
      } else if (email === "user@example.com" && password === "user123") {
        const regularUser = {
          id: "2",
          name: "Regular User",
          email: "user@example.com",
          role: "user" as UserRole,
        };
        setUser(regularUser);
        localStorage.setItem("authToken", "mock-jwt-token-user");
        localStorage.setItem("user", JSON.stringify(regularUser));
        setIsLoading(false);
        return true;
      } else {
        setIsLoading(false);
        return false;
      }
    } catch (error) {
      console.error("Login error:", error);
      setIsLoading(false);
      return false;
    }
  };

  const signup = async (
    name: string,
    email: string,
    mobileNo: string,
    password: string
  ): Promise<boolean> => {
    setIsLoading(true);
    try {
      // In a real app, this would be an actual API call
      // const res = await axios.post("/api/auth/register", { name, email, mobileNo, password });
      // setUser(res.data.user);
      // localStorage.setItem("authToken", res.data.token);

      // Mock signup logic for demo purposes
      const newUser = {
        id: Math.random().toString(36).substring(2, 9),
        name,
        email,
        role: "user" as UserRole,
      };
      setUser(newUser);
      localStorage.setItem("authToken", "mock-jwt-token-" + newUser.id);
      localStorage.setItem("user", JSON.stringify(newUser));
      setIsLoading(false);
      return true;
    } catch (error) {
      console.error("Signup error:", error);
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setUser(null);
    router.push("/");
  };

  const isAdmin = () => {
    return user?.role === "admin";
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        signup,
        logout,
        checkAuth,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
