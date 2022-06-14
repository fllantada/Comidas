import styled from "styled-components";
function Filter({ todasLasDietas, handleFilterBy }) {
  return (
    <OptionContainer>
      <li key={2}>
        <label htmlFor="Dieta">
          <span>Dieta</span>
          <select
            onChange={(event) => handleFilterBy(event)}
            name="Dieta"
            id=""
          >
            <option value="Todas">Todas</option>

            {todasLasDietas &&
              todasLasDietas.map((dieta) => {
                return (
                  <option
                    key={dieta.id}
                    name={dieta.name.toLowerCase()}
                    value={dieta.name.toLowerCase()}
                  >
                    {dieta.name}
                  </option>
                );
              })}
          </select>
        </label>
      </li>
    </OptionContainer>
  );
}
export default Filter;
const OptionContainer = styled.div`
  margin: 10px 0px;
  border-radius: 50px;
  //width: 70%;
  height: 3em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
  align-content: center;
  align-items: center;
  select {
    height: 2.5em;
    margin: 2px;
    border-radius: 15px;
  }
  ul {
    display: flex;
    flex-direction: row;
  }
  button {
    margin: 0 5px;
    width: 50px; //poner por props
    font-size: 20px;
    border-radius: 150px;
    background-color: white;
    &:hover {
      cursor: pointer;
      background-color: salmon;
    }
  }
`;
