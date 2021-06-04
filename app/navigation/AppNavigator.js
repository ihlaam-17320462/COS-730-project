import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import RequestNavigator from "./RequestNavigator";
import OrdersNavigator from "./OrdersNavigator";
import AccountNavigator from "./AccountNavigator";
import colours from "../config/colours";

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
        headerStyle: {backgroundColor: colours.primary},
        headerTintColor: colours.secondary,
    }}
    tabBarOptions = {{
        activeBackgroundColor : colours.primary,
        activeTintColor : colours.accent3,
        inactiveBackgroundColor : colours.primary,
        inactiveTintColor : colours.accent1,
    }}>
    <Tab.Screen
      name="Requests"
      component={RequestNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Orders"
      component={OrdersNavigator}
      options={({ 
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="form-select" color={color} size={size} />
        ),
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
