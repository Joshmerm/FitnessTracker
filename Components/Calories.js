import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

const Item = ({ name, calories }) => (
    <View style={styles.item}>
        <Text style={styles.name}>{name}</Text>

        <Text style={styles.duration}>Calories Eaten: {calories}</Text>
    </View>
);


const Calories = (props) => {

    const renderItem = ({ item }) => (
        <Item name={item.name} calories={item.calories} />
    );

    const [caloriesForMeal, setCaloriesForMeal] = useState(20);
    return (
        <SafeAreaView style={styles.container}>
            <Text>Calories Eaten: {props.calories}</Text>
            <TouchableOpacity style={styles.addNewWorkout} onPress={() => props.navigation.navigate("AddMeal")}>
                <Text style={{fontWeight: 'bold', color: 'white'}}>Add New Meal</Text>
            </TouchableOpacity>

            <FlatList
                data={props.meals}
                renderItem={renderItem}
                keyExtractor={item => item.name}
            />
        </SafeAreaView>
    );
}


function mapStateToProps(state) {
    return {
        meals: state.meals,
        calories: state.calories,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

// export default Home;
// export default 
export default connect(mapStateToProps, mapDispatchToProps)(Calories);

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
