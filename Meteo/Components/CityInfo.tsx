import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { City } from '../data/stub';
type infoProps = {
    city : City
}

const CityInfo = ( infoProps ) => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.label}>City:</Text>
        <Text style={styles.value} testID="city_name">{infoProps.city.name}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.value}>{infoProps.city.latitude}</Text>
         <Text style={styles.value}>{infoProps.city.longitude}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#eec',
    padding: 5
  },
  column: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  value: {
    fontSize: 14,
  },
});

export default CityInfo;
