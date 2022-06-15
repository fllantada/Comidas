import styled from "styled-components";
export default function StepsForm({
  handleAgregarStep,
  handleInputStep,
  handleEliminarPaso,
  steps,
  step,
}) {
  return (
    <>
      <Steps>
        {Array.isArray(steps) &&
          steps.map((e, i) => {
            return (
              <li key={i}>
                <span>Paso:{e.number}</span> <span>Descripcion:{e.step}</span>
                <button
                  value={e.number}
                  type="text"
                  onClick={(e) => handleEliminarPaso(e)}
                >
                  X
                </button>
              </li>
            );
          })}
      </Steps>
      <Steps>
        <h1>Crea tu paso N°:{steps.length + 1}</h1>
        <input onChange={handleInputStep} type="text" value={step.step} />
        <button onClick={(e) => handleAgregarStep(e)}>Agregar Paso</button>{" "}
      </Steps>
    </>
  );
}
const Steps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2% 20%;
  border-radius: 100px;
  background-color: white;
  li {
    font-size: 1.8em;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 2% 2%;

    border: 1px solid green;
    border-radius: 20px;
  }
  span {
    margin: 0 20px;
  }
  a {
    padding: 5px;
    border-radius: 200px;
    background-color: green;

    &:hover {
      background-color: salmon;
      cursor: pointer;
    }
  }

  input {
    margin: 20px;
    width: 80%;
    height: 150px;
    border-radius: 30px;
    border: 1px solid salmon;
    font-size: 1.5em;
  }
  button {
    background-color: white;
    font-size: 2em;

    border: 2px solid black;
    border-radius: 15px;
    &:hover {
      background-color: salmon;
      cursor: pointer;
    }
  }
`;
