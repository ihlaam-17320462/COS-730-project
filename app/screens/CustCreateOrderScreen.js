//NOTE : Where a customer can create a new order by filling in package details 
//**Add field for user to upload optional image . does not work currently*/
import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, View } from 'react-native';
import {NavigationContainer, useNavgiation} from "@react-navigation/native";
import * as Yup from 'yup';
import ImagePicker from 'expo-image-picker';

import AppButton from "../components/AppButton";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
    width: Yup.string().required().label("Width"),
    length: Yup.string().required().label("Length"),
    height: Yup.object().required().label("Height"),
  });
  
function CustCreateOrderScreen(route) {
    const [imageUri, setImageUri] = useState(null);
    const requestPermission = async () => {
        const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (!granted) alert("Sorry, you need to enable permissions to access the library");
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
    
    
    return (
    <Screen>
        <ImageBackground
            style = {styles.background}
            resizeMode = "contain"
            source = {require('../assets/FreeShipping-rafiki.png')}
        >
        <View style = {styles.dimensionsContainer}>
                <AppForm
                    initialValues={{ width: "", length: "", height: "", image: null }}
                    validationSchema={validationSchema}>
                    <AppFormField
                        name = "width"
                        autoCorrect = {false}
                        keyboardType = "decimal-pad"
                        placeholder = "Width (cm)"/>
                    <AppFormField
                        name = "length"
                        autoCorrect = {false}
                        keyboardType = "decimal-pad"
                        placeholder = "Length (cm)"/>
                    <AppFormField
                        name = "height"
                        autoCorrect = {false}
                        keyboardType = "decimal-pad"
                        placeholder = "Height (cm)"/>
                </AppForm>
        </View>
        <View style={styles.imageContainer}>
            <AppButton title="Select an image from camera roll" onPress={pickImage} />
            {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
        </View>
        <View styles={styles.buttonContainer}>
            <AppForm  onSubmit={(values) => console.log(values)}>
                <SubmitButton title = "Create New Order" width = "80%" onPress = {() => navigation.navigate("CustOrdersScreen")} />     
            </AppForm>
        </View>
        </ImageBackground>
    </Screen>
    );
}

const styles = StyleSheet.create({
    dimensionsContainer: {
        position: "absolute",
        top: 50,
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
        bottom: 200,
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