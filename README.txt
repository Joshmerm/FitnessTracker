Description:
The fitness tracker is a react native application that aims to keep track of how 
many calories you gain from eating meals and how many calories you lose from doing workouts by logging in the details of 
each meal or workout then it tallies up how many calories you gained and burned total.

Requirements:
Javscript
Utilizes useState(functional components)
Utilizes react Native using Expo
Flatlist is Utilized to display "meals" and "workouts"
ScrollView is used to display preset Workouts when adding a new Workout
TextInput is used to include users input for naming meals and workouts, and for duration or calorie count
Utilizes react-native-navigation for multipage app.  
Third party Dependecies are react-native-paper https://callstack.github.io/react-native-paper/ used for interesting Design and functionality of TextInput
Uses Redux to keep track of states i.e. Meals, Workouts, calories eaten, and calories burned.
Runs efficiently.
Runs on both IOS/Android 


How To Use:
The user starts off the on home page, home page will display calories eaten, calories burned, and calories total (caloriesEaten - caloriesBurned)
It will also have two buttons, one for the workouts, and one for calories

Workouts Page:
Can view all workouts, as well as total calories burned.  Click on add new workout to use a preset of workouts(calories burned per minute), then name it, add in duration (in minutes i.e. 20)
It will now pop back to workoutscreen where you can View all workouts(including the newly added one)

Calories Page:
Can view all meals with calorie information.  Add new meal, input the name of the meal (i.e. Breakfast) and calories for that meal (i.e. 500)
Once submitted, it will pop back to Calories page and display all meals(including the newly added one)

Pop back to home screen to get an overall health picture of what the day has looked like, you will see Total calories which includes all meals, and all workouts.