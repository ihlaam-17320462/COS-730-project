import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import CustRequestsScreen from "../screens/CustRequestsScreen";
import CustCreateOrderScreen from "../screens/CustCreateOrderScreen";
import colors from "../config/colours";
import CustOrderListScreen from "../screens/CustOrderListScreen";

//NOTE : Home screen, where user can create a new request 

const Stack = createStackNavigator();

const RequestNavigator = () => (
      <Stack.Navigator 
        screenOptions={{ 
          headerStyle: { backgroundColor: colors.primary},
          headerTintColor: colors.secondary,
        }}
      > 
      <Stack.Screen name="Requests" component={CustRequestsScreen} options={{headerLeft: null, headerTitle: "Request"}} />
      <Stack.Screen name="CreateOrder" component={CustCreateOrderScreen} options={{headerTitle: "Create Order"}}/>
      <Stack.Screen name="Orders" component={CustOrderListScreen} options={{headerLeft: null}}/>
      </Stack.Navigator>

);

export default RequestNavigator;