import react from "react";
import styled from "styled-components";
import { useState } from "react";


export default function Create() {
  const [recipe, setRecipe] = useState({
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

    console.log("hice un change",recipe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("hice submit");
  };

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      
        <h2>Información de contacto</h2>
        <fieldset>
          <legend>Nombre de tu nueva receta</legend>
                     
          
              <label for='title_3'>
                <input onChange={(e)=>handleChange(e)}type='text'  name='name' value={recipe.name} />
               
              </label>
           
          
        </fieldset>
        <fieldset>
          <legend>Resumen</legend>
                     
          
              <label for='title_3'>
                <input onChange={(e)=>handleChange(e)}type='text'  name='summary' value={recipe.summary} />
               
              </label>
           
          
        </fieldset>
        <fieldset>
          <legend>URL imagen</legend>
                     
          
              <label for='title_3'>
                <input onChange={(e)=>handleChange(e)}type='text'  name='image' value={recipe.image} />
               
              </label>
           
          
        </fieldset>
        <fieldset>
          <legend>Del 1 al 100 que tan saludable</legend>
                     
          
              <label for='title_3'>
                <input onChange={(e)=>handleChange(e)}type='number'  name='healthyScore'  />
               
              </label>
           
          
        </fieldset>
        
      <section>
        <p>
          {" "}
          <button type='submit'>Validar el pago</button>{" "}
        </p>
      </section>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  background-color: white;
`;
