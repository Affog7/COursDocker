import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Weather } from '../data/stub';

 
const Ajout = ({route}) => {

   
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenu sur mon application  {route.params.weather.city.name} </Text>
      <Button
        title="Démarrez ici"
        onPress={() => {
          // Logique à exécuter lors de l'appui sur le bouton
          console.log("Le bouton a été appuyé !");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Ajout;
