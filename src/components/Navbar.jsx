import React, { useState } from "react";
import Logo from "./Logo";
import { navlinks } from "../constants";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import LoginButton from "./LoginButton";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const showMobileMenu = () => {
    setNav(!nav);
  };
  return (
    <header className="w-full sticky top-0 bg-white z-10 shadow-sm">
      <nav className="transition-all delay-700 ease-in-out relative h-16 flex justify-between items-center w-11/12 m-auto">
        <div className="flex items-center gap-10 ">
          <Logo />
          <ul className=" flex items-center max-md:hidden">
            {navlinks.map((navlink, index) => (
              <NavLink key={index} to={navlink.ref}>
                <li
                  key={navlink.text}
                  className="px-3 text-grayish-violet font-semibold hover:text-darker-violet/95 "
                >
                  {navlink.text}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
        {/* Actions routing to login and sign up pages */}
        <div className=" flex items-center gap-3 max-md:hidden ">
          <LoginButton/>
          <div>
            <button className="text-md  bg-cyan rounded-md px-3 h-10 w-full">
              Sign up
            </button>
          </div>
        </div>

        {/* hamburger menu ..... */}
        <div className="md:hidden">
          <div onClick={showMobileMenu}>
            {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
          </div>

          {/* mobile menu..... */}
          <div
            onClick={showMobileMenu}
            className={
              nav
                ? "absolute top-[4rem] flex-col left-0 w-full bg-cyan grid place-items-center text-center rounded-lg p-4 z-10 ease-linear transition delay-75 duration-500"
                : "top-10 left-0 absolute hidden ease-in-out transition duration-300"
            }
          >
            <ul className=" w-full ">
              {navlinks.map((navlink, index) => (
                <NavLink key={index} to={navlink.ref}>
                  <li key={navlink.text} className=" p-3 font-semibold text-lg">
                    {navlink.text}
                  </li>
                </NavLink>
              ))}
            </ul>
            <div className="divider w-full"></div>
            <div>
              <button className="text-md my-3 ">Login</button>
              <div>
                <button className="w-[200px] rounded p-2">Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
