import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CustAccountScreen from "../screens/CustAccountScreen";
import ActivityScreen from "../screens/ActivityScreen";

//NOTE : Where user can see their account details

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator >
    <Stack.Screen name="Account" component={CustAccountScreen} />
    <Stack.Screen name="Notifications" component={ActivityScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
