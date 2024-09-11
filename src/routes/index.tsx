import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import SharePage from "@/pages/SharePage";

export const routers = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/share",
    element: <SharePage />,
  },
  {
    path: "*",
    exact: false,
    element: <></>,
  },
];
