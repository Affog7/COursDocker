// Navigation.js

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Ajout from '../Screens/Ajout';
import Details from '../Screens/Details';

 
   export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details"  component={Ajout}/> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}

 