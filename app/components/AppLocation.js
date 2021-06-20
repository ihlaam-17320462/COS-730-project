import React from 'react';
import { View,StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_API_KEY} from '@env';
import defaultStyles from "../config/styles";

function AppLocation({onSelect, placeholder}){
    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                textInputProps={{
                    onChangeText: (text) => {
                        if (text.length === 0){
                            onSelect(null);
                        }
                    }
                }}
                placeholder={placeholder}
                enablePoweredByContainer={false}
                fetchDetails={true}
                onFail={(err) => {
                    console.log(err);
                    onSelect(null);
                }}
                onNotFound={(err) => {
                    console.log(err);
                    onSelect(null);
                }}
                onTimeout={(err) => {
                    console.log(err);
                    onSelect(null);
                }}
                onPress={(data,details = null) => {
                    onSelect({
                        address:details.formatted_address,
                        location: details.geometry.location
                    })
                }}
                query={{
                    key: GOOGLE_MAPS_API_KEY,
                    language: 'en',
                    components: 'country:za' //restrict to ZA
                }}
                styles={{
                    textInput:{
                        backgroundColor: defaultStyles.colors.accent2,
                        borderRadius: 25,
                    },
                    row:{
                        backgroundColor: defaultStyles.colors.accent2,
                    },
                    description:{
                        fontSize: 12
                    }
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: defaultStyles.colors.accent2,
      borderRadius: 25,
      flexDirection: "row",
      width: "100%",
      marginVertical: 10,
    },
    icon: {
      marginRight: 10,
    },
  });
  
  export default AppLocation;