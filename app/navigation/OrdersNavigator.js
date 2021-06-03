import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CustDeliveryScreen from "../screens/CustDeliveryScreen";

//NOTE : Where user can see all previous orders

const Stack = createStackNavigator();

const OrdersNavigator = () => (
  <Stack.Navigator >
    <Stack.Screen name="Deliveries" component={CustDeliveryScreen} />
  </Stack.Navigator>
);

export default OrdersNavigator;
