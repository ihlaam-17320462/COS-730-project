//NOTE : Must still integrate with google maps search, need Api key to do
import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/stack";
import * as Yup from "yup";
import * as Location from 'expo-location';

import Screen from "../components/Screen";
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from "../components/forms";
import AppFormLocation from "../components/forms/AppFormLocation";


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
            <Screen style={styles.container}>
                
                <AppForm
                    initialValues={{ pickup: null, dropoff: null , vehicle: null}}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <AppFormLocation
                        label="Pickup Location"
                        name="pickup"
                        placeholder="Pickup Location"
                    />
                    <AppFormLocation
                        label="Dropoff Location"
                        name="dropoff"
                        placeholder="Dropoff Location"
                    />

                    <AppFormPicker items={vehicle_types} name = "vehicle" placeholder = "Vehicle Type" AppFormPicker/>
                    <AppFormField
                                name = "username"
                                autoCorrect = {false}
                                placeholder = "Username"/>
                    <AppFormField
                                name = "password"
                                autoCorrect = {false}
                                placeholder = "Password (cm)"/>
                    <SubmitButton title = "Next" width = "70%"/>     
                </AppForm>
            </Screen>
        );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "90%",
    alignItems: "center",
    alignContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  picker: {
      position: "absolute",
      bottom: 20,
  },
});

export default CustRequestsScreen;