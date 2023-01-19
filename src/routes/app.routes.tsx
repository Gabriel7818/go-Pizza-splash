import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from "../Screens/SingIn";
import { Home } from "../Screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
      <Screen name="Home" component={Home} options={{headerShown: false}}/>
    </Navigator>
  );
}