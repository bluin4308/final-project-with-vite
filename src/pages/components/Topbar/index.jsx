import React from "react";
import { NavLink } from "react-router-dom";
import useStore from "../../../store";
import "./style.css";

const Topbar = (props) => {
  const { clothes } = useStore();

  return (
    <div className="topbar-flex-row">
      <p className="page-title">{props.title}</p>
      <div className="icongroup-flex">
        {clothes.length > 0 ? (
          <>
            <div className="tooltip">
              {clothes.length}
              <span className="tooltiptext">Items in cart</span>
            </div>
          </>
        ) : null}

        <NavLink
          to="cart"
          className={({ isActive }) => (isActive ? " active" : null)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </NavLink>
        <NavLink
          to="search"
          className={({ isActive }) => (isActive ? " active" : null)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </NavLink>
      </div>
    </div>
  );
};

export default React.memo(Topbar);
