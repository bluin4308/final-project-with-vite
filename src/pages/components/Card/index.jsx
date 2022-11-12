import React, { useState } from "react";
import CardModal from "../CardModal";
import "./style.css";

const isSale = (item) => {
  // eslint-disable-next-line array-callback-return
  return item.tags.nodes.findIndex((item) => item.name === "sale") > 0
    ? true
    : false;
};

const Card = ({ item }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="card">
      <img
        src={item.featuredImage.node.sourceUrl}
        alt={item.featuredImage.node.title}
      />
      <p className="title" onClick={() => setModal(true)}>
        {item.title}
      </p>
      {isSale(item) ? (
        <>
          <div className="sale-badge">sale</div>
          <p className="sale-price">${item.customFields.saleprice}</p>
          <CardModal
            visible={modal}
            closeModal={setModal}
            item={item}
            isSale={true}
          />
        </>
      ) : (
        <>
          <p className="regular-price">${item.customFields.price}</p>
          <CardModal
            visible={modal}
            closeModal={setModal}
            item={item}
            isSale={false}
          />
        </>
      )}
    </div>
  );
};

export default Card;
