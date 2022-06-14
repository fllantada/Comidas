import React from "react";

function ListaPaginas(props) {
  const numeroPaginas = [];

  for (
    let i = 1;
    i <= Math.ceil(props.todasLasRecetas / props.recetasPorPagina);
    i++
  ) {
    numeroPaginas.push(i);
  }
  const handlePageNumber = (n) => {
    props.paginado(n);
  };
  const handleNext = () => {
    props.paginaActual < numeroPaginas.length &&
      props.paginado(props.paginaActual + 1);
  };
  const handleBack = () => {
    props.paginaActual > 1 && props.paginado(props.paginaActual - 1);
  };
  return (
    <ul>
      <button onClick={handleBack}>{`<<`}</button>
      {numeroPaginas &&
        numeroPaginas.map((pageNumber) => {
          return (
            <li key={pageNumber}>
              <button onClick={() => handlePageNumber(pageNumber)}>
                {pageNumber}
              </button>
            </li>
          );
        })}
      <button onClick={handleNext}>{`>>`}</button>
    </ul>
  );
}

export default ListaPaginas;

//<ul>
/* {numeroPaginas &&
  numeroPaginas.map((n) => {
    return (
      <li>
        <a onClick={() => paginado(n)}>{n}</a>
      </li>
    );
  })} */
//</ul>
