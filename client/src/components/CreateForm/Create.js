import react from "react";
import styled from "styled-components";
//import { useState } from "react";

export default function Create() {
  const [recipe, setRecipe] = react.useState({
    name: "",
    image: "",
    summary: "",

    steps: [],
    CreatedInDb: true,
    dietList: [],
  });

  const handleChange = (e) => {
    e.preventDefault();
    setRecipe({ ...recipe, [e.target.name]: e.target.value });

    console.log("hice un change", recipe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("hice submit");
  };

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      <h2>Información de contacto</h2>

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
      />

      <section>
        <p>
          {" "}
          <button type="submit">Validar el pago</button>{" "}
        </p>
      </section>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  background-color: white;
`;
