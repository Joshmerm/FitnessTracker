import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Home from './Components/Home/Home';
import Routes from './Navigation/Routes';
import {createStore} from 'redux';
import {Provider} from 'react-redux'; 

const initialState = {
  calories: 2,
  caloriesBurned: 0, 
  workouts: [
    {name: "Gym", duration: 30, caloriesBurned: 100}
  ],
  meals: [
    {name: "Breakfast", calories: 100}
  ]
} 



const reducer = (state = initialState, action) => {
  switch(action.type){
    // case 'INCREASE_CALORIES':
    //   return {calories: state.calories + action.add}
    // case 'DECREASE_CALORIES':
    //   return {calories: state.calories - 1}
    case 'ADD_WORKOUT':
      return {
        ...state,
        workouts: [...state.workouts, action.workout], caloriesBurned: state.caloriesBurned + action.workout.caloriesBurned}
    case 'ADD_MEAL':
      console.log(action.meal);
      return {
        ...state,
        meals: [...state.meals, action.meal], calories: state.calories + action.meal.calories}
  }
  return state;
}

const store = createStore(reducer);





export default App = () => {
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    );
}

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
