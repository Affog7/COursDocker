import React, { useEffect, useState } from 'react';
import { Button, FlatList, ActivityIndicator, StyleSheet, TextInput, TouchableHighlight, View, RefreshControl, ImageBackground } from 'react-native';
import { WeatherCard } from '../Components/WeatherCard';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { SearchBar } from 'react-native-elements';
 import { getWeathersIconList } from "../thunk/thunkListWeatherIcon";
import { getWeathersList } from '../thunk/thunkListWeather';
import CityInfo from '../Components/CityInfo';

 const Favorite = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  const data = useSelector(state => state.appReducer.weathers);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);

      dispatch(getWeathersList());
      dispatch(getWeathersIconList());
    setRefreshing(false);
  };
  
  useEffect(() => {
    const loadWeathers = async () => {
      setIsLoading(true);  
        dispatch(getWeathersList());
      setIsLoading(false);
    };
    loadWeathers();
    const loadWeathersIcons = async () => {
      setIsLoading(true);  
        dispatch(getWeathersIconList());
      setIsLoading(false);
    };
    loadWeathersIcons();
  }, [dispatch]);

  return (
    <View style={styles.container}>
       
      <View>
      
      <SearchBar
        placeholder="Rechercher..."
        onChangeText={(text) => setSearch(text)}
        value={search}
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
      />
      </View>
      {isLoading ? (
      <ActivityIndicator size="large" color="#0000ff" /> // Indicateur de chargement
    ) : (

      <FlatList refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        data={data.filter((item: { city: { name: string; }; }) => item.city.name.toLowerCase().includes(search.toLowerCase()))}
        renderItem={({ item }) => (
          <TouchableHighlight onPress={() => navigation.navigate("Favorite", { "weather": item })}>
            <CityInfo city={item.city}  />
          </TouchableHighlight>
        )}
        keyExtractor={(item) => item.city.name}
        
      />   ) }
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchContainer: {
    backgroundColor: '#aba0e5',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    paddingHorizontal: 0,
  },
  inputContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    borderBottomWidth: 0,
  },
  input: {
    fontSize: 16,
  },
});

export default Favorite;
