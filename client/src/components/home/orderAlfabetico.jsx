import React from "react";

function OrderBy(props) {
  return (
    <li key={2}>
      <label htmlFor="Dieta">
        <span>Ordenar Alfabeticamente</span>

        <button onClick={(event) => props.handleOrderBy(event)} value="asc">
          A-Z
        </button>
        <button onClick={(event) => props.handleOrderBy(event)} value="dsc">
          Z-A
        </button>
      </label>
    </li>
  );
}

export default OrderBy;
