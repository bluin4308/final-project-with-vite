import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTitle } from "../../../store";
import "./style.css";

export default function SaleBanner() {
  const { setTitle } = useTitle();
  useEffect(() => {
    setTitle("");
  }, []);
  return (
    <div className="sale-banner">
      <img
        src="https://dsa1mc.wp4.host/wp-content/uploads/2022/10/jeans.jpg"
        alt="banner"
      />
      <div className="text-group">
        <p className="title">collection 2022</p>
        <NavLink to="sale">Shop now</NavLink>
      </div>
    </div>
  );
}
