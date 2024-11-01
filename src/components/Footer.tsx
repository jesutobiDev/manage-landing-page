import React, { FC } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/footer-logo.svg";
import facebook from "../images/icon-facebook.svg";
import youtube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";

const Footer: FC = () => {
  return (
    <footer className="px-10 lg:px-16 flex flex-col-reverse gap-y-10 lg:gap-0 lg:flex-row justify-between py-16 bg-very-dark-blue h-auto">
      <div className="items-center lg:justify-between flex flex-col-reverse lg:flex-col gap-10">
      <p className="text-white opacity-60 font-light text-right lg:hidden">
          Copyright 2020. All Rights Reserved
        </p>
        <Link to="/" className="w-fit h-fit">
          <img src={Logo} alt="logo" className="" />
        </Link>

        <div className="flex items-center justify-between lg:justify-start lg:gap-3 w-full">
          <Link to="/">
            <img src={facebook} alt="facebook-link" className="w-8 h-8 lg:w-6 lg:h-6" />
          </Link>
          <Link to="/">
            <img src={youtube} alt="facebook-link" className="w-8 h-8 lg:w-6 lg:h-6" />
          </Link>
          <Link to="/">
            <img src={twitter} alt="facebook-link" className="w-8 h-8 lg:w-6 lg:h-6" />
          </Link>
          <Link to="/">
            <img src={pinterest} alt="facebook-link" className="w-8 h-8 lg:w-6 lg:h-6" />
          </Link>
          <Link to="/">
            <img src={instagram} alt="facebook-link" className="w-8 h-8 lg:w-6 lg:h-6" />
          </Link>
        </div>
      </div>
      <div className="flex lg:justify-between gap-24 px-5 lg:gap-40">
        <div className="space-y-3 flex flex-col text-white">
          <Link to="">Home</Link>
          <Link to="">Pricing</Link>
          <Link to="">Products</Link>
          <Link to="">About Us</Link>
        </div>
        <div className="space-y-3 flex flex-col text-white">
          <Link to="">Careers</Link>
          <Link to="">Community</Link>
          <Link to="">Privacy Policy</Link>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <form action="" className="flex gap-3 lg:w-[350px]">
          <input
            type="email"
            name="email"
            id="email"
            className="rounded-full input flex-1"
            placeholder="Updates in your inbox..."
          />
          <button type="submit" className="bg-bright-red text-white rounded-full px-7 py-[10px] font-medium w-fit h-fit">
            Go
          </button>
        </form>
        <p className="text-white opacity-60 font-light text-right hidden lg:block">
          Copyright 2020. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
