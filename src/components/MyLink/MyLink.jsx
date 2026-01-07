import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, className, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "text-[#0c0c0d] underline underline-offset-3 font-semibold text-lg"
            : `${className} text-[#4266c1] font-semibold text-lg`
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default MyLink;
