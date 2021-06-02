import React, {useState} from 'react';
import { ImageBackground, StyleSheet, View, Text, TextInput} from 'react-native';
import AppButton from '../components/AppButton';
import AppPicker from '../components/AppPicker';

const user_types = [
    { label : "Driver", value : 1},
    { label : "Customer", value : 2},
];

const [user_type, set_user_type] = useState();

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            style = {styles.background}
            source = {require('../assets/Messenger-pana.png')}
        >
            <View style = {styles.loginContainer}>
                <AppPicker 
                    selectedItem = {user_type}
                    onSelectItem = {item => set_user_type(item)}
                    items = {user_types}
                    placeholder = "Type of user" ></AppPicker>
                <AppTextInput 
                    value = {text}
                    placeholder = "Username/Email"
                    textContentType = {username}
                />
                <AppTextInput 
                    value = {text}
                    placeholder = "Password"
                    textContentType = {password}
                    secureTextEntry = {true}
                />
                <AppButton title = "Sign In" />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginContainer: {
        padding : 20,
        width : "100%",
    },

});


export default WelcomeScreen;