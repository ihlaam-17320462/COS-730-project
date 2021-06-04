import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CustTrackingScreen from "../screens/CustTrackingScreen";

//NOTE : Where user can see all previous orders

const Stack = createStackNavigator();

const OrdersNavigator = () => (
  <Stack.Navigator >
    <Stack.Screen name="TrackDelivery" component={CustTrackingScreen} />
  </Stack.Navigator>
);

export default OrdersNavigator;
