import React from "react";
import { Link } from "react-router-dom";

import { useUser } from "@/contexts/UserContext";

const Header: React.FC = React.memo(() => {
  // console.log({
  //   mode: import.meta.env.MODE,
  //   baseUrl: import.meta.env.BASE_URL,
  //   isProd: import.meta.env.PROD,
  //   isDev: import.meta.env.DEV,
  // });

  const { user, logout } = useUser();

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    logout();
  };
  console.log('user: ', user)

  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-100 shadow-md">
      <div className="flex items-center mb-4 md:mb-0">
        <Link to="/">
          <img className="w-24 h-24" src="logo.svg" alt="Logo" />
        </Link>
      </div>
      <nav className="flex items-center flex-col md:flex-row gap-4">
        {user ? (
          <>
            <span className="text-lg font-semibold">Hello {user.first_name}</span>
            <Link to="/" className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300">
              Home
            </Link>
            <Link to="/share" className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition-colors duration-300">
              Share
            </Link>
            <Link to="/logout" onClick={handleLogout} className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition-colors duration-300">
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300">
              Login
            </Link>
            <Link to="/register" className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition-colors duration-300">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
});

export default Header;
