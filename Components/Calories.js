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
    const [shadowRadius, setShadowRadius] = useState(0);
    const [shadowOpacity, setShadowOpacity] = useState(0.1);
    return (
        <SafeAreaView style={styles.container}>
            <View style={[{margin: 20, height: 50, width: '60%', borderRadius: 7, alignSelf: 'center', justifyContent: 'center', backgroundColor: '#0096FF', shadowColor: '#00000', shadowOffset: {width: 4, height: 4}, shadowOpacity: 0.4, shadowRadius: 7, elevation: 10}]}>
                <Text style={styles.caloriesConsumed}>Calories Consumed: {props.calories}</Text>
            </View>
            <TouchableOpacity style={styles.addNewWorkout} onPress={() => props.navigation.navigate("AddMeal")}>
                <Text style={{ fontWeight: 'bold', color: 'white' }}>Add New Meal</Text>
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
    caloriesConsumed: {
        margin: 10,
        alignSelf: 'center',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
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
        width: '80%',
        alignSelf: 'center',
        backgroundColor: '#B0C4DE',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    addNewWorkout: {
        width: "60%",
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FA8072',
        borderColor: '#eb6959',
        borderWidth: 3,
        borderRadius: 10,
        height: 75,
        shadowColor: '#000000', 
        shadowOffset: {width: 4, height: 4}, 
        shadowOpacity: 0.7, 
        shadowRadius: 7, 
        elevation: 10,
        marginBottom: 20,
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    duration: {
        color: 'white',
        fontWeight: '600'
    }
});
