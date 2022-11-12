import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation, Topbar, Footer } from "../index";
import { useTitle } from "../../../store";
import "./style.css";

const Layout = () => {
  const { title } = useTitle();
  return (
    <>
      <div className="layout-flex">
        <Navigation />
        <div className="content-part">
          <Topbar title={title} />
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
