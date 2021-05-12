import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Keyboard, StyleSheet, Text, View, ScrollView } from 'react-native';
import { TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

const Details = (props) => {
    let typeofWorkout = props.route.params.typeofWorkout;
    const [nameOfWorkout, setNameOfWorkout] = useState("");
    const [durationOfWorkout, setDurationOfWorkout] = useState("");

    let caloriesBurned = 0;

    switch(typeofWorkout){
        case 'GYM':
            caloriesBurned = 0.7 * durationOfWorkout
    }

    console.log(caloriesBurned);


    return (
        <TouchableWithoutFeedback style={{width: '100%', height: '100%'}} onPress={Keyboard.dismiss}>
            <TextInput style={{ width: '80%', height: 100, backgroundColor: 'yellow' }} onChangeText={setNameOfWorkout} value={nameOfWorkout}>
            </TextInput>

            <TextInput style={{ width: '80%', height: 100, backgroundColor: 'blue' }} onChangeText={setDurationOfWorkout} value={durationOfWorkout}>

            </TextInput>

            <TouchableOpacity  style={{ width: '80%', height: 100, backgroundColor: 'orange' }} 
                    onPress={() => {props.addWorkout(nameOfWorkout, durationOfWorkout, caloriesBurned), props.navigation.pop(), props.navigation.pop()}}
                >
                <Text>Submit</Text>
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
    }
});
