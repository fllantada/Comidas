import styled from "styled-components";
export default function DietSelect({ diets, handle, title }) {
  return (
    <Grid>
      <h1>{title}</h1>
      {Array.isArray(diets) &&
        diets.map((e, i) => (
          <button key={i} value={e} onClick={(e) => handle(e)}>
            {e}
          </button>
        ))}
    </Grid>
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
