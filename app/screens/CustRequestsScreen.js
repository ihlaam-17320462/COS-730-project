//NOTE : Must still integrate with google maps search, need Api key to do
import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";


import * as Location from 'expo-location';

import Screen from "../components/Screen";
import TimePicker from "../components/DateTimePicker";
import { AppForm, AppFormPicker, SubmitButton } from "../components/forms";
import AppFormLocation from "../components/forms/AppFormLocation";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";


const vehicle_types = [
    { label : "Scooter", value : 1} ,
    { label : "Car", value : 2},
    { label : "Open Bakkie", value : 3},
];

const validationSchema = Yup.object().shape({
  pickup: Yup.object().required().nullable().label('Pickup Location'),
  dropoff: Yup.object().required().nullable().label("Dropoff Address"),
  vehicle: Yup.object().required().nullable().label("Vehicle Type"),
  
});

function CustRequestsScreen({navigation}) {
        //getting access to location
        const [location, setLocation] = useState(null);
        const [errorMsg, setErrorMsg] = useState(null);
        const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

        const handleSubmit = async (values) => {
            navigation.navigate("CreateOrder",{
                ...values
            });
        }

        useEffect(() => {
            (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            })();
        }, []);

        let text = 'Waiting..';
        if (errorMsg) {
            text = errorMsg;
        } else if (location) {
            text = JSON.stringify(location);
        }
        
        return (
            <Screen>                
                <AppForm
                    initialValues={{ pickup: null, dropoff: null , vehicle: null}}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}>
                <ImageBackground
                    style = {styles.background}
                    resizeMode = "contain"
                    source = {require('../assets/takeaway.png')}>
                    <View style = {styles.container}>
                        <AppFormLocation
                            label="Pickup Location"
                            name="pickup"
                            placeholder="Pickup Location"/>
                        <AppFormLocation
                            label="Dropoff Location"
                            name="dropoff"
                            placeholder="Dropoff Location"/>
                    </View>
                    {/* <View style={styles.picker}>
                        <AppFormPicker items={vehicle_types} name = "vehicle" placeholder = "Vehicle Type" AppFormPicker/>
                    </View> */}
                    <View>
                        <TimePicker />
                    </View>
                    <View styles={styles.buttonContainer}>
                        <SubmitButton title = "Continue" width = "100%" />
                    </View> 
                </ImageBackground>
                </AppForm>
            </Screen>
        );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    padding: 20,
    width : "90%",
    alignItems : "center",
    justifyContent : "center",
    position: "absolute",
  },
  picker: {
      position: "absolute",
      bottom: 100,
      width : "70%"
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
 },
 buttonContainer: {
    position: "absolute",
    bottom: 20,
    alignItems: 'center', 
    justifyContent: 'center',
}
});

export default CustRequestsScreen;