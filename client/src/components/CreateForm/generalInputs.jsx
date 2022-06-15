import styled from "styled-components";
export default function GeneralInputs({ handle, recipe }) {
  //

  return (
    <StyledForm>
      <h1>Crea tu propia receta</h1>
      <legend>Nombre de tu nueva receta</legend>
      <input
        onChange={(e) => handle(e)}
        type="text"
        name="name"
        value={recipe.name}
      />

      <legend>Resumen</legend>

      <input
        onChange={(e) => handle(e)}
        type="text"
        name="summary"
        value={recipe.summary}
      />

      <legend>URL imagen</legend>

      <input
        onChange={(e) => handle(e)}
        type="text"
        name="image"
        value={recipe.image}
      />

      <legend>Del 1 al 100 que tan saludable</legend>

      <input
        onChange={(e) => handle(e)}
        type="number"
        name="healthyScore"
        value={recipe.healthyScore}
      />
    </StyledForm>
  );
}
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
