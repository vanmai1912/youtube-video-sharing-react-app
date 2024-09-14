import { BASE_URL } from "@/utils/request";
import axios from "axios";
import { useState } from "react";

import { RegisterResponse } from "@/utils/types";
import { RegisterFormData } from "../components/types";

interface RegisterReturn {
  register: (data: RegisterFormData) => Promise<null | RegisterResponse>;
  isLoading: boolean;
  error: string | null;
}

export const useRegister = (): RegisterReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (data: RegisterFormData) => {
    setIsLoading(true);
    setError(null);
    try {
      // Replace with your actual login API endpoint
      const response = await axios.post(BASE_URL + "/auth/register", data);
      if (response.data.status === "ok") {
        // Handle success (e.g., save token, redirect, etc.)
        console.log("Register successful:", response.data);
        return response.data;
      }
      return null;
    } catch (err) {
      console.log(err);
      // Handle error
      if (axios.isAxiosError(err) && err.response) {
        setError(
          err.response.data.error || "An error occurred during register"
        );
      } else {
        setError("An error occurred during register");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { register, isLoading, error };
};
