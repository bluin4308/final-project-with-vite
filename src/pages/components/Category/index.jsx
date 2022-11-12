import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ITEMS } from "../../../apollo";
import { CardList } from "../index";
import { useTitle } from "../../../store";
import "./style.css";

const Pagination = ({
  perPage,
  setPerPage,
  queryObj,
  setVariables,
  variables,
}) => {
  const options = [
    { value: "2", text: 2 },
    { value: "4", text: 4 },
    { value: "6", text: 6 },
  ];

  return (
    <div className="pagination">
      <div className="selector">
        <p>Items per page</p>
        <select value={perPage} onChange={(e) => setPerPage(e.target.value)}>
          {options.map(({ text, value }, index) => {
            return (
              <option key={index} value={value}>
                {text}
              </option>
            );
          })}
        </select>
      </div>
      <div className="pagination-button-group">
        <button
          className="pagination-button"
          disabled={
            queryObj.loading || !queryObj.data.clothes.pageInfo.hasPreviousPage
          }
          onClick={() =>
            setVariables({
              before: queryObj.data.clothes.pageInfo.startCursor,
              last: parseInt(perPage),
              tags: variables.tags,
            })
          }
        >
          Previos
        </button>
        <button
          className="pagination-button"
          disabled={
            queryObj.loading || !queryObj.data.clothes.pageInfo.hasNextPage
          }
          onClick={() =>
            setVariables({
              after: queryObj.data.clothes.pageInfo.endCursor,
              first: parseInt(perPage),
              tags: variables.tags,
            })
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Category = ({ tags, title }) => {
  const [perPage, setPerPage] = useState("4");
  const [variables, setVariables] = useState({
    tags: tags || [""],
    first: parseInt(perPage),
  });
  const { setTitle } = useTitle();
  useEffect(() => {
    setTitle(title);
  }, [setTitle, title]);
  const queryObj = useQuery(GET_ITEMS, {
    variables: variables,
    fetchPolicy: "no-cache",
  });

  if (!queryObj.loading && queryObj.data) {
    return (
      <div>
        <Pagination
          perPage={perPage}
          queryObj={queryObj}
          setPerPage={setPerPage}
          setVariables={setVariables}
          variables={variables}
        />
        <CardList data={queryObj.data.clothes.nodes} />
      </div>
    );
  } else {
    return (
      <div>
        <Pagination
          perPage={perPage}
          queryObj={queryObj}
          setPerPage={setPerPage}
          setVariables={setVariables}
          variables={variables}
        />
      </div>
    );
  }
};

export default Category;
