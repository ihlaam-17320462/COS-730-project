import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CustAccountScreen from "../screens/CustAccountScreen";
import CustPaymentScreen from "../screens/CustPaymentScreen";
import CustActivityScreen from "../screens/ActivityScreen";
import colors from "../config/colours";

//NOTE : Where user can see their account details

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator 
    screenOptions={{ 
      headerStyle: { backgroundColor: colors.primary},
      headerTintColor: colors.secondary,
  }}>
  <Stack.Screen name="Account" component={CustAccountScreen} />
  <Stack.Screen name="Payment" component={CustPaymentScreen} />
  <Stack.Screen name="Notification" component={CustActivityScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
