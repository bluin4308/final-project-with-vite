import React from "react";
import useStore from "../../../store";
import "./style.css";

const isSale = (item) => {
  // eslint-disable-next-line array-callback-return
  return item.tags.nodes.findIndex((item) => item.name === "sale") > 0
    ? true
    : false;
};

export default function CartList({ data }) {
  const { clothes, changeSize, deleteCloth } = useStore();

  return data.map((item, index) => {
    const sizes = clothes.findIndex((cloth) => cloth.id === item.id);
    return (
      <div className="cart-item" key={index}>
        <img
          src={item.featuredImage.node.sourceUrl}
          alt={item.featuredImage.node.title}
        />
        <p className="title">{item.title}</p>
        {isSale(item) ? (
          <p className="price">${item.customFields.saleprice}</p>
        ) : (
          <p className="price">${item.customFields.price}</p>
        )}

        <div className="size-group">
          <p>S : {clothes[sizes].quantityS ? clothes[sizes].quantityS : 0}</p>
          <div className="size-buttons">
            <button
              onClick={() =>
                changeSize({ id: item.id, action: "+", type: "s" })
              }
            >
              +
            </button>
            <button
              onClick={() =>
                changeSize({ id: item.id, action: "-", type: "s" })
              }
            >
              -
            </button>
          </div>
        </div>

        <div className="size-group">
          <p>M : {clothes[sizes].quantityM ? clothes[sizes].quantityM : 0}</p>
          <div className="size-buttons">
            <button
              onClick={() =>
                changeSize({ id: item.id, action: "+", type: "m" })
              }
            >
              +
            </button>
            <button
              onClick={() =>
                changeSize({ id: item.id, action: "-", type: "m" })
              }
            >
              -
            </button>
          </div>
        </div>

        <div className="size-group">
          <p>L : {clothes[sizes].quantityL ? clothes[sizes].quantityL : 0}</p>
          <div className="size-buttons">
            <button
              onClick={() =>
                changeSize({ id: item.id, action: "+", type: "l" })
              }
            >
              +
            </button>
            <button
              onClick={() =>
                changeSize({ id: item.id, action: "-", type: "l" })
              }
            >
              -
            </button>
          </div>
        </div>
        <div>
          <button onClick={() => deleteCloth({ id: item.id })}>X</button>
        </div>
      </div>
    );
  });
}
