import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Root,
  Cart,
  Jeans,
  Jackets,
  AllClothes,
  Sale,
  Search,
  NotFound,
} from "../pages";
import { SaleBanner } from "../pages/components";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="/" element={<SaleBanner />} />
        <Route path="sale" key="sale" element={<Sale />} />
        <Route path="jeans" key="sale" element={<Jeans />} />
        <Route path="all" key="all" element={<AllClothes />} />
        <Route path="jackets" key="jackets" element={<Jackets />} />
        <Route path="cart" key="cart" element={<Cart />} />
        <Route path="search" key="search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Routing;
