// favoritesActions.js

import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, SET_FAVORITES } from "../constants";

 
export const addToFavorites = weather => ({
  type: ADD_TO_FAVORITES,
  payload: weather,
});

export const removeFromFavorites = weatherId => ({
  type: REMOVE_FROM_FAVORITES,
  payload: weatherId,
});

export const setFavorites = favorites => ({
    type: SET_FAVORITES,
    payload: favorites,
  });

  