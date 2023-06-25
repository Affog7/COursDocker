// favoritesThunks.js

import AsyncStorage from "@react-native-async-storage/async-storage";
import { City, Weather } from "../../data/stub";
import { addToFavorites, setFavorites } from "../../redux/actions/ActionFavorites";
import { BASE_STORAGE_NAME } from "../../redux/constants";
import { useSelector } from "react-redux";

export const fetchFavorites = () => {
  return async (dispatch, getState) => {
    try {
      console.log(5322)

      const cities   = getState().appReducer.weathers;

  let data : Weather[] = []
for (let i = 0; i < cities.length; i++) {
  let jsonWeathers = await AsyncStorage.getItem(BASE_STORAGE_NAME+cities[i].city.name)
 if(jsonWeathers != null)  data.push(JSON.parse(jsonWeathers) );
}

console.log(data)

    // 

   // data.push(jsonWeathers != null ? JSON.parse(jsonWeathers) : []);

    //console.log(data[0]["_at"]+"Je suis bien là")
 dispatch(setFavorites(data));
    } catch (error) {
      console.log('Erreur lors de la récupération des favoris:', error);
    }
  };
};
