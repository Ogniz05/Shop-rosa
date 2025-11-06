import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import MainLayout from "../components/MainLayout";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import ProductScreen from "../screens/ProductScreen";
import ShopScreen from "../screens/ShopScreen";

export type RootStackParamList = {
  Home: undefined;
  Product: undefined;
  Login: undefined;
  Shop: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      {/* ✅ Tutte con MainLayout */}
      <Stack.Screen
        name="Home"
        component={() => (
          <MainLayout>
            <HomeScreen />
          </MainLayout>
        )}
      />
      <Stack.Screen
        name="Shop"
        component={() => (
          <MainLayout>
            <ShopScreen />
          </MainLayout>
        )}
      />
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
