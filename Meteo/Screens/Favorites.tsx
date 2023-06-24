import React, { useEffect, useState } from 'react';
import { View, FlatList, TextInput, Button,Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Weather } from '../data/stub';
import { addToFavorites } from '../redux/actions/ActionFavorites';
import { fetchFavorites } from '../thunk/favorites/thunkListFavorites';
import { insertFavorite } from '../thunk/favorites/thunkStoreFavorite';
import { fetchFavoritesByCity } from '../thunk/favorites/thunkListByCity';
import { FavoriteWeather } from '../Components/FavoriteComponent';
 
const FavoritesComponent = ({route}) => {
  const weather : Weather = route.params.weather

  const [newFavorite,setNewFavorite] = useState('');
  const favorites : [Weather] = useSelector(state => state.FavoritesReducer.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadWeathers = async () => {
        dispatch(fetchFavoritesByCity(weather.city.name));
       //console.log("le total est : "+ favorites[0]["_city"]["_name"])
    };
    loadWeathers();
  }, [dispatch]);
  return (
    <View>
      <Text>Favoris de la ville : {weather.city.name}</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item, index) => index.toString()}
      
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <FavoriteWeather weather={item} city={item._city}  />}
      />
      <TextInput
        value={newFavorite}
        onChangeText={text => setNewFavorite(text)}
      />
     </View>
  );
};

export default FavoritesComponent;
