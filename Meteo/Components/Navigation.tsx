// Navigation.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements'; 
import Details from '../Screens/Details';
import Home from '../Screens/Home';
import Favorites from '../Screens/Favorites';
import { NavigationContainer } from '@react-navigation/native';
import Favorite from '../Screens/Favorite';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      
      component={Home}
      options={({ navigation }) => ({
         headerRight: () => (
          <Icon
            name="stars"
            onPress={() => navigation.navigate('Favorite')}
          />
        ),
      })}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={({ navigation }) => ({
        title: 'Détails',
        headerRight: () => (
          <Icon
            name="favorite"
            onPress={() => navigation.navigate('Favorite')}
          />
        ),
      })}
    />

<Stack.Screen
      name="Favorite"
      component={Favorite}
      options={({ navigation }) => ({
        title: 'Favoris',
      })}
    />
  </Stack.Navigator>
);

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Accueil',
            tabBarIcon: () => (
              <Icon name="home" type="material" color='#aba0e5' />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarLabel: 'Favoris',
            tabBarIcon: () => (
              <Icon name="favorite" type="material" color='#aba0e5' />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
