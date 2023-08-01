import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from "@rneui/themed";
import {NavigationProp, useNavigation} from "@react-navigation/native";

import Map from "../../components/map-screen/Map";
import {createNativeStackNavigator} from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

const MapScreen = () => {
  const navigation = useNavigation;

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        className="bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full"
        activeOpacity={0.5}
      >
        <Icon name="menu"/>
      </TouchableOpacity>

    </View>
  )
};

export default MapScreen;