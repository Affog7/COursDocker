import React, { useEffect, useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, TextInput, TouchableHighlight, View } from 'react-native';
import { WeatherCard } from '../Components/WeatherCard';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import { getWeathersList } from "../Actions/thunk/actionListWeather";

const Home = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  const data = useSelector(state => state.appReducer.weathers);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadWeathers = async () => {
      await dispatch(getWeathersList());
    };
    loadWeathers();
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

      <FlatList
        data={data.filter(item => item.city.name.toLowerCase().includes(search.toLowerCase()))}
        renderItem={({ item }) => (
          <TouchableHighlight onPress={() => navigation.navigate("Details", { "weather": item })}>
            <WeatherCard city={item.city} weather={item} />
          </TouchableHighlight>
        )}
        keyExtractor={(item) => item.city.name}
      />
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
