import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

const Home = (props) => {
    const [caloriesForMeal, setCaloriesForMeal] = useState(20);
    return (
        <View style={styles.container}>
            <View style={[{ marginTop: 20, height: 50, width: '60%', borderRadius: 0, alignSelf: 'center', justifyContent: 'center', backgroundColor: '#0096FF', shadowColor: '#00000', shadowOffset: { width: 4, height: 4 }, shadowOpacity: 0.4, shadowRadius: 7, elevation: 10 }]}>
                <Text style={{color: 'white', fontWeight: 'bold', padding: 5}}>Total Calories Eaten: {props.calories}</Text>
            </View>
            <View style={[{ height: 50, width: '60%', borderRadius: 0, alignSelf: 'center', justifyContent: 'center', backgroundColor: '#0096FF', shadowColor: '#00000', shadowOffset: { width: 4, height: 4 }, shadowOpacity: 0.4, shadowRadius: 7, elevation: 10 }]}>
                <Text style={{color: 'white', fontWeight: 'bold', padding: 5}}>Total Calories Burned: {props.caloriesBurned}</Text>
            </View>
            <View style={[{ marginBottom: 20, height: 50, width: '60%', borderRadius: 0, alignSelf: 'center', justifyContent: 'center', backgroundColor: '#0096FF', shadowColor: '#00000', shadowOffset: { width: 4, height: 4 }, shadowOpacity: 0.4, shadowRadius: 7, elevation: 10 }]}>
                <Text style={{color: 'white', fontWeight: 'bold', padding: 5}}>Total Calories: {props.calories - props.caloriesBurned} </Text>
            </View>
            <View style={{flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity style={styles.workout}
                    onPress={() => props.navigation.navigate("WorkoutScreen")}
                >
                    <Text style={styles.text}>Workouts</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.calories}
                    onPress={() => props.navigation.navigate("Calories")}
                >
                    <Text style={styles.text}>Calories</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center', marginTop: 20,}}>
                <Text style={styles.big}>Created By Group 2</Text>
                <Text style={{fontSize: 15, fontWeight: '800'}}>Karen Kazaryan, Josh Mermelstein</Text>
                <Text style={{fontSize: 15, fontWeight: '800'}}>John Rodriguez, Robin Mok</Text>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

function mapStateToProps(state) {
    return {
        calories: state.calories,
        caloriesBurned: state.caloriesBurned
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return{
//         increaseCalories : (caloriesForMeal) => dispatch({type: 'INCREASE_CALORIES', add: caloriesForMeal})
//     }
// }

// export default Home;
export default connect(mapStateToProps)(Home);

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
        width: 150,
        height: 150,
        margin: 10,
        borderRadius: 75,
        borderColor: '#9F2B68',
        borderWidth: 4,
        backgroundColor: '#303030',
    },
    calories: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        margin: 10,
        borderRadius: 75,
        borderColor: '#303030',
        borderWidth: 4,
        backgroundColor: '#5D3FD3',
    },
    text: {
        fontWeight: '500',
        fontSize: 30,
        color: 'white'
    },
    big: {
        fontSize: 30,
        fontWeight: 'bold'
    }
});
