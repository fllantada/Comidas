import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
//acciones
import {
  filterByDiet,
  getAllDiets,
  getAllRecipes,
  orderBy,
  orderScore,
} from "../../redux/actions/actions";
//componentes
import SearchBar from "./searchbar";
import Filter from "./filter";
import img from "../landing/img/fondoCards.png";
import ListaPaginas from "./listaPaginas";
import Recipe from "../recipe/recipe";
import OrderBy from "./orderAlfabetico";
import OrderScore from "./orderScore";

export default function Home() {
  const dispatch = useDispatch();

  const todasLasRecetas = useSelector((state) => state.recipes);
  const todasLasDietas = useSelector((state) => state.diets);
  React.useEffect(() => {
    dispatch(getAllRecipes);
    dispatch(getAllDiets);
  }, [dispatch]);

  React.useEffect(() => {
    setloading(false);
  }, [todasLasRecetas]);

  ////Paginado
  const [paginaActual, setPagina] = React.useState(1);
  const [order, setOrder] = React.useState("");
  const [loading, setloading] = React.useState(true);

  const recetasPorPagina = 9;
  const indiceUltimaReceta = paginaActual * recetasPorPagina;
  const indicePrimeraReceta = indiceUltimaReceta - recetasPorPagina;
  const recetasActuales = todasLasRecetas.slice(
    indicePrimeraReceta,
    indiceUltimaReceta
  );
  const paginado = (pagina) => setPagina(pagina);
  const handleFilterBy = (element) => {
    dispatch(filterByDiet(element.target.value));
    setPagina(1);
  };

  const handleOrderBy = (event) => {
    event.preventDefault();
    dispatch(orderBy(event.target.value));
    setPagina(1);
    setOrder(event.target.value);
  };
  const handleOrderScore = (event) => {
    event.preventDefault();
    dispatch(orderScore(event.target.value));
    setPagina(1);
    setOrder(event.target.value);
  };
  if (loading) return <h1>ESPERA MIENTRAS CARGAMOS LA PAGINA</h1>;
  //if (todasLasRecetas.length && todasLasDietas.length) setloading(false);
  return (
    <Div>
      <FilterContainer>
        <Filter
          todasLasDietas={todasLasDietas}
          handleFilterBy={handleFilterBy}
        />
        <OrderBy handleOrderBy={handleOrderBy} />
        <OrderScore handleOrderScore={handleOrderScore} />

        <li key={1}>
          <SearchBar search="{search}" key="12412" />
        </li>
      </FilterContainer>
      <OptionContainer>
        <ListaPaginas
          recetasPorPagina={recetasPorPagina}
          todasLasRecetas={todasLasRecetas.length}
          paginado={paginado}
          paginaActual={paginaActual}
        />
      </OptionContainer>
      {recetasActuales.length == 0 && (
        <h1>"No se encontro ninguna receta con ese nombre"</h1>
      )}

      {recetasActuales &&
        recetasActuales.map((el, index) => {
          return (
            <LinkStyled to={`/home/detail/${el.id}`}>
              <CardContainer flag={index % 2 ? true : false} key={el.id}>
                <Recipe
                  key={el.id}
                  id={el.id}
                  name={el.name}
                  image={el.image}
                  summary={el.summary}
                  diets={el.diets}
                  score={el.healthyScore}
                />
              </CardContainer>
            </LinkStyled>
          );
        })}
    </Div>
  );
}

const LinkStyled = styled(Link)`
  display: flex;
  width: 100%;
  //justify-items: center;
  justify-content: center;
  //text-align: center;
  //align-content: center;
`;
const FilterContainer = styled.nav`
  width: 90%;
  position: relative;
  background-color: #70471d67;
  border-radius: 30px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  li {
    list-style: none;
  }
`;
const OptionContainer = styled.div`
  margin: 10px 0px;
  border-radius: 50px;
  background-color: #937070;
  width: 70%;
  height: 3em;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  align-items: center;

  ul {
    display: flex;
    flex-direction: row;
  }
  button {
    margin: 0 5px;
    width: 50px; //poner por props
    font-size: 20px;
    border-radius: 150px;
    background-color: white;
    &:hover {
      cursor: pointer;
      background-color: salmon;
    }
  }
`;
const CardContainer = styled.div`
  width: 80%;
  //background-color: #ffffff;
  color: white;
  display: flex;
  background-image: url(${img});
  background-repeat: none;
  background-size: 100%;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 40px;
  padding: 25px;
  border-radius: 10px;
  border: 2px solid black;
  opacity: 0.95;
  &:hover {
    background-color: salmon;
    background-image: none;
    color: white;
    border-radius: 10px;
    cursor: pointer;
  }
  div {
    opacity: none;
    margin: 20px 0px;
    display: flex;
    flex-direction: ${(props) => (props.flag ? "row-reverse" : "row")};
    justify-content: space-evenly;
    text-align: center;
    align-content: center;
    align-items: center;
  }
  h3 {
    font-size: 2.5em;
    text-align: center;
    color: #000000;
  }
  img {
    width: 200px;
    height: 200px;
    border-radius: 15px;
  }
  p {
    margin: 0 5%;
    opacity: 1 !important;
    color: black;
    border: 2px solid grey;
    font-size: 12px;
    padding: 30px;
    width: 100%;
  }
  a {
    display: flex;
    flex-direction: column;

    text-decoration: none;
    align-items: center;
    text-align: center;
  }
  ul {
    text-align: center;
    display: flex;
    flex-direction: row;
  }
  li {
    margin: 10px;
    border: 2px solid grey;
    border-radius: 100px;
    font-size: 20px;
    color: black;
    background-color: white;
    padding: 10px;
  }
  h4 {
    width: 40%;
    //border: 1px solid;
    font-size: 2.5em;
    text-align: center;
    align-self: center;
    align-items: center;
    color: #0a42218b;
  }
`;
