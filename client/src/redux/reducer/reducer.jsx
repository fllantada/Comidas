import { GET_ALL_RECIPES } from "../actions/actions";

const initialState = {
  recipes: [],
  recipe: {},
  diets: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return { ...state, recipes: action.payload };

    //    case GET_HOUSE:
    //        return{...state, house: action.payload}

    //     case CREATE_HOUSE:
    //         return{...state, houses: [...state.houses, action.payload]}

    //     case DELETE_HOUSE:
    //         return{...state,
    //         houses: state.houses.filter(h=> h.id !== action.payload)}

    default:
      return { ...state };
  }
};

export default rootReducer;
