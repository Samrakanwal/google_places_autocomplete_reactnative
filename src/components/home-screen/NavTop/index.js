import * as React from 'react';
import {Image} from 'react-native';
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import {GOOGLE_API_KEY} from "@env"

import {useAppDispatch} from "../../../store";
import {setDestination, setOrigin} from "../../../store/storee/navSlice";


const NavTop = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <Image
        style={{
          width: 100,
          height: 100,
          resizeMode: 'contain'
        }}
        source={{uri: "https://assets.turbologo.com/blog/en/2021/01/19084033/google-places-logo.png"}}
      />

      <GooglePlacesAutocomplete
        placeholder="Where from?"
        enablePoweredByContainer={false}
        minLength={2}
        fetchDetails={true}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={300}
        predefinedPlaces={[{
          geometry: {location: {lat: 25.19736201299978, lng:55.27443004070167}},
          description: 'Dubai, Burj khalifa'
        }]}
        onPress={(data, detail) => {
          dispatch(setOrigin({
            location: detail.geometry.location,
            description: data.description,
          }));
          dispatch(setDestination(null));
        }}
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            fontSize: 18,
          }
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: 'en'
        }}
      />
    </>
  )
};

export default NavTop;