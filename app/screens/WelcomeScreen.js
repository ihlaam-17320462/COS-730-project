import React, {useState} from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, TouchableNativeFeedback} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';


import ErrorMessage from "../components/ErrorMessage";
import AppButton from "../components/AppButton";
import AppPicker from "../components/AppPicker";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";

//NOTE : not sure how to include the picker in Formik and for validation in Yup

const user_types = [
    { label : "Driver", value : 1},
    { label : "Customer", value : 2},
];

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });
  


function WelcomeScreen(props) {

    const [user_type, set_user_type] = useState();
    return (
        <ImageBackground 
            style = {styles.background}
            source = {require('../assets/Messenger-pana.png')}
        >
            <View style = {styles.loginContainer}>
                <Formik
                    initialValues={{ user_type: "", email: "", password: "" }}
                    onSubmit={(values) => console.log(values)}
                    validationSchema={validationSchema}
                >
                    {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                     <>
                        <AppPicker 
                        selectedItem = {user_type}
                        onSelectItem = {item => set_user_type(item)}
                        items = {user_types}
                        placeholder = "Driver/Customer" 
                        />
                        <AppFormField
                        autoCapitalize = "none"
                        autoCorrect = {false}
                        keyboardType = "email-address"
                        name = "email"
                        placeholder = "Email"
                        textContentType = "emailAddress"
                        />
                        <AppFormField
                        autoCapitalize = "none"
                        autoCorrect = {false}
                        name = "password"
                        placeholder = "Password"
                        textContentType = "password"
                        secureTextEntry
                        />
                        <AppButton title = "Sign In" onPress = {handleSubmit} />
                     </>   
                    )}
                </Formik>
            </View>
            <AppButton title = "Don't have an account yet?" onPress = {() => console.log("Create new user")} borderRadius = "1"/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex : 1,
        justifyContent : "flex-end",
        alignItems : "center",
    },
    loginContainer: {
        position : "absolute",
        top : 500,
        width : "80%",
        alignItems : "center",
    },
});


export default WelcomeScreen;