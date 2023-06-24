import React, { useEffect, useState } from 'react';
import { Button, FlatList, ActivityIndicator, StyleSheet, TextInput, TouchableHighlight, View, RefreshControl } from 'react-native';
import { WeatherCard } from '../Components/WeatherCard';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { SearchBar } from 'react-native-elements';
 import { getWeathersIconList } from "../thunk/thunkListWeatherIcon";
import { getWeathersList } from '../thunk/thunkListWeather';
 const Home = () => {
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
        />
      </View>
      {isLoading ? (
      <ActivityIndicator size="large" color="#0000ff" /> // Indicateur de chargement
    ) : (

      <FlatList refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        data={data.filter((item: { city: { name: string; }; }) => item.city.name.toLowerCase().includes(search.toLowerCase()))}
        renderItem={({ item }) => (
          <TouchableHighlight onPress={() => navigation.navigate("Details", { "weather": item })}>
            <WeatherCard city={item.city} weather={item} />
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
});

export default Home;
