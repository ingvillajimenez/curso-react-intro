import React from "react";
import "./TodoSearch.css";

function TodoSearch() {
  const [searchValue, setsearchValue] = React.useState("");

  console.log("Los usuarios buscan todos de " + searchValue);

  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setsearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
