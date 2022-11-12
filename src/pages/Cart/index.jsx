import React, { useEffect } from "react";
import useStore, { useTitle } from "../../store";
import { CartList } from "../components";
import { useQuery } from "@apollo/client";
import { GET_CART_ITEMS } from "../../apollo";

export default function Cart() {
  const { clothes } = useStore();
  const { setTitle } = useTitle();
  useEffect(() => {
    setTitle("Cart");
  }, []);

  const extractID = clothes.map((item) => item.id);
  const queryObj = useQuery(GET_CART_ITEMS, {
    fetchPolicy: "no-cache",
    variables: {
      array: extractID,
    },
  });

  if (clothes.length > 0 && !queryObj.loading && queryObj.data) {
    return (
      <div className="cart-container">
        <CartList data={queryObj.data.clothes.nodes} />
      </div>
    );
  } else {
    return <p>Your cart is empty</p>;
  }
}
