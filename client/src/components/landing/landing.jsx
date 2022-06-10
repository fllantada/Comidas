import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "./img/fondo.jpg";

const Button = styled.button`
  background: transparent;
  border-radius: 10px;
  border: 2px solid #40e0d0;
  color: #40e0d0;
  height: 9vh;

  width: 20vh;
  font-size: 3vh;
  padding: 0.25em 1em;
  //margin-top: 30vh;
  &:hover {
    background: #40e0d0;
    color: white;
    cursor: pointer;
  }
`;
const H1 = styled.h1`
  color: salmon;
  display: flex;
  font-size: 5em;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: 2px solid salmon;
  justify-content: space-evenly;
  align-items: center;
  height: 50%;

  width: 60%;
  border-radius: 2em;
`;
const Div = styled.div`
  display: flex;
  //background-image: url(${img});
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  //margin: 0vh;

  //background-color: grey;
  text-align: center;
`;
function Landing() {
  return (
    <>
      <Div>
        <Box>
          <H1>PI food Henry</H1>
          <Link to="/home">
            <Button>Ingresar</Button>
          </Link>
        </Box>
      </Div>
    </>
  );
}

export default Landing;
