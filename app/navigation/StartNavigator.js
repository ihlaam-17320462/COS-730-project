import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import CustRequestsScreen from "../screens/CustRequestsScreen";

const Stack = createStackNavigator();

const StartNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ 
          headerShown: false}}     
    />
    <Stack.Screen name="Requests" component={CustRequestsScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

export default StartNavigator;