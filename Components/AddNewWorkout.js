import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Keyboard, StyleSheet, Text, View, ScrollView } from 'react-native';
import { TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

const AddNewWorkout = (props) => {
    const [nameOfWorkout, setNameOfWorkout] = useState("");
    // const [, setNameOfWorkout] = useState("");
    return (
        <ScrollView>
            <TouchableOpacity style={styles.workout} onPress={() => {
                    // props.navigation.setParams({typeofWorkout: 'GYM'}),
                    props.navigation.navigate('Details', {typeofWorkout: 'GYM'})} 
                }>
                <Text style={{fontWeight: 'bold', color: 'white'}}>
                    GAINS BROOO!!!!!!
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.workout} onPress={() => {}} >

            </TouchableOpacity> 
        </ScrollView>
        // <TouchableWithoutFeedback style={{width: '100%', height: '100%'}} onPress={Keyboard.dismiss}>
        //     <TextInput style={{ width: '80%', height: 100, backgroundColor: 'yellow' }} onChangeText={setNameOfWorkout} value={nameOfWorkout}>

        //     </TextInput>
        //     <TextInput style={{ width: '80%', height: 100, backgroundColor: 'yellow' }} onChangeText={setNameOfWorkout} value={nameOfWorkout}>

        //     </TextInput>
        // </TouchableWithoutFeedback>
    );
}

function mapStateToProps(state) {
    return {
        calories: state.calories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseCalories: (caloriesForMeal) => dispatch({ type: 'INCREASE_CALORIES', add: caloriesForMeal }),
        decreaseCalories: () => dispatch({ type: 'DECREASE_CALORIES' })
    }
}

// export default Home;
export default connect(mapStateToProps, mapDispatchToProps,)(AddNewWorkout);

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
