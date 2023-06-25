import { FETCH_WEATHER } from "../constants";

const initialState = {
  weathers: [],
  cities: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return { ...state, weathers: action.payload, cities: action.cities };
    default:
      return state;
  }
};

export default appReducer;
