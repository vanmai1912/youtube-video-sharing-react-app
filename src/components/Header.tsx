import React from "react";
import { Link } from "react-router-dom";

import { useUser } from "@/contexts/UserContext";

const Header: React.FC = React.memo(() => {
  console.log({
    mode: import.meta.env.MODE,
    baseUrl: import.meta.env.BASE_URL,
    isProd: import.meta.env.PROD,
    isDev: import.meta.env.DEV,
  });

  const { user, logout } = useUser();

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    logout();
  };

  return (
    <header className="flex flex-row justify-between items-center">
      <div>
        <Link to="/">
          <img className="w-24 h-24" src="logo.svg" />
        </Link>
      </div>
      <div className="gap-4 flex p-2">
        {user ? (
          <>
            <span>Hello {user.email}</span>
            <Link to="/">Home</Link>
            <Link to="/share">Share</Link>
            <Link to="/logout" onClick={handleLogout}>
              Logout
            </Link>
          </>
        ) : (
          <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </header>
  );
});

export default Header;
