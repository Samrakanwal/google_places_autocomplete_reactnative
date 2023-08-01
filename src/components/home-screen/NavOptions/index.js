import * as React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {Icon} from "@rneui/themed";

import {useAppSelector} from "../../../store";
import {selectOrigin} from "../../../store/storee/navSlice";


const data = [
  {
    id: "1",
    title: "Get a ride",
    image: "https://assets.turbologo.com/blog/en/2021/01/19084033/google-places-logo.png",
    screen: "MapScreen"
  },
  
]

const NavOptions = () => {
  const navigation = useNavigation;
  const origin = useAppSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      horizontal={true}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          disabled={!origin}
          activeOpacity={0.5}
         onPress={() => navigation.navigate(item.screen)}
        >
          <View className={`${!origin && "opacity-20"}`}>
            <Image
              style={{width: 120, height: 120, resizeMode: "contain"}}
              source={{uri: item.image}}
            />
            <Text >{item.title}</Text>

          </View>
          <View >
            <Icon name="arrowright" color="white" type="antdesign"/>
          </View>
        </TouchableOpacity>
      )}
    />
  )
};

export default NavOptions;