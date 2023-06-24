// favoritesThunks.js

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Weather } from "../../data/stub";
import { setFavorites } from "../../redux/actions/ActionFavorites";
import { BASE_STORAGE_NAME } from "../../redux/constants";
import { fetchFavoritesByCity } from "./thunkListByCity";

export const insertFavorite =( favorite : Weather ) => {
    return async (dispatch, getState) => {
      try {
        // Récupérez les favoris actuels du state
        const { favorites   } = getState().FavoritesReducer;
       
        dispatch(fetchFavoritesByCity(favorite.city.name))
        //console.log("fffffff"+favorites.length)
        // Ajoutez le nouveau favori
        const updatedFavorites = [...favorites, favorite ];
          await storeFavoriteToJSON(updatedFavorites, favorite.city.name);

        // Mettez à jour le store Redux avec les nouveaux favoris
        dispatch(setFavorites(updatedFavorites));
  
        // Mettez à jour le fichier JSON avec les nouveaux favoris
      //  await storeFavoriteToJSON(updatedFavorites);
      } catch (error) {
        console.log('Erreur lors de l\'insertion du favori:', error);
      }
    };
  };
  
const storeFavoriteToJSON = async (weathers, cityName) => {
    try {
      const jsonWeathers = JSON.stringify(weathers)
     // console.log(weathers.length);
      await AsyncStorage.setItem(BASE_STORAGE_NAME+cityName, jsonWeathers);
    } catch (e) {
      console.log("An error occurred", e);
    }
  }
 