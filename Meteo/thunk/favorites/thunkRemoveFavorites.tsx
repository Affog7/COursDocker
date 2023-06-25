// favoritesThunks.js

import AsyncStorage from '@react-native-async-storage/async-storage';
import { setFavorites } from '../../redux/actions/ActionFavorites';
import { BASE_STORAGE_NAME } from '../../redux/constants';
 
export const deleteFavorite = (favoritedate, cityName) => {
  return async (dispatch, getState) => {
    try {
      // Récupérez les favoris actuels du state
      const { favorites   } = getState().FavoritesReducer;

      // Filtrez le favori à supprimer
      const updatedFavorites = favorites.filter(item => item._at !== favoritedate);
console.log(updatedFavorites)
      // Mettez à jour le store Redux avec les favoris mis à jour
      dispatch(setFavorites(updatedFavorites));

      // Mettez à jour le fichier JSON avec les favoris mis à jour
      await saveFavoritesToJSON(updatedFavorites,cityName);
    } catch (error) {
      console.log('Erreur lors de la suppression du favori:', error);
    }
  };
};

const saveFavoritesToJSON = async (favorites,cityName) => {
  try {
    // Convertissez les favoris en chaîne JSON
    const jsonData = JSON.stringify(favorites);

    await AsyncStorage.setItem( BASE_STORAGE_NAME+cityName, jsonData);
  } catch (error) {
    console.log('Erreur lors de la sauvegarde des favoris dans le fichier JSON:', error);
  }
};
