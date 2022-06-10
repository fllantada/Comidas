import React from "react";
//eslint-disable-next-line
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../../redux/actions/actions";

export default function Home() {
  const dispatch = useDispatch();
  //eslint-disable-next-line
  const AllRecipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getAllRecipes);
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Estoy en home</h1>
    </div>
  );
}
