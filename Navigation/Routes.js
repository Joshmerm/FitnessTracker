import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Components/Home/Home';
import WorkoutScreen from '../Components/WorkoutScreen';
import AddNewWorkout from '../Components/AddNewWorkout';
import Calories from '../Components/Calories';
import AddMeal from '../Components/AddMeal';

import Details from '../Components/Details/Details';

const Stack = createStackNavigator();


const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="WorkoutScreen" component={WorkoutScreen} />
        <Stack.Screen name="AddNewWorkout" component={AddNewWorkout} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Calories" component={Calories} />
        <Stack.Screen name="AddMeal" component={AddMeal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;