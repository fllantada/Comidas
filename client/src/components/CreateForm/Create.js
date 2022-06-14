import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import DietSelect from "./DietSelect";
import { getAllDiets } from "../../redux/actions/actions";

export default function Create() {
  const empty = {
    name: "",
    image: "",
    summary: "",
    healthyScore: "",
    steps: [],
    CreatedInDb: true,
    dietList: [],
  };
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllDiets);
  }, [dispatch]);

  const [recipe, setRecipe] = React.useState(empty);

  const dietas = useSelector((state) => state.diets);

  const handleChange = (e) => {
    e.preventDefault();
    setRecipe({ ...recipe, [e.target.name]: e.target.value });

    console.log("hice un change", recipe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lo que voy a enviar es:---------------", recipe);
    setRecipe(empty);
    console.log("hice submit");
  };
  const handleAgregar = (element) => {
    console.log(!recipe.dietList.includes(element.target.value));
    let newDietList = !recipe.dietList.includes(element.target.value)
      ? [...recipe.dietList, element.target.value]
      : recipe.dietList;
    setRecipe(() => {
      return {
        ...recipe,
        dietList: newDietList,
      };
    });
    console.log(recipe);
  };

  const handleSacar = (element) => {
    console.log(element.target.value);
    console.log(recipe.dietList);
    let newDietList = recipe.dietList.filter((e) => {
      console.log(
        "ESTOY EN EL FILTER:    e.name",
        e,
        " element:",
        element.target.value
      );
      return e !== element.target.value;
    });
    setRecipe(() => {
      return {
        ...recipe,
        dietList: newDietList,
      };
    });
    console.log(recipe);
  };

  return (
    <>
      <StyledForm onSubmit={(e) => handleSubmit(e)}>
        <h1>Crea tu propia receta</h1>
        <legend>Nombre de tu nueva receta</legend>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="name"
          value={recipe.name}
        />

        <legend>Resumen</legend>

        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="summary"
          value={recipe.summary}
        />

        <legend>URL imagen</legend>

        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="image"
          value={recipe.image}
        />

        <legend>Del 1 al 100 que tan saludable</legend>

        <input
          onChange={(e) => handleChange(e)}
          type="number"
          name="healthyScore"
          value={recipe.healthyScore}
        />
      </StyledForm>
      <Grid>
        <h1>AGREGADAS</h1>
        {recipe.dietList.length !== 0 &&
          recipe.dietList.map((e) => (
            <button
              value={e}
              onClick={(e) => handleSacar(e)}
              key={Math.random(1)}
            >
              {e}
            </button>
          ))}
      </Grid>

      <Grid>
        <h1>AGREGAR</h1>
        <DietSelect handleAgregar={handleAgregar} diets={dietas} />
      </Grid>
      <section>
        <p>
          {" "}
          <button onClick={(e) => handleSubmit(e)}>Crear Receta</button>{" "}
        </p>
      </section>
    </>
  );
}
const Grid = styled.div`
  background-color: white;
  border-radius: 50px;
  margin: 20px 20%;

  display: grid;
  grid-row-gap: 1em;
  align-self: center;
  justify-self: center;
  align-items: center;
  grid-template-columns: repeat(4, auto);
  button {
    background-color: white;
    font-size: 2em;

    border: 2px solid salmon;
    border-radius: 150px;
    &:hover {
      background-color: salmon;
      cursor: pointer;
    }
  }
  h1 {
    grid-column-start: 1;
    grid-column-end: 5;
    background-color: white;
    align-self: center;
    justify-self: center;
  }
`;
const StyledForm = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  margin: 0 20%;
  align-self: center;
  justify-self: center;
  align-items: center;
  border-radius: 50px;
  padding-bottom: 40px;

  input {
    height: 40px;
    width: 50%;
    font-size: 1.5em;
  }
  legend {
    margin: 20px;
    font-size: 1.7em;
  }
  h1 {
    font-size: 3em;
    font-weight: bold;
  }
  button {
    font-size: 1.5em;
    margin: 30px;
    width: 300px;
    height: 70px;
    border: 2px solid salmon;
    border-radius: 150px;
    &:hover {
      background-color: salmon;
      cursor: pointer;
    }
  }
`;
