import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getImageSource, getTemperatureColor } from './ImageWeatherType';
import { ButtonGroup } from 'react-native-elements';

export class FavoriteWeather extends React.Component {
  render() {
    const { weather, city } = this.props;

    const temperatureColor = getTemperatureColor(weather._temperature);

    return (
      <View style={[styles.container, styles.favoriteContainer]}>
        <View style={styles.column}>
          <Text style={styles.date}>{weather._at}</Text>
          <View style={styles.imageContainer}>
            <Image
              source={getImageSource(weather._weatherType)}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.weatherType}>{weather._weatherType}</Text>
        </View>
        <View style={styles.column}>
          <View style={styles.infoContainer}>
            <View style={styles.iconWithText}>
              <Ionicons name="thermometer-outline" size={24} style={styles.icon} />
              <Text style={[styles.iconText, { color: temperatureColor }]}>
                {weather._temperature} °C
              </Text>
            </View>
            <View style={styles.iconWithText}>
              <Ionicons name="speedometer-outline" size={24} style={styles.icon} />
              <Text style={styles.iconText}>{weather._windSpeed}</Text>
            </View>
            <View style={styles.iconWithText}>
              <Ionicons name="bar-chart-outline" size={24} style={styles.icon} />
              <Text style={styles.iconText}>{weather._pressure}</Text>
            </View>
            <View style={styles.iconWithText}>
              <Ionicons name="heart-outline" size={24} style={styles.icon} />
              <Text style={styles.iconText}>{weather._temperatureFeelsLike}</Text>
            </View>
          </View>
        </View>
        <View style={styles.column}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Ionicons name="trash-outline" size={24} color="#ffffff" style={styles.buttonIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="#ffffff"
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    marginBottom: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: Dimensions.get('window').width,
  },
  favoriteContainer: {
    backgroundColor: '#ffddcc',
  },
  column: {
    flex: 1,
    paddingRight: 8,
    alignItems: 'center',
  },
  date: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
    color: 'blue',
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 10,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  weatherType: {
    fontSize: 18,
    textAlign: 'center',
  },
  infoContainer: {
    justifyContent: 'center',
  },
  iconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 5,
  },
  iconText: {
    fontSize: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff6600',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 10,
  },
  buttonIcon: {
    marginRight: 5,
  },
});
