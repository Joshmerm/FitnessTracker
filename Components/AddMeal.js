import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Keyboard, StyleSheet, Text, View, ScrollView } from 'react-native';
import { TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

const AddMeal = (props) => {
    const [nameOfMeal, setNameOfMeal] = useState("");
    const [calories, setCalories] = useState("");
    return (
        <View style={styles.container}>
            <TextInput value={nameOfMeal} onChangeText={setNameOfMeal} style={styles.input}>

            </TextInput>
            <TextInput value={calories} onChangeText={setCalories} style={styles.input}>

            </TextInput>

            <TouchableOpacity style={styles.submit}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                    Submit
                </Text>
            </TouchableOpacity>

        </View>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseCalories: (caloriesForMeal) => dispatch({ type: 'INCREASE_CALORIES', add: caloriesForMeal })
    }
}

// export default Home;
export default connect(mapDispatchToProps,)(AddMeal);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    input: {
        width: '60%',
        height: 50,
        backgroundColor: 'yellow',
        margin: 20
    },
    workout: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: 200,
        backgroundColor: 'green',
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
    }
});
