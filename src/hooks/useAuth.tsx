import axios from "axios";
import { useState } from "react";
import { LoginFormData } from "../components/types";

interface UseAuthReturn {
  login: (data: LoginFormData) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}

export const useAuth = (): UseAuthReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (data: LoginFormData) => {
    setIsLoading(true);
    setError(null);
    try {
      // Replace with your actual login API endpoint
      const response = await axios.post("/api/login", data);

      // Handle success (e.g., save token, redirect, etc.)
      console.log("Login successful:", response.data);

      // localStorage.setItem("token", response.data.token);
    } catch (err) {
      // Handle error
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message || "An error occurred during login");
      } else {
        setError("An error occurred during login");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    // Replace with your actual logout logic
    localStorage.removeItem("token");
  };

  return { login, logout, isLoading, error };
};
