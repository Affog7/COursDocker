import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { getWeathersIconList } from '../thunk/thunkListWeatherIcon';
import { City, Weather } from '../data/stub';

type MeteoProps = {
  city : City,
  weather : Weather
}

export function WeatherCard(props: MeteoProps) {
  const dispatch = useDispatch();
  const data = useSelector(state => state.IconsReducer.weathersIcons);
  useEffect(() => {
    const loadWeathersIcons = async () => {
         dispatch(getWeathersIconList());
     };
    loadWeathersIcons();
  }, [dispatch]);
  
//console.log(hh[0]._imageUri);

  return (
    
    <View style={styles.container}>
       
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.city.name}</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image
            source= {{ uri: data.filter(() =>
              props.weather.weatherType
              )[0]._imageUri  }}
            style={styles.image}
          />
          <Text style={styles.title} > {props.weather.weatherType} </Text>
        </View>
        <View style={styles.iconContainer}>
         
          <View style={styles.row}>
            <View style={styles.iconWithText}>
              <Icon name="thermometer" style={styles.icon} />
              <Text style={styles.iconText}>{props.weather.temperature} °C</Text>
            </View>
            <View style={styles.iconWithText}>
              <Icon name="eye" style={styles.icon} />
              <Text style={styles.iconText}>{props.weather.visibility}</Text>
            </View>
            <View style={styles.iconWithText}>
              <Icon name="weather-windy" style={styles.icon} />
              <Text style={styles.iconText}>{props.weather.windSpeed}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.iconWithText}>
              <Icon name="gauge" style={styles.icon} />
              <Text style={styles.iconText}>{props.weather.pressure}</Text>
            </View>
            <View style={styles.iconWithText}>
              <Icon name="water" style={styles.icon} />
              <Text style={styles.iconText}>{props.weather.humidity}</Text>
            </View>
            <View style={styles.iconWithText}>
              <Icon name="heart" style={styles.icon} />
              <Text style={styles.iconText}>{props.weather.temperatureFeelsLike}</Text>
            </View>
            
          </View>
         </View>

      </View>
       
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 8,
    borderWidth: 2,
    borderColor:'rgba(200, 200, 200, 0.5)',
    marginBottom: 16,
    marginTop: 5,
    alignSelf: 'center',
    width: '75%', // 3/4 de la largeur de l'écran
  },
  titleContainer: {
    padding: 8,
  },
  title: {
    fontSize: 16, 
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  imageContainer: {
    marginRight: 16,
  },
  image: {
    width: 80,
    backgroundColor: 'blue',
    height: 80,
    borderRadius: 15,
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  iconWithText: {
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
    color: '#aba0e5',
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  iconText: {
    marginTop: 4,
    fontSize: 12,
    textAlign: 'center',
  },
  popupContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupText: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 8,
  },
  closeIcon: {
    fontSize: 20,
    color: '#333333',
  },
});
