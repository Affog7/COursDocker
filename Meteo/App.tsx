import React from 'react';
import { Provider, useSelector } from 'react-redux'
import { SafeAreaView, ScrollView, View} from 'react-native';
import store from './Actions/store';
import Navigation from './Components/Navigation';
import { WeatherCard } from './Components/WeatherCard';
import { CITIES_DATA, WEATHER_DATA } from './data/stub';
 
const Card = () => {
  

  // Get nounours data from the current application state


  return (
    
  
 
    <>
      {/* Bind your application store to the Provider store */}
      <Provider store={store}>
       
          <Navigation></Navigation>
       
      </Provider>
    </>
 
    
    
 
  );
};

 

export default Card;
