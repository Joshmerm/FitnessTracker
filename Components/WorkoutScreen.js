import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

const Item = ({ name, duration }) => (
    <View style={styles.item}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.duration}>{duration}</Text>
    </View>
);


const WorkOutScreen = (props) => {

    const renderItem = ({ item }) => (
        <Item name={item.name} duration={item.duration} />
    );

    const [caloriesForMeal, setCaloriesForMeal] = useState(20);
    return (
        <SafeAreaView style={styles.container}>
            <Text>Calories Burned: {props.caloriesBurned}</Text>
            <TouchableOpacity style={styles.addNewWorkout} onPress={() => props.navigation.navigate("AddNewWorkout")}>
                <Text style={{fontWeight: 'bold', color: 'white'}}>Add New Workout</Text>
            </TouchableOpacity>

            <FlatList
                data={props.workouts}
                renderItem={renderItem}
                keyExtractor={item => item.name}
            />
        </SafeAreaView>
    );
}


function mapStateToProps(state) {
    return {
        workouts: state.workouts,
        caloriesBurned: state.caloriesBurned,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

// export default Home;
// export default 
export default connect(mapStateToProps, mapDispatchToProps)(WorkOutScreen);

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
    calories: {
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
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    addNewWorkout:{
        width: "80%",
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        height: 100
    }
});