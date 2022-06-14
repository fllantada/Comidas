import React from "react";

function OrderScore(props) {
  return (
    <li key={2}>
      <label htmlFor="Dieta">
        <span>Ordenar Score</span>

        <button onClick={(event) => props.handleOrderScore(event)} value="asc">
          0-100
        </button>
        <button onClick={(event) => props.handleOrderScore(event)} value="dsc">
          100-0
        </button>
      </label>
    </li>
  );
}

export default OrderScore;
