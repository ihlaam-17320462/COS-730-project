import React from 'react';
import { ImageBackground, StyleSheet, View} from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormField, AppFormPicker, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";
import AppButton from '../components/AppButton';


//two user types
const user_types = [
    { label : "Driver", value : 1},
    { label : "Customer", value : 2},
];

//validation schema using Yup
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
    user: Yup.object().required().nullable().label("User Type")
  });
  

function WelcomeScreen({navigation}) {

    const handleLogin = async (values) => {
        navigation.navigate("Requests",{
            ...values
        });
    }

    return (
    <Screen>
        <ImageBackground 
            style = {styles.background}
            resizeMode = "cover"
            source = {require('../assets/delivery_man.png')}
        >
            <View style = {styles.loginContainer}>
                <AppForm
                    initialValues={{ user: null, email: "", password: "" }}
                    onSubmit={handleLogin}
                    validationSchema={validationSchema}
                >
                  <AppFormPicker 
                        items = {user_types}
                        name = "user"
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
                        <SubmitButton title = "Sign In" width = "50%" />     
                </AppForm>
            </View>
            <AppButton title = "Don't have an account yet?" style={styles.registerButton} onPress = {() => {navigation.navigate("Register")}}/>    
        </ImageBackground>
    </Screen>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginContainer: {
        padding : 5,
        width : "80%",
        alignItems : "center",
    },
    registerButton: {
        padding : 5,
        width : "200%",
        alignItems : "center",
    },

});


export default WelcomeScreen;