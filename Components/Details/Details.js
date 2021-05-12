import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Keyboard, StyleSheet, Text, View, ScrollView } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { TextInput } from 'react-native-paper';

const Details = (props) => {
    let typeofWorkout = props.route.params.typeofWorkout;
    const [nameOfWorkout, setNameOfWorkout] = useState("");
    const [durationOfWorkout, setDurationOfWorkout] = useState("");

    let caloriesBurned = 0;

    switch(typeofWorkout){
        case 'GYM':
            caloriesBurned = 2 * durationOfWorkout
        case 'RUNNING':
            caloriesBurned = 6 * durationOfWorkout
        case 'BIKING':
            caloriesBurned = 3.5 * durationOfWorkout
        case 'SWIMMING':
            caloriesBurned = 3 * durationOfWorkout

    }


    const submit = () => {
        if(nameOfWorkout == "" || durationOfWorkout == ""){
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
            props.addWorkout(nameOfWorkout, durationOfWorkout, caloriesBurned);
            props.navigation.pop();
            props.navigation.pop();
        }
    }
    // console.log(caloriesBurned);


    return (
        <TouchableWithoutFeedback style={{width: '100%', height: '100%', alignItems: 'center'}} onPress={Keyboard.dismiss}>
            <TextInput  theme={{ colors: {primary: '#0096FF',underlineColor:'transparent'}}} onChangeText={setNameOfWorkout} value={nameOfWorkout} mode="outlined" label='Name Of Workout' style={[styles.input, {marginTop: 100}]}/>
            <TextInput keyboardType={'numeric'}  theme={{ colors: {primary: '#0096FF',underlineColor:'transparent'}}} onChangeText={setDurationOfWorkout} value={durationOfWorkout} mode="outlined" label='Duration In Minutes' style={[styles.input]}/>
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
        // addWorkout: (name, duration)
        addWorkout: (nameOfWorkout, duration, caloriesBurned) => dispatch({ type: 'ADD_WORKOUT', workout: {name: nameOfWorkout, duration: duration, caloriesBurned: caloriesBurned}}),
        // decreaseCalories: () => dispatch({ type: 'DECREASE_CALORIES' })
    }
}

// export default Home;
export default connect(mapStateToProps, mapDispatchToProps)(Details);

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     width: '100%',
    //     height: '100%',
    //     backgroundColor: '#fff',
    //     // alignItems: 'center',
    //     // justifyContent: 'center',
    // },
    workout: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: 200,
        backgroundColor: 'green',
        margin: 20,
    },
    input: {
        width: '60%',
        height: 50,
        // borderColor: 'white',
        // backgroundColor: 'blue',
        margin: 20
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
});
