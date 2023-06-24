// favoritesThunks.js

import AsyncStorage from "@react-native-async-storage/async-storage";
import { City, Weather } from "../../data/stub";
import { addToFavorites, setFavorites } from "../../redux/actions/ActionFavorites";
import { BASE_STORAGE_NAME } from "../../redux/constants";

export const fetchFavorites = () => {
  return async dispatch => {
    try {
      const jsonWeathers = await AsyncStorage.getItem(BASE_STORAGE_NAME)

    const data : [Weather] = jsonWeathers != null ? JSON.parse(jsonWeathers) : [];

    //console.log(data[0]["_at"]+"Je suis bien là")
    dispatch(setFavorites(data));
    } catch (error) {
      console.log('Erreur lors de la récupération des favoris:', error);
    }
  };
};
