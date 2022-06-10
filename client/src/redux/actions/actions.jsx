export const GET_ALL_RECIPES = "GET_ALL_RECIPES";

export const getAllRecipes = (dispatch) => {
  console.log("inicie accion get all recipes");
  return fetch("http://localhost:3001/recipes")
    .then((response) => response.json())
    .then((recipes) => {
      console.log("tengo esta respuesta :", recipes);
      console.log(typeof recipes);
      console.log(recipes.length);
      dispatch({ type: GET_ALL_RECIPES, payload: recipes });
    })
    .catch((e) => console.log("Error:", e));
};
