import {
  GET_ALL_RECIPES,
  GET_ALL_DIETS,
  GET_RECIPE,
  ORDER_BY,
  FILTER_BY_DIET,
  SEARCH_RECIPE,
  ORDER_SCORE,
} from "../actions/actions";

const initialState = {
  recipes: [],
  recipesBackup: [],
  recipe: {},
  diets: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RECIPES:
      const recipeMaped = action.payload.map((e) => {
        const newDiets = e.diets.map((el) => el.name);

        return { ...e, diets: newDiets };
      });

      return {
        ...state,
        recipes: recipeMaped,
        recipesBackup: recipeMaped,
      };

    case GET_ALL_DIETS:
      return { ...state, diets: action.payload };

    case GET_RECIPE:
      return { ...state, recipe: [action.payload] };

    case SEARCH_RECIPE:
      var recipeFinded = state.recipesBackup;
      recipeFinded = recipeFinded.filter((e) =>
        e.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return { ...state, recipes: recipeFinded };

    case FILTER_BY_DIET:
      var recipesFiltered = [];
      const allRecipes = state.recipesBackup;
      if (action.payload !== "Todas") {
        recipesFiltered = allRecipes.filter((e) => {
          return e.diets.includes(action.payload);
        });
      } else {
        recipesFiltered = allRecipes;
      }

      return { ...state, recipes: recipesFiltered };
    case ORDER_BY: {
      var sortedRecipes = state.recipes;
      var sortedRecipes = sortedRecipes.sort((x, y) => {
        if (x.name < y.name && action.payload === "asc") return -1;
        if (x.name < y.name && action.payload === "dsc") return 1;
        if (x.name > y.name && action.payload === "asc") return 1;
        if (x.name > y.name && action.payload === "dsc") return -1;
        return 0;
      });

      return { ...state, recipes: sortedRecipes };
    }
    case ORDER_SCORE: {
      var sortedRecipes = state.recipes;
      var sortedRecipes = sortedRecipes.sort((x, y) => {
        if (x.healthyScore < y.healthyScore && action.payload === "asc")
          return -1;
        if (x.healthyScore < y.healthyScore && action.payload === "dsc")
          return 1;
        if (x.healthyScore > y.healthyScore && action.payload === "asc")
          return 1;
        if (x.healthyScore > y.healthyScore && action.payload === "dsc")
          return -1;
        return 0;
      });

      return { ...state, recipes: sortedRecipes };
    }

    default:
      return { ...state };
  }
};

export default rootReducer;
