import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Keyboard, StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { TextInput } from 'react-native-paper';

const AddMeal = (props) => {
    const [nameOfMeal, setNameOfMeal] = useState("");
    const [calories, setCalories] = useState("");

    const submit = () => {
        if(nameOfMeal == "" || calories == ""){
            Alert.alert(
                "Error",
                "Please Fill Out All The Information",
                [
                //   {
                //     text: "Cancel",
                //     onPress: () => console.log("Cancel Pressed"),
                //     style: "cancel"
                //   },
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
        }else{
            // console.log(props.addMeal);
            props.addMeal(nameOfMeal, calories);
            props.navigation.pop();
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={styles.container}>
            <TextInput  theme={{ colors: {primary: '#0096FF',underlineColor:'transparent'}}} mode="outlined" label='Meal Name' value={nameOfMeal} onChangeText={setNameOfMeal} style={[styles.input, {marginTop: 100}]}>

            </TextInput>
            <TextInput theme={{ colors: {primary: '#0096FF',underlineColor:'transparent'}}} mode="outlined" label="Calories" value={calories} onChangeText={setCalories} style={styles.input}/>

            {/* </TextInput> */}

            <TouchableOpacity style={styles.submit} onPress={submit}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                    Submit
                </Text>
            </TouchableOpacity>

        </TouchableWithoutFeedback>
    );
}


function mapStateToProps(state) {
    console.log(state);
    return {
        calories: state.calories
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addMeal: (nameOfMeal, calories) => dispatch({type: 'ADD_MEAL', meal: {name: nameOfMeal, calories: 1 * calories}})
        // addWorkout: (nameOfWorkout, duration, caloriesBurned) => dispatch({ type: 'ADD_WORKOUT', workout: {name: nameOfWorkout, duration: duration, caloriesBurned: caloriesBurned}}),
        // increaseCalories: (caloriesForMeal) => dispatch({ type: 'INCREASE_CALORIES', add: caloriesForMeal })
    }
}

// export default Home;
export default connect(mapStateToProps, mapDispatchToProps)(AddMeal);

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    input: {
        width: '60%',
        height: 50,
        // borderColor: 'white',
        // backgroundColor: 'blue',
        margin: 20
    },
    workout: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: 200,
        // backgroundColor: 'green',
        margin: 20,
    },
    submit: {
        width: 250,
        height: 50,
        borderRadius: 100,
        backgroundColor: '#FA8072',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    caloriesConsumed: {
        margin: 10,
        alignSelf: 'center',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }, 
});
