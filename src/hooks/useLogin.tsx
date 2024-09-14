import { BASE_URL } from "@/utils/request";
import axios from "axios";
import { useState } from "react";

import { LoginResponse } from "@/utils/types";
import { LoginFormData } from "../components/types";

interface UserLoginReturn {
  login: (data: LoginFormData) => Promise<null | LoginResponse>;
  isLoading: boolean;
  error: string | null;
}

export const useLogin = (): UserLoginReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (data: LoginFormData) => {
    setIsLoading(true);
    setError(null);
    try {
      // Replace with your actual login API endpoint
      const response = await axios.post(BASE_URL + "/auth/login", data);
      if (response.data.status === "ok") {
        // Handle success (e.g., save token, redirect, etc.)
        console.log("Login successful:", response.data);
        return response.data.data;
      }
      return null;
    } catch (err) {
      console.log(err);
      // Handle error
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.error || "An error occurred during login");
      } else {
        setError("An error occurred during login");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
