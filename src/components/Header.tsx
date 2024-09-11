import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = React.memo(() => {
  console.log({
    mode: import.meta.env.MODE,
    baseUrl: import.meta.env.BASE_URL,
    isProd: import.meta.env.PROD,
    isDev: import.meta.env.DEV,
  });

  return (
    <>
      <img className="w-24 h-24" src="logo.svg" />
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/share">Share</Link>
    </>
  );
});

export default Header;
