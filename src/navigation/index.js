import * as React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";


const Stack = createNativeStackNavigator();

const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="MapScreen" component={MapScreen} options={{headerShown: false}}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Navigation;