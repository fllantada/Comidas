import styled from "styled-components";
import { Link } from "react-router-dom";

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  margin: 20px 50px;
  height: 80px;
  border-radius: 15px;
  a {
    display: flex;
    flex-direction: row;
    font-size: 3em;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 30vh;
    text-align: center;
    text-decoration: none;
    color: salmon;

    &:hover {
      background-color: salmon;
      color: white;
    }
  }
`;

export const LinkStyled = styled(Link)`
  /* display: flex;
  flex-direction: row;
  font-size: 3em;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 30vh;
  text-align: center;
  text-decoration: none;
  color: salmon;
 
  &:hover {
    background-color: salmon;
    color: white;
  } */
`;
export const Button = styled.button`
  background: transparent;
  box-sizing: border-box;
  border-radius: 10px;
  border: 2px solid #40e0d0;
  color: #40e0d0;
  height: 100%;

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
