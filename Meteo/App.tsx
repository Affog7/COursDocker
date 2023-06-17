import React from 'react';
import { Provider, useSelector } from 'react-redux'
import { SafeAreaView, ScrollView, View} from 'react-native';
 import Navigation from './Components/Navigation';
import { WeatherCard } from './Components/WeatherCard';
import { CITIES_DATA, WEATHER_DATA } from './data/stub';
import store from './redux/store';
 
const Card = () => {
  
 

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
