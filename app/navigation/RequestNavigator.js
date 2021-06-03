import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CustRequestsScreen from "../screens/CustRequestsScreen";
import CustQuoteScreen from "../screens/CustQuoteScreen";
import CustNewOrderScreen from "../screens/CustNewOrderScreen";
import CustDeliveryScreen from "../screens/CustDeliveryScreen";
import CustDeliveryInfoScreen from "../screens/CustDeliveryInfoScreen";



//NOTE : Home screen, where user can create a new request 

const Stack = createStackNavigator();

const RequestNavigator = () => (
  <Stack.Navigator >
    <Stack.Screen name="Requests" component={CustRequestsScreen} /> 
    <Stack.Screen name="Quoting" component={CustQuoteScreen} />
    <Stack.Screen name="NewOrder" component={CustNewOrderScreen} />
    <Stack.Screen name="Delivery" component={CustDeliveryScreen} />
    <Stack.Screen name="DeliveryInfo" component={CustDeliveryInfoScreen} />
  </Stack.Navigator>
);

export default RequestNavigator;