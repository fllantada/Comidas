import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import DietSelect from "./DietSelect";
import GeneralInputs from "./generalInputs";
import { getAllDiets } from "../../redux/actions/actions";
import StepsForm from "./steps";
import { postRecipe } from "../../redux/actions/actions";

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
  // React.useEffect(() => {
  //   dispatch(getAllDiets);
  // }, [dispatch]);

  const [recipe, setRecipe] = React.useState(empty);
  const [steps, setSteps] = React.useState([]);
  const [step, setStep] = React.useState({ number: "", step: "" });

  React.useEffect(() => {
    console.log("Actualice Recipe ahora es:", recipe);
  }, [recipe]);

  React.useEffect(() => {
    console.log("Actualice Steps y steps es", steps);
    setRecipe(() => {
      return {
        ...recipe,
        steps: steps,
      };
    });
  }, [steps]);
  //IMAGEN POR DEFECTO
  // const dietas = useSelector((state) => state.diets);
  const dietas = [
    { id: 1, name: "gluten free", updatedAt: "2022-06-14T03:48:22.719Z" },
    { id: 2, name: "dairy free", updatedAt: "2022-06-14T03:48:22.742Z" },
    {
      id: 3,
      name: "lacto ovo vegetarian",
      updatedAt: "2022-06-14T03:48:22.749Z",
    },
    { id: 4, name: "vegan", updatedAt: "2022-06-14T03:48:22.755Z" },
    { id: 5, name: "primal", updatedAt: "2022-06-14T03:48:22.788Z" },
    { id: 6, name: "whole 30", updatedAt: "2022-06-14T03:48:22.794Z" },
    { id: 7, name: "paleolithic", updatedAt: "2022-06-14T03:48:22.783Z" },
    { id: 8, name: "pescatarian", updatedAt: "2022-06-14T03:48:22.884Z" },
    { id: 9, name: "ketogenic", updatedAt: "2022-06-14T03:48:22.977Z" },
    { id: 10, name: "fodmap friendly", updatedAt: "2022-06-14T03:48:23.013Z" },
  ];
  const dietasMaped = dietas.map((e) => e.name);

  const handleChange = (e) => {
    e.preventDefault();
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(recipe);
    // console.log(steps);
    postRecipe(recipe);
    //setRecipe(empty);
    //setSteps([]);
    //setStep([]);
  };

  const handleAgregarDieta = (element) => {
    let newDietList = !recipe.dietList.includes(element.target.value)
      ? [...recipe.dietList, element.target.value]
      : recipe.dietList;
    setRecipe(() => {
      return {
        ...recipe,
        dietList: newDietList,
      };
    });
  };

  const handleSacarDieta = (element) => {
    let newDietList = recipe.dietList.filter((e) => {
      return e !== element.target.value;
    });
    setRecipe(() => {
      return {
        ...recipe,
        dietList: newDietList,
      };
    });
  };
  const handleAgregarStep = (element) => {
    element.preventDefault();
    setSteps([...steps, step]);
    setStep({ number: "", step: "" });
  };

  const handleInputStep = (element) => {
    setStep({ ...step, step: element.target.value, number: steps.length + 1 });
  };
  const handleEliminarPaso = (element) => {
    let primerMitad = steps.slice(0, element.target.value);
    let segundaMitad = steps.slice(element.target.value, steps.length);

    primerMitad.pop();
    segundaMitad.forEach((e) => (e.number = e.number - 1));

    segundaMitad.forEach((e) => (e.number = e.number++));
    setSteps([...primerMitad, ...segundaMitad]);
    console.log("Asi quedaría steps", [...primerMitad, ...segundaMitad]);
  };

  return (
    <>
      <GeneralInputs recipe={recipe} handle={handleChange} />

      {recipe.dietList && (
        <DietSelect
          title="AGREGADAS"
          handle={handleSacarDieta}
          diets={recipe.dietList}
        />
      )}
      {dietasMaped && (
        <DietSelect
          title="AGREGAR"
          handle={handleAgregarDieta}
          diets={dietasMaped}
        />
      )}

      <StepsForm
        handleAgregarStep={handleAgregarStep}
        handleInputStep={handleInputStep}
        handleEliminarPaso={handleEliminarPaso}
        steps={steps}
        step={step}
      />

      <Submit>
        <button onClick={(e) => handleSubmit(e)}>Crear Receta</button>{" "}
      </Submit>
    </>
  );
}
const Submit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2% 20%;
  border-radius: 100px;

  button {
    width: 500px;
    background-color: lightgreen;
    font-size: 2em;

    border: 2px solid black;
    border-radius: 15px;
    &:hover {
      background-color: salmon;
      cursor: pointer;
    }
  }
`;
