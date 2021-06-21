import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import RegisterScreen from "./app/screens/RegisterScreen";
import colors from "./app/config/colours";
import CustRequestsScreen from "./app/screens/CustRequestsScreen";
import CustQuoteListScreen from "./app/screens/CustQuoteListScreen";
import CustOrderDetailsScreen from "./app/screens/CustOrderDetailsScreen";
import CustOrderListScreen from "./app/screens/CustOrderListScreen";



const Stack = createStackNavigator();

function App() {
    //main navigation for application, home page
  return(
    <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator
            screenOptions={{ 
              headerStyle: { backgroundColor: colors.primary},
              headerTintColor: colors.secondary,
            }}
        >
          <Stack.Screen name="Welcome" component={WelcomeScreen}  />
          <Stack.Screen name="Requests" component={AppNavigator} options={{headerShown: false}}/>
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
