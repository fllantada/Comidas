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
      <OptionContainer>
        <h3>Opciones de busqueda:</h3>
        <li>
          <label htmlFor='createdInDb'> Creado</label>
          {/* //<span>Creado por:</span> */}
          <select name='createdInDb' id=''>
            <option value='all'>Todas</option>
            <option value={true}>Creado por mi</option>
            <option value={false}>De la WEB</option>
          </select>
        </li>
        <li>
          <label htmlFor='Dieta'>
            <span>Dieta</span>
            <select name='Dieta' id=''>
              <option value='Vegan'>Vegan</option>
              <option value='Vegetarian'>Vegetarian</option>
              <option value='Gluten Free'>Gluten Free</option>
              <option value='Ketogenic'>Ketogenic</option>
            </select>
          </label>
        </li>
        <li><SearchBar/></li>
      </OptionContainer>
      <OptionContainer>
        <h3>Ordenar por:</h3>
        <button
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Recargar
        </button>
      </OptionContainer>
      {/* <CardContainer> */}
      {AllRecipes &&
        AllRecipes.map((el) => {
          console.log(el.image);
          return (
            <CardContainer>
              <Recipe
                key={el.id}
                name={el.name}
                image={el.image}
                summary={el.summary}
              />
            </CardContainer>
          );
        })}
      {/* </CardContainer> */}
    </>
  );
}
const OptionContainer = styled.div`
  // background-color:green;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
  align-content: center;
  align-items: center;
`;
const CardContainer = styled.div`
  background-color: #ffffff;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px 40px;
  padding: 25px;
  border-radius: 10px;
  div {
    margin: 20px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    text-align: center;
    align-content: center;
    align-items: center;
  }
  h3 {
    font-size: 2em;
    text-align: center;
    color: grey;
  }
  img {
    width: 200px;
    height: 200px;
    border-radius: 150px;
  }
  p {
    color: black;
    font-size: 10px;
    padding: 30px;
  }
`;
