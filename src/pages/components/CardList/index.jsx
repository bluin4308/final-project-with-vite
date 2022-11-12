import React from "react";
import Card from "../Card";
import "./style.css";

const CardList = ({ data }) => {
  return (
    <div className="card-list">
      {data.map((item, index) => {
        return <Card item={item} key={index} />;
      })}
    </div>
  );
};

export default CardList;
