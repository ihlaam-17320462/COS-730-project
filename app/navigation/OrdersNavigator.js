import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CustOrderListScreen from "../screens/CustOrderListScreen";
import CustQuoteListScreen from "../screens/CustQuoteListScreen";
import CustOrderDetailsScreen from "../screens/CustOrderDetailsScreen";
import CustTrackingScreen from "../screens/CustTrackingScreen";

import colors from "../config/colours";


const Stack = createStackNavigator();

const OrdersNavigator = () => (
  <Stack.Navigator 
    screenOptions={{ 
      headerStyle: { backgroundColor: colors.primary},
      headerTintColor: colors.secondary,}}
  > 
  <Stack.Screen name="Orders" component={CustOrderListScreen} options={{headerLeft: null}}/> 
  <Stack.Screen name="QuoteList" component={CustQuoteListScreen} options={{headerTitle: "Quotes"}}/> 
  <Stack.Screen name="OrderDetails" component={CustOrderDetailsScreen} options={{headerTitle: "Quote Details"}}/> 
  <Stack.Screen name="Track" component={CustTrackingScreen} options={{headerTitle: "Track Delivery"}}/>
  </Stack.Navigator>
);

export default OrdersNavigator;