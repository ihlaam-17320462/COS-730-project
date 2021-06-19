//NOTE : Where a customer can create a new order by filling in package details 
//**Add field for user to upload optional image . does not work currently*/
import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, View, Image } from 'react-native';
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import * as Yup from 'yup';
import * as ImagePicker from 'expo-image-picker';

import AppButton from "../components/AppButton";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";
import requestApi from "../api/request";

const validationSchema = Yup.object().shape({
    width: Yup.string().required().label("Width"),
    length: Yup.string().required().label("Length"),
    height: Yup.string().required().label("Height"),
  });
  
function CustCreateOrderScreen({route,navigation}) {
    const [imageUri, setImageUri] = useState(null);

    
    const requestPermission = async () => {
        const {status} = await ImagePicker.requestCameraPermissionsAsync();
          if (status !== 'granted'){
              alert("Sorry, you need to enable permissions to access the library")
          };
        };

        useEffect(() => {
            requestPermission();
        }, []);
  
    const pickImage = async () => {
        try { 
            const result = await ImagePicker.launchImageLibraryAsync();
            if (!result.cancelled)
                setImageUri(result.uri);
        } catch (error) {
            console.log("Error reading image" , error);
        }
    }

    const handleSubmit = async (request) => {
        // if (!imageUri){
        //     return alert("Please select an image");
        // }
        const result =  await requestApi.addRequest({
            ...request,
            ...route.params,
        })
        if (!result.ok)
            return alert ("Could not save the request");
            alert ("Success");

            navigation.navigate("Orders");
    }
    

    return (
    <Screen>
        <AppForm
            initialValues={{ width: "", length: "", height: "", image: null }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}>
            <ImageBackground
                style = {styles.background}
                resizeMode = "contain"
                source = {require('../assets/send_gift.png')}
                >
                <View style = {styles.dimensionsContainer}>
                            <AppFormField
                                name = "width"
                                autoCorrect = {false}
                                placeholder = "Width (cm)"/>
                            <AppFormField
                                name = "length"
                                autoCorrect = {false}
                                placeholder = "Length (cm)"/>
                            <AppFormField
                                name = "height"
                                autoCorrect = {false}
                                placeholder = "Height (cm)"/>
                </View>
                <View style={styles.imageContainer}>
                    <AppButton title="Select an image from camera roll" onPress={pickImage} />
                    {imageUri && <Image source={{ uri: imageUri }} 
                    style={{ width: 100, height: 100 }} 
                    onPress = {() => {navigation.navigate("RequestList")}} />}
                </View>
                <View styles={styles.buttonContainer}>
                        <SubmitButton title = "Create New Order" width = "80%" onPress = {() => {navigation.navigate("OrderListScreen")}}/>
                </View>
            </ImageBackground>
        </AppForm>
    </Screen>
    );
}

const styles = StyleSheet.create({
    dimensionsContainer: {
        position: "absolute",
        top: 0,
        padding: 20,
        width : "90%",
        alignItems : "center",
        justifyContent : "center",
        position: "absolute",
    },
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    imageContainer: { 
        position: "absolute",
        bottom: 80,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    buttonContainer: {
        position: "absolute",
        bottom: 20,
        alignItems: 'center', 
        justifyContent: 'center',
    }
});


export default CustCreateOrderScreen;