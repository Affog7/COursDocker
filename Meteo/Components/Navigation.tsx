// Navigation.js

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Details from '../Screens/Details';
import React from 'react';
import { Button, Icon } from 'react-native-elements';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Favorite from '../Screens/Favorites';

   export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    const Stack = createStackNavigator();
    const navigatiocn = useNavigation;
 
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home} options={{ title : 'Accueil',  headerRight: () => (
              <TouchableHighlight >
             <Icon name="stars"  />
            </TouchableHighlight>) }} />

        <Stack.Screen name="Details"  component={Details}   options={{
            title: 'Détails',
            headerRight: () => (
              <TouchableHighlight 
              >
               <Button title={"Favoris"} />
              </TouchableHighlight>
            )
          }}/> 
          <Stack.Screen name="Favorite"  component={Favorite}   options={{
            title: 'Favoris',
          }}/> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}
