import LoginForm from "@/components/LoginForm";
import React from "react";

const LoginPage: React.FC = () => {
  return (
    <div className="w-full sm:w-2/3 md:1/2 sm:mx-auto">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
