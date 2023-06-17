import React, { useEffect, useState } from 'react';
import { View, FlatList, TextInput, Button,Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Weather } from '../data/stub';
import { addToFavorites } from '../redux/actions/ActionFavorites';
import { fetchFavorites } from '../thunk/favorites/thunkListFavorites';
import { insertFavorite } from '../thunk/favorites/thunkStoreFavorite';
 
const FavoritesComponent = () => {
  const [newFavorite,setNewFavorite] = useState('');
  const favorites : [Weather] = useSelector(state => state.FavoritesReducer.favorites);
  const dispatch = useDispatch();

  
  
  useEffect(() => {
    const loadWeathers = async () => {
      
        dispatch(fetchFavorites());
       console.log("le total est : "+ favorites[0]["_city"]["_name"])
    };
    loadWeathers();
     
  }, [dispatch]);
  return (
    <View>
      <Text>Favorites</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item["_at"]}</Text>}
      />
      <TextInput
        value={newFavorite}
        onChangeText={text => setNewFavorite(text)}
      />
     </View>
  );
};


export default FavoritesComponent;
