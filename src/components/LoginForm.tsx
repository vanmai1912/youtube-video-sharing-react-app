import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { useUser } from "@/contexts/UserContext";
import { useLogin } from "@/hooks/useLogin";
import InputField from "./InputField";
import { LoginFormData, loginSchema } from "./types";

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { login, isLoading, error: apiError } = useLogin();
  const { login: loginAction } = useUser();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormData) => {
    // Handle form submission
    const loginData = await login(data);
    if (loginData) {
      loginAction(loginData);
      navigate("/");
    }
  };

  return (
    <div className="py-24 px-10">
      <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
            register={register("email")}
            error={errors.email?.message}
          />

          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            register={register("password")}
            error={errors.password?.message}
          />
        </div>

        <div className="text-right text-primary">
          <div>
            {apiError && (
              <p className="flex text-error text-bold mt-1">{apiError}</p>
            )}
          </div>
          <Link to="/forgot-password">
            <span className="text-sm inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
              Forgot Password?
            </span>
          </Link>
        </div>

        <button
          type="submit"
          className="btn mt-2 w-full btn-primary"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : (
            <span>Login</span>
          )}
        </button>

        <div className="text-center mt-4">
          Don't have an account yet?
          <Link to="/register">
            <span className="inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
              Register
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
