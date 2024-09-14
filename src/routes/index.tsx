import { RouteObject } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import SharePage from "@/pages/SharePage";
import RegisterPage from "@/pages/RegisterPage";
import PrivateRoute from "@/components/PrivateRoute";

export const routers: RouteObject[] = [
  {
    path: "/",
    element: (
      <PrivateRoute>
        <HomePage />
      </PrivateRoute>
    ), 
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/share",
    element: (
      <PrivateRoute>
        <SharePage />
      </PrivateRoute>
    ),  
  },
  {
    path: "*",
    element: <></>,
  },
];
