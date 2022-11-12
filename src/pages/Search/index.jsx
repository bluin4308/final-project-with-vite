import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_ITEMS } from "../../apollo";
import { useTitle } from "../../store";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [searchItems, searchItemsData] = useLazyQuery(SEARCH_ITEMS, {
    fetchPolicy: "no-cache",
  });
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("Search");
  }, []);

  useEffect(() => {
    if (searchText.replace(" ", "").length > 0) {
      if (searchText.trim() !== "") {
        searchItems({
          variables: {
            search: searchText.trim(),
          },
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);
  return (
    <div className="search-page">
      <input
        type="text"
        minLength="1"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div>
        {!searchItemsData.data
          ? "not undefined"
          : searchItemsData.data.clothes.nodes.map((item, index) => {
              return <p key={index}>{item.title}</p>;
            })}
      </div>
    </div>
  );
}
