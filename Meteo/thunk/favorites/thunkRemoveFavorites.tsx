// favoritesThunks.js

import AsyncStorage from '@react-native-async-storage/async-storage';
import { setFavorites } from '../../redux/actions/ActionFavorites';
 
export const deleteFavorite = favoriteId => {
  return async (dispatch, getState) => {
    try {
      // Récupérez les favoris actuels du state
      const { favorites } = getState().favorites;

      // Filtrez le favori à supprimer
      const updatedFavorites = favorites.filter(item => item.id !== favoriteId);

      // Mettez à jour le store Redux avec les favoris mis à jour
      dispatch(setFavorites(updatedFavorites));

      // Mettez à jour le fichier JSON avec les favoris mis à jour
      await saveFavoritesToJSON(updatedFavorites);
    } catch (error) {
      console.log('Erreur lors de la suppression du favori:', error);
    }
  };
};

const saveFavoritesToJSON = async favorites => {
  try {
    // Convertissez les favoris en chaîne JSON
    const jsonData = JSON.stringify(favorites);

    // Utilisez la méthode appropriée pour enregistrer le contenu du fichier JSON
    // Par exemple, vous pouvez utiliser AsyncStorage ou FileSystem de React Native
    // Consultez la documentation appropriée pour le stockage des fichiers JSON dans React Native
    // Dans cet exemple, nous utiliserons AsyncStorage
    await AsyncStorage.setItem('favorites', jsonData);
  } catch (error) {
    console.log('Erreur lors de la sauvegarde des favoris dans le fichier JSON:', error);
  }
};
