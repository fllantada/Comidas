export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_ALL_DIETS = "GET_ALL_DIETS";
export const GET_RECIPE = "GET_RECIPE";
export const ORDER_BY = "ORDER_BY";
export const FILTER_BY_DIET = "FILTER_BY_DIET";
export const SEARCH_RECIPE = "SEARCH_RECIPE";
export const ORDER_SCORE = "ORDER_SCORE";

export const getAllRecipes = (dispatch) => {
  return fetch("http://localhost:3001/recipes")
    .then((response) => response.json())
    .then((recipes) => {
      dispatch({ type: GET_ALL_RECIPES, payload: recipes });
    })
    .catch((e) => console.log("Error:", e));
};

export const getAllDiets = (dispatch) => {
  return fetch("http://localhost:3001/diets")
    .then((response) => response.json())
    .then((diets) => {
      dispatch({ type: GET_ALL_DIETS, payload: diets });
    })
    .catch((e) => console.log("Error:", e));
};

export const getRecipeDetails = (id) => (dispatch) => {
  return fetch(`http://localhost:3001/recipes/${id}`)
    .then((response) => response.json())
    .then((details) => {
      dispatch({ type: GET_RECIPE, payload: details });
    })
    .catch((e) => console.log("Error:", e));
};

export const orderBy = (payload) => {
  return { type: ORDER_BY, payload: payload };
};
export const orderScore = (payload) => {
  return { type: ORDER_SCORE, payload: payload };
};

export const filterByDiet = (payload) => {
  return { type: FILTER_BY_DIET, payload: payload };
};
export const searchRecipe = (payload) => {
  return { type: SEARCH_RECIPE, payload: payload };
};
