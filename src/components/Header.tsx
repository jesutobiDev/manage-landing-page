import { FC, useState, useEffect } from "react";
import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import close_icon from "../images/icon-close.svg";
import menu_icon from "../images/icon-hamburger.svg";

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Add/remove class to body to disable/enable scrolling
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <header className="flex items-center justify-between px-5 py-12 lg:p-16">
      <div className="flex items-center justify-between w-screen lg:w-auto">
        <Link to="/" className={`${menuOpen ? 'hidden' : 'flex'}`}>
          <img src={Logo} alt="logo" />
        </Link>
        <img
          src={menu_icon}
          alt="menu_icon"
          className={`w-6 cursor-pointer lg:hidden ${menuOpen ? 'hidden' : 'flex'}`}
          onClick={toggleMenu}
        />
      </div>
      <div
        className={`bg-very-dark-blue/10 lg:bg-transparent w-screen h-screen lg:w-auto lg:h-auto absolute top-0 left-0 lg:static py-12 px-5 lg:py-0 lg:px-0 space-y-10 lg:space-y-0 menu ${
          menuOpen ? "menu-visible" : "menu-hidden"
        }`}
      >
        <div className="lg:hidden flex items-center justify-between">
          <Link to="/" className="">
            <img src={Logo} alt="logo" />
          </Link>
          <img
            src={close_icon}
            alt="close_icon"
            className="w-6 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <nav className="lg:space-x-10 text-dark-blue font-medium lg:bg-transparent p-8 lg:p-0 flex flex-col items-center space-y-7 rounded-lg lg:space-y-0 lg:flex-row bg-white">
          <Link
            to="/"
            className="hover:text-dark-grayish-blue transition-all duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Pricing
          </Link>
          <Link
            to="/"
            className="hover:text-dark-grayish-blue transition-all duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Product
          </Link>
          <Link
            to="/"
            className="hover:text-dark-grayish-blue transition-all duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            to="/"
            className="hover:text-dark-grayish-blue transition-all duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Careers
          </Link>
          <Link
            to="/"
            className="hover:text-dark-grayish-blue transition-all duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Community
          </Link>
        </nav>
      </div>
      <Link to="/" className="button-primary hidden lg:block">
        Get Started
      </Link>
    </header>
  );
};

export default Header;
