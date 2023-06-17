import React from 'react';
import { View, Text, Image, FlatList, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { insertFavorite } from '../thunk/favorites/thunkStoreFavorite';
import { useDispatch } from 'react-redux';
 
 
const Details = ({route}) => {
  const dispatch = useDispatch();

  const handleAddFavorite = () => {
    dispatch(insertFavorite(route.params.weather));
    
   };

   
 const navigation = useNavigation();

 

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>{route.params.weather.city.name}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TouchableHighlight onPress={() => navigation.navigate("Favorite")}>
               <Button title={"Favoris"} />
              </TouchableHighlight>
      <TouchableHighlight onPress={handleAddFavorite}>
               <Button title={"Add to favorite"} />
              </TouchableHighlight>
      </View>
      
    </View>
  );
};

export default Details;
