import React, { FC } from "react";
import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="flex items-center justify-between px-5 py-12 lg:p-16 ">
      <Link to="/" className="w-auto h-auto">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="bg-very-dark-blue/10 w-screen h-screen lg:bg-transparent lg:w-auto lg:h-auto hidden">
      <nav className="space-x-10 text-dark-blue font-medium">
        <Link to="/" className="hover:text-dark-grayish-blue transition-all duration-300 ease-in-out">Pricing</Link>
        <Link to="/" className="hover:text-dark-grayish-blue transition-all duration-300 ease-in-out">Product</Link>
        <Link to="/" className="hover:text-dark-grayish-blue transition-all duration-300 ease-in-out">About Us</Link>
        <Link to="/" className="hover:text-dark-grayish-blue transition-all duration-300 ease-in-out">Careers</Link>
        <Link to="/" className="hover:text-dark-grayish-blue transition-all duration-300 ease-in-out">Community</Link>
      </nav> </div>
      <Link to="/" className="button-primary hidden lg:block">Get Started</Link>
    </header>
  );
};

export default Header;
