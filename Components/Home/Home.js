import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {connect} from 'react-redux';

const Home = (props) => {
    const [caloriesForMeal, setCaloriesForMeal] = useState(20);
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.workout}
                onPress={() => props.navigation.navigate("WorkoutScreen")}
                >
                <Text style={styles.text}>WorkOut</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.calories}
                onPress={() => props.navigation.navigate("Details")}
                >
                <Text style={styles.text}>Calories</Text>
            </TouchableOpacity>
            <Text>{props.calories}</Text>
            <TouchableOpacity 
                style={{width: 100, height: 100, backgroundColor: 'yellow'}} 
                onPress={() => props.increaseCalories(caloriesForMeal)}>

            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

function mapStateToProps(state){
    return{
        calories: state.calories
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        increaseCalories : (caloriesForMeal) => dispatch({type: 'INCREASE_CALORIES', add: caloriesForMeal}),
        decreaseCalories : () => dispatch({type: 'DECREASE_CALORIES'})
    }
}

// export default Home;
export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    workout: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: 200,
        backgroundColor: 'red',
    },
    calories:{
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: 200,
        backgroundColor: 'green', 
    },
    text: {
        fontWeight: '500',
        fontSize: 30,
        color: 'white'
    }
});
