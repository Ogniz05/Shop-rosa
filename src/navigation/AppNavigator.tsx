import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import MainLayout from "../components/MainLayout";
import AboutScreen from "../screens/AboutScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import ProductScreen from "../screens/ProductScreen";
import ShopScreen from "../screens/ShopScreen";

export type RootStackParamList = {
  Home: undefined;
  Product: undefined;
  Login: undefined;
  Shop: undefined;
  About: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      {/* 🏠 Home con Header + Footer */}
      <Stack.Screen
        name="Home"
        component={() => (
          <MainLayout>
            <HomeScreen />
          </MainLayout>
        )}
      />

      {/* 🛍️ Shop */}
      <Stack.Screen
        name="Shop"
        component={() => (
          <MainLayout>
            <ShopScreen />
          </MainLayout>
        )}
      />

      {/* 👗 Product */}
      <Stack.Screen
        name="Product"
        component={() => (
          <MainLayout>
            <ProductScreen />
          </MainLayout>
        )}
      />

      {/* 👤 Login */}
      <Stack.Screen
        name="Login"
        component={() => (
          <MainLayout>
            <LoginScreen />
          </MainLayout>
        )}
      />

      {/* ℹ️ About Us */}
      <Stack.Screen
        name="About"
        component={() => (
          <MainLayout>
            <AboutScreen />
          </MainLayout>
        )}
      />
    </Stack.Navigator>
  );
};
