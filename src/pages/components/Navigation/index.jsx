import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Navigation() {
  return (
    <div className="nav-flex-col">
      <NavLink to="/" className="logo" end>
        logo
      </NavLink>
      <div className="navlink-group">
        <NavLink
          to="sale"
          className={
            "navlink " + (({ isActive }) => (isActive ? " active" : null))
          }
        >
          Sale
        </NavLink>
        <NavLink
          to="all"
          className={
            "navlink " + (({ isActive }) => (isActive ? " active" : null))
          }
        >
          All clothes
        </NavLink>
        <NavLink
          to="jeans"
          className={
            "navlink " + (({ isActive }) => (isActive ? " active" : null))
          }
        >
          jeans
        </NavLink>
        <NavLink
          to="jackets"
          className={
            "navlink " + (({ isActive }) => (isActive ? " active" : null))
          }
        >
          jackets
        </NavLink>
      </div>
    </div>
  );
}

export default React.memo(Navigation);
