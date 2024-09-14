import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  error?: string;
  register: UseFormRegisterReturn;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  error,
  register,
}) => {
  return (
    <div className="form-control w-full mt-4">
      <label className="label">
        <span className="label-text text-base-content">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`input input-bordered w-full ${error ? "input-error" : ""}`}
        {...register}
      />

      {error && <p className="flex text-error mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
