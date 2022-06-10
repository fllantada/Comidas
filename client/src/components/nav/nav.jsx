import React from "react";
import { Link } from "react-router-dom";
import { getAllRecipes } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import styled from "styled-components";
Array.isArray(country.data.map) && country.data.map();
function Nav() {
  return (
    <NavContainer>
      <Link to={"/"}>Landing</Link>
      <Link to="/recipe"> Crear </Link>
      <Link to={"/home"}>Recetas</Link>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  margin: 20px 50px;
  border-radius: 15px;
  a {
    display: flex;
    flex-direction: row;
    font-size: 3em;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 30vh;
    text-align: center;
    text-decoration: none;
    color: salmon;

    &:hover {
      background-color: salmon;
      color: white;
      border-radius: 10px;
    }
  }

  @media (max-width: 800px) {
    color: black;
    flex-direction: column;
    border: 1px;
    border-color: salmon;
    margin: 0;
    a {
      font-size: 2em;
    }
  }
`;
export default Nav;
