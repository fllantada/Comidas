import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getRecipeDetails } from "../../redux/actions/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function RecipeDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();

  var recipeDetails = useSelector((state) => state.recipe[0]);

  if (recipeDetails && recipeDetails.hasOwnProperty("msg")) {
    recipeDetails = {
      name: "Nombre de Prueba",
      image: "https://spoonacular.com/recipeImages/644387-312x231.jpg",
      summary:
        "Garlicky Kale might be just the side dish you are searching for. This caveman, gluten free, primal, and whole 30 recipe serves 2 and costs 69 cents per serving. One serving contains 179 calories, 3g of protein, and 15g of fat. A few people made this recipe, and 17 would say it hit the spot. If you have olive oil, garlic, curly kale, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 99%. This score is awesome. Try wwwspoonacular.com/recipes/garlicky-kale-248759Garlicky Kale, wwwspoonacular.com/recipes/garlicky-kale-14910Garlicky Kale, and wwwspoonacular.com/recipes/garlicky-kale-crostini-15010Garlicky Kale Crostini for similar recipes.",
      healthyScore: 92,
      steps: [
        { number: 1, step: "Cocinar a fuego lento durante 2 hs" },
        { number: 2, step: "hacer reposar y servir" },
      ],
      diets: ["gluten free", "primal", "vegan"],
    };
  }
  useEffect(() => {
    dispatch(getRecipeDetails(id));
  }, [dispatch, id]);
  //recipeDetails = false;
  return (
    <RecipeDetail>
      <h1>Name:{recipeDetails && recipeDetails.name}</h1>
      {recipeDetails && (
        <img src={recipeDetails.image} alt="Imagen de comida" />
      )}
      <Diet>
        Diets:
        {recipeDetails && recipeDetails.diets.map((e) => <h4>{e}</h4>)}
      </Diet>
      {recipeDetails &&
        recipeDetails.steps.map((e) => {
          return (
            <StepContainer>
              <span>Step: {e.number}</span>
              <span>{e.step}</span>
            </StepContainer>
          );
        })}
      <h1>REsumen:{recipeDetails && recipeDetails.summary}</h1>
    </RecipeDetail>
  );
}

const RecipeDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  // width: 100%;
  margin: 0 10%;
  background-color: #efdbdb;
`;
const Diet = styled.div`
  display: flex;
  flex-direction: row;

  background-color: #774444;
`;

const StepContainer = styled.div`
  background-color: pink;
  display: grid;
  grid-template-columns: 20% 80%;
  border: 2px solid white;
  border-radius: 50px;
  padding: 1% 1%;
  grid-row-gap: 15px;
  justify-items: center;
  align-items: center;
  width: 50%;
  min-height: 150px;

  span {
    font-size: 2em;
    border: 1px solid white;
  }
`;
