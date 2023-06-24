import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { insertFavorite } from '../thunk/favorites/thunkStoreFavorite';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getImageSource, getTemperatureColor } from '../Components/ImageWeatherType';

const Details = ({ route }) => {
const weather = route.params.weather;

const dispatch = useDispatch();

const handleAddFavorite = () => {
dispatch(insertFavorite(weather));
};

const navigation = useNavigation();
const temperatureColor = getTemperatureColor(weather._temperature);

return (
<View style={styles.container}>
<TouchableHighlight style={styles.buttonAddFavorite} onPress={handleAddFavorite}>
<Icon name="plus" size={30} color="white" />
</TouchableHighlight>
<Text style={styles.title}>{weather.at}</Text>
<View style={styles.weatherContainer}>
<Image source={getImageSource(weather.weatherType)} size={100} style={styles.weatherIcon} />
<Text style={[styles.temperatureText, { color: temperatureColor }]}>{weather.temperature}°C</Text>
<Text style={styles.weatherDescriptionText}>{weather.weatherDescription}</Text>
<View style={styles.detailsContainer}>
<View style={styles.detail}>
<Icon name="water" size={18} style={styles.detailIcon} />
<Text style={styles.detailText}>{weather.humidity}%</Text>
</View>
<View style={styles.detail}>
<Icon name="weather-windy" size={18} style={styles.detailIcon} />
<Text style={styles.detailText}>{weather.windSpeed} km/h</Text>
</View>
<View style={styles.detail}>
<Icon name="gauge" size={18} style={styles.detailIcon} />
<Text style={styles.detailText}>{weather.pressure} hPa</Text>
</View>
</View>
</View>
<View style={styles.cityContainer}>
<Text style={styles.cityText}>{weather.city.name}</Text>
<Text>Latitude: {weather.city.latitude}</Text>
<Text>Longitude: {weather.city.longitude}</Text>
</View>
<TouchableHighlight style={styles.buttonFavorite} onPress={() => navigation.navigate("Favorite", { "weather": weather })}>
<Text style={styles.buttonText}>Favoris</Text>
</TouchableHighlight>
</View>
);
};

const styles = {
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
},
buttonAddFavorite: {
backgroundColor: '#ead9a',
padding: 10,
borderRadius: 5,
marginBottom: 10,
},
title: {
fontSize: 20,
fontWeight: 'bold',
textAlign: 'center',
},
weatherContainer: {
alignItems: 'center',
marginBottom: 20,
},
weatherIcon: {
width: 100,
height: 100,
borderRadius: 50,
marginBottom: 10,
},
temperatureText: {
fontSize: 40,
fontWeight: 'bold',
},
weatherDescriptionText: {
fontSize: 20,
marginBottom: 10,
},
detailsContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
marginBottom: 20,
},
detail: {
alignItems: 'center',
padding: 12,
},
detailIcon: {
color: 'gray',
marginBottom: 5,
},
detailText: {
fontSize: 14,
},
cityContainer: {
alignItems: 'center',
},
cityText: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 10,
},
buttonFavorite: {
backgroundColor: '#a5d9',
padding: 10,
borderRadius: 5,
margin: 50
},
buttonText: {
color: 'white',
fontSize: 18,
fontWeight: 'bold',
},
};

export default Details;