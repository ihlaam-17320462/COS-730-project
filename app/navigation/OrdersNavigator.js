import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CustOrderListScreen from "../screens/CustOrderListScreen";
import colors from "../config/colours";


const Stack = createStackNavigator();

const OrdersNavigator = () => (
  <Stack.Navigator 
    screenOptions={{ 
      headerStyle: { backgroundColor: colors.primary},
      headerTintColor: colors.secondary,}}
  > 

  </Stack.Navigator>
);

export default OrdersNavigator;