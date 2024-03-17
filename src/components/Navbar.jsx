import { React, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../assets/images/logo1.jpeg";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="relative mb-[8%] z-50">
      <div className="h-24 w-100 bg-white fixed top-0 left-0 right-0">
        <div className="h-24 max-w-[1240px] mx-auto p-4 bg-white flex items-center justify-between">
          <Link to={"/"} className="nav__logo m-4">
            <img
              src={logo}
              className="img-fluid block h-10 w-25"
              alt="adom adventure zone"
            />
          </Link>
          <ul className="hidden md:flex">
            <li className="p-4 nav__link">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="p-4 nav__link">
              <NavLink to={"/about"}>About Us</NavLink>
            </li>
            <li className="p-4 nav__link">
              <NavLink to={"/services"}>Services</NavLink>
            </li>
            <li className="p-4 nav__link">
              <NavLink to={"/events"}> Events </NavLink>
            </li>
            <li className="p-4 nav__link">
              <NavLink to={"/library"}>Library Catalog</NavLink>
            </li>
            <li className="p-4 nav__link">
              <NavLink to={"/media"}> Media </NavLink>
            </li>
          </ul>
          <div onClick={handleNav} className="block md:hidden">
            {!nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
          </div>
          <div
            className={
              nav
                ? "bg-[#1b1b1b] fixed top-0 left-0 w-[85%] h-full border-r border-r-slate-800 ease-in duration-300 shadow-sm"
                : "fixed top-0 left-[-100%] ease-out duration-500 bg-white"
            }
          >
            <Link to={"/"} className="nav__log m-4 w-full">
              <img
                src={logo}
                className="img-fluid block  mx-4 h-10 w-25"
                alt="adom adventure zone"
              />
            </Link>
            <ul className="uppercase p-4">
              <li className="text-white p-4 text-sm font-medium">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="text-white p-4 text-sm font-medium">
                <Link to={"/about"}>About Us</Link>
              </li>
              <li className="text-white p-4 text-sm font-medium">
                <Link to={"/services"}>Services</Link>
              </li>
              <li className="text-white p-4 text-sm font-medium">
                <Link to={"/events"}> Events </Link>
              </li>
              <li className="text-white p-4 text-sm font-medium">
                <Link to={"/library"}>Library Catalog</Link>
              </li>
              <li className="text-white p-4 text-sm font-medium">
                <Link to={"/media"}> Media </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
