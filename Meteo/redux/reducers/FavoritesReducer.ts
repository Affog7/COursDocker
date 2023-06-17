// favoritesReducer.js

import { ADD_TO_FAVORITES, FETCH_FAVORITE, REMOVE_FROM_FAVORITES, SET_FAVORITES } from "../constants";

 
// favoritesReducer.js

const initialState = {
    favorites: [],
  };
  
  const FavoritesReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_FAVORITES:
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
          
        };

        case FETCH_FAVORITE:
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };

      case REMOVE_FROM_FAVORITES:
        return {
          ...state,
          favorites: state.favorites.filter(item => item.id !== action.payload),
        };
      case SET_FAVORITES:
        return {
          ...state,
          favorites: action.payload,
        };
      default:
        return state;
    }
  };
  
   

export default FavoritesReducer;
