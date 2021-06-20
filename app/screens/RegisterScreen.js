import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import Screen from "../components/Screen";
import AppText from '../components/AppText';

function RegisterScreen(props) {
    return (
        <Screen>
        <ImageBackground 
            style = {styles.background}
            resizeMode = "center"
            source = {require('../assets/progress_pana.png')}
        >
        <View style={styles.text}>
            <AppText>Page in Progress</AppText>
        </View>            
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

});

export default RegisterScreen;
