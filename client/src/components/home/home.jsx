import React from "react";
//eslint-disable-next-line
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../../redux/actions/actions";
import styled from "styled-components";

import Recipe from "../recipe/recipe";

export default function Home() {
  const dispatch = useDispatch();

  const AllRecipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getAllRecipes);
    //eslint-disable-next-line
  }, []);
  const handleClick = (event) => {
    dispatch(getAllRecipes);
    console.log("entre a handle");
  };

  return (
    <>
      <div>
        <h1>Opciones de busqueda:</h1>
        <li>
          <label htmlFor="createdInDb"> Creado</label>
          {/* //<span>Creado por:</span> */}
          <select name="createdInDb" id="">
            <option value="all">Todas</option>
            <option value={true}>Creado por mi</option>
            <option value={false}>De la WEB</option>
          </select>
        </li>
        <li>
          <label htmlFor="Dieta">
            <span>Dieta</span>
            <select name="Dieta" id="">
              <option value="Vegan">Vegan</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Gluten Free">Gluten Free</option>
              <option value="Ketogenic">Ketogenic</option>
            </select>
          </label>
        </li>
      </div>
      <div>
        <button
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Recargar
        </button>
        <h1>Ordenar por:</h1>
      </div>
      <CardContainer>
        {AllRecipes &&
          AllRecipes.map((el) => {
            console.log(el.image);
            return (
              <Recipe
                key={el.id}
                name={el.name}
                image={el.image}
                summary={el.summary}
              />
            );
          })}
      </CardContainer>
    </>
  );
}

const CardContainer = styled.div`
  background-color: #ffffff;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 40px 40px;
  border-radius: 10px;
  h3 {
    font-size: 3em;
    text-align: center;
    color: #5b3636;
  }
  img {
    width: 500px;
    height: 500px;
  }
  p {
    font-size: 1em;
    padding: 10px 10px;
    text-align: center;
  }
`;
