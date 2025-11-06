import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import MainLayout from "../components/MainLayout";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import ProductScreen from "../screens/ProductScreen";

export type RootStackParamList = {
  Home: undefined;
  Product: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      {/* ✅ Home senza MainLayout (Header sarà gestito dentro la Home stessa) */}
      <Stack.Screen name="Home" component={HomeScreen} />

      {/* ✅ Le altre schermate usano MainLayout con Header + Footer */}
      <Stack.Screen
        name="Product"
        component={() => (
          <MainLayout>
            <ProductScreen />
          </MainLayout>
        )}
      />
      <Stack.Screen
        name="Login"
        component={() => (
          <MainLayout>
            <LoginScreen />
          </MainLayout>
        )}
      />
    </Stack.Navigator>
  );
};
