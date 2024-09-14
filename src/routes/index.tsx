import { RouteObject } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import SharePage from "@/pages/SharePage";
import RegisterPage from "@/pages/RegisterPage";

export const routers: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
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
    element: <SharePage />,
  },
  {
    path: "*",
    element: <></>,
  },
];
