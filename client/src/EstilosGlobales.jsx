import { createGlobalStyle } from "styled-components";
import img from "./components/landing/img/fondo.jpg";
const EstilosGlobales = createGlobalStyle`
  *{
    margin:0;
    font-family: "Alegreya";
    font-weight: normal;


  }
  body{
  
  background-image: url(${img});
    
  height: 100vh;
  margin: 0vh; 
  } 
 
`;
export default EstilosGlobales;
