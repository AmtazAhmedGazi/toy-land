import React, { useContext } from "react";

import MyContainer from "../MyContainer/MyContainer";
import MyLink from "../MyLink/MyLink";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { ClockLoader } from "react-spinners";

const Navbar = () => {
  const { user, setUser, signOutFunc, loading } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutFunc()
      .then(() => {
        toast.success("Sign Out Successful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.code);
      });
  };

  const links = (
    <>
      <li className="m-2 ">
        <MyLink to="/">Home</MyLink>
      </li>

      <li className="m-2 ">
        <MyLink to="/allToys">All Toys</MyLink>
      </li>

      <li className="m-2 ">
        <MyLink to="/aboutUs">About Us</MyLink>
      </li>

      {user && (
        <li className="m-2 ">
          <MyLink to="/profile">Profile</MyLink>
        </li>
      )}
    </>
  );

  return (
    <MyContainer className="navbar shadow-xs">
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
        {loading ? (
          <ClockLoader color="#e45321" />
        ) : user ? (
          <div className="flex">
            {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
            {/* For TSX uncomment the commented types below */}
            <button
              popoverTarget="popover-1"
              style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
            >
              <img
                src={user?.photoURL || "https://via.placeholder.com/88"}
                className="h-13 w-13 rounded-full mr-10"
                alt=""
              />
            </button>

            <div
              className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm "
              popover="auto"
              id="popover-1"
              style={
                { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
              }
            >
              <h2 className="text-lg font-semibold text-center mt-2">
                {user?.displayName}
              </h2>
              <p className="text-center">{user?.email}</p>
              <button
                onClick={handleSignOut}
                className="btn bg-red-600 hover:bg-red-900 text-white w-full"
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <div>
            <button className="btn bg-[#47698F] text-white">
              <Link to="/signIn">Sign In</Link>
            </button>
          </div>
        )}
      </div>
    </MyContainer>
  );
};

export default Navbar;
