import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CustOrderScreen from "../screens/CustOrdersScreen";

//NOTE : Home screen, where user can create a new request 

const Stack = createStackNavigator();

const OrdersNavigator = () => (
  <Stack.Navigator >
    <Stack.Screen name="Orders" component={CustOrdersScreen} /> 
  </Stack.Navigator>
);

export default OrdersNavigator;