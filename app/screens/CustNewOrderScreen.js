//NOTE : Where a customer can create a new order by filling in package details 
//**Add field for user to upload optional image */
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
    width: Yup.string().required().label("Width"),
    length: Yup.string().required().label("Length"),
    height: Yup.object().required().label("Height"),
  });
  
function CustNewOrderScreen(navigation) {
    return (
        <ImageBackground
            style = {styles.background}
            resizeMode = "contain"
            source = {require('../assets/FreeShipping-rafiki.png')}
        >
        <View style = {styles.container}>
                <AppForm
                    initialValues={{ width: "", length: "", height: "", image: null }}
                    onSubmit={(values) => console.log(values)}
                    validationSchema={validationSchema}                    
                >
                <AppFormField
                    name = "width"
                    autoCorrect = {false}
                    keyboardType = "decimal-pad"
                    placeholder = "Width (cm)"
                />
                <AppFormField
                    name = "length"
                    autoCorrect = {false}
                    keyboardType = "decimal-pad"
                    placeholder = "Length (cm)"     
                />
                <AppFormField
                    name = "height"
                    autoCorrect = {false}
                    keyboardType = "decimal-pad"
                    placeholder = "Height (cm)"     
                />
                <SubmitButton title = "Create New Order" width = "80%" onPress = {() => navigation.navigate("CustOrderScreen")} />  
                </AppForm>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
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
});


export default CustNewOrderScreen;