import React from "react";

import "./Navbar.css";
import MyContainer from "../MyContainer/MyContainer";
import MyLink from "../MyLink/MyLink";
import { Link } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <MyLink to="/">
        <li className="m-2 ">Home</li>
      </MyLink>
      <MyLink to="/allToys">
        <li className="m-2 ">All Toys</li>
      </MyLink>
      <MyLink to="/aboutUs">
        <li className="m-2 ">About Us</li>
      </MyLink>
    </>
  );
  return (
    <MyContainer className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <Link to="/">
          <li className="m-2 btn btn-ghost text-3xl font-bold text-[#47698F]">
            Toy Land
          </li>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/signIn">
          <button className="btn bg-[#47698F] text-white">Sign In</button>
        </Link>
      </div>
    </MyContainer>
  );
};

export default Navbar;
