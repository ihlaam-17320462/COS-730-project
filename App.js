import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />  
    </NavigationContainer>
  );
}

//StartNavigator is for welcome/login/register screens
//AppNavigator is for customer home/account/delivery screens

