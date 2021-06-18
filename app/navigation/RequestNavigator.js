import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CustRequestsScreen from "../screens/CustRequestsScreen";
import CustOrderDetailsScreen from "../screens/CustOrderDetailsScreen";
import CustCreateOrderScreen from "../screens/CustCreateOrderScreen";
import CustTrackingScreen from "../screens/CustTrackingScreen";
import colors from "../config/colours";

//NOTE : Home screen, where user can create a new request 

const Stack = createStackNavigator();

const RequestNavigator = () => (
  <Stack.Navigator 
    screenOptions={{ 
      headerStyle: { backgroundColor: colors.primary},
      headerTintColor: colors.secondary,
    }}
  > 

  <Stack.Screen name="Track" component={CustTrackingScreen} />
  </Stack.Navigator>
);

export default RequestNavigator;