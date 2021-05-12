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
            <TouchableOpacity style={[styles.workout, {backgroundColor: '#FFA500'}]} onPress={() => {
                    // props.navigation.setParams({typeofWorkout: 'GYM'}),
                    props.navigation.navigate('Details', {typeofWorkout: 'GYM'})} 
                }>
                <Text style={{fontSize: 30, fontWeight: 'bold', fontWeight: 'bold', color: 'white',}}>
                    GYM
                </Text>
                <Text style={{fontSize: 10, fontWeight: 'bold', fontWeight: 'bold', color: 'white',}}>
                    2 Calories Per Minute
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.workout, {backgroundColor: '#9370DB'}]} onPress={() => {
                    // props.navigation.setParams({typeofWorkout: 'GYM'}),
                    props.navigation.navigate('Details', {typeofWorkout: 'RUNNING'})} 
                }>
                <Text style={{fontSize: 30, fontWeight: 'bold', fontWeight: 'bold', color: 'white',}}>
                    RUNNING
                </Text>
                <Text style={{fontSize: 10, fontWeight: 'bold', fontWeight: 'bold', color: 'white',}}>
                    6 Calories Per Minute
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.workout, {backgroundColor: '#00ff00'}]} onPress={() => {
                    // props.navigation.setParams({typeofWorkout: 'GYM'}),
                    props.navigation.navigate('Details', {typeofWorkout: 'BIKING'})} 
                }>
                <Text style={{fontSize: 30, fontWeight: 'bold', fontWeight: 'bold', color: 'white',}}>
                    BIKING
                </Text>
                <Text style={{fontSize: 10, fontWeight: 'bold', fontWeight: 'bold', color: 'white',}}>
                    3.5 Calories Per Minute
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.workout, {backgroundColor: '#0096FF'}]} onPress={() => {
                    // props.navigation.setParams({typeofWorkout: 'GYM'}),
                    props.navigation.navigate('Details', {typeofWorkout: 'SWIMMING'})} 
                }>
                <Text style={{fontSize: 30, fontWeight: 'bold', fontWeight: 'bold', color: 'white',}}>
                    SWIMMING
                </Text>
                <Text style={{fontSize: 10, fontWeight: 'bold', fontWeight: 'bold', color: 'white',}}>
                    3 Calories Per Minute
                </Text>
            </TouchableOpacity>
            <View style={{marginBottom: 100}}/>

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
        margin: 20,
        shadowColor: '#000000', 
        shadowOffset: {width: 4, height: 4}, 
        shadowOpacity: 0.4, 
        shadowRadius: 7, 
        elevation: 10,
        borderRadius: 17,
        borderColor: 'blue'
    }
});
