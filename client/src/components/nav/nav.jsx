import React from "react";
import { Link } from "react-router-dom";

import { getAllRecipes } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { Div, LinkStyled, Button } from "./navStyles";

function Nav() {
  const handleClick = (event) => {
    dispatch(getAllRecipes);
    console.log("entre a handle");
  };
  const dispatch = useDispatch();
  return (
    <Div>
      <LinkStyled to={"/"}>Landing</LinkStyled>
      <Link to="/recipe"> Crear Receta </Link>
      <Button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Recargar
      </Button>
      <LinkStyled to={"/home"}>Recetas</LinkStyled>
    </Div>
  );
}

export default Nav;
