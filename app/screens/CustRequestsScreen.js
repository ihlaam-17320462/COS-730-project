//NOTE : Must still integrate with google maps search, need Api key to do
import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import {NavigationContainer, useNavgiation} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/stack";
import * as Yup from "yup";
import * as Location from 'expo-location';

import Screen from "../components/Screen";
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from "../components/forms";

const vehicle_types = [
    { label : "Scooter", value : 1} ,
    { label : "Car", value : 2},
    { label : "Open Bakkie", value : 3},
];

const validationSchema = Yup.object().shape({
  pickup: Yup.string().required().label("Pickup Address"),
  dropoff: Yup.string().required().label("Dropoff Address"),
  vehicle: Yup.object().required().nullable().label("Vehicle Type")
});

function CustRequestsScreen(navigation) {
        //getting access to location
        const [location, setLocation] = useState(null);
        const [errorMsg, setErrorMsg] = useState(null);

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
        //
        return (
            <Screen style={styles.container}>
                <AppForm
                    initialValues={{ pickup: "", dropoff: "" , vehicle: null}}
                    onSubmit={(values) => console.log(values)}
                    validationSchema={validationSchema}
                >
                <AppFormField
                    name="pickup"
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoCompleteType="street-address"   
                    placeholder="Pickup Location"
                    textContentType="location"
                />
                <AppFormField
                    name="dropoff"
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoCompleteType="street-address"   
                    placeholder="Dropoff Location"
                    textContentType="location"
                />
                <AppFormPicker items={vehicle_types} name = "vehicles" placeholder = "Vehicle Type" AppFormPicker/>
                <SubmitButton title = "Next" width = "70%" onPress = {() => navigation.navigate("CreateOrder")} />     
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