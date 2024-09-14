import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { useRegister } from "@/hooks/useRegister";
import InputField from "./InputField";
import { RegisterFormData, registerSchema } from "./types";

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const { register: registerApi, isLoading, error: apiError } = useRegister();
  const navigate = useNavigate();

  const onSubmit = async (data: RegisterFormData) => {
    // Handle form submission
    const registerResponse = await registerApi(data);
    if (registerResponse) {
      navigate("/login");
    }
  };

  return (
    <div className="py-24 px-10">
      <h2 className="text-2xl font-semibold mb-2 text-center">Register</h2>
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
            label="First name"
            type="text"
            placeholder="Enter your first name"
            register={register("first_name")}
            error={errors.first_name?.message}
          />

          <InputField
            label="Last name"
            type="text"
            placeholder="Enter your last name"
            register={register("last_name")}
            error={errors.last_name?.message}
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
            <span>Register</span>
          )}
        </button>

        <div className="text-center mt-4">
          <span>You already have an account?</span>
          <Link to="/login">
            <span className="inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
              Login
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
