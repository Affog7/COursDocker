// favoritesThunks.js

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Weather } from "../../data/stub";
import { addToFavorites, setFavorites } from "../../redux/actions/ActionFavorites";
import { fetchFavorites } from "./thunkListFavorites";

 
export const insertFavorite =( favorite ) => {
    return async (dispatch, getState) => {
      try {
      
        // Récupérez les favoris actuels du state
        const { favorites   } = getState().FavoritesReducer;
       
        dispatch(fetchFavorites())
        console.log("fffffff"+favorites)
        // Ajoutez le nouveau favori
        const updatedFavorites = [...favorites, favorite ];
          await storeFavoriteToJSON(updatedFavorites);

        // Mettez à jour le store Redux avec les nouveaux favoris
        dispatch(setFavorites(updatedFavorites));
  
        // Mettez à jour le fichier JSON avec les nouveaux favoris
      //  await storeFavoriteToJSON(updatedFavorites);
      } catch (error) {
        console.log('Erreur lors de l\'insertion du favori:', error);
      }
    };
  };
  
const storeFavoriteToJSON = async (weathers) => {
    try {
      const jsonWeathers = JSON.stringify(weathers)
      console.log(jsonWeathers);
      await AsyncStorage.setItem('favorite_weathers', jsonWeathers);
    } catch (e) {
      console.log("An error occurred", e);
    }
  }
 
