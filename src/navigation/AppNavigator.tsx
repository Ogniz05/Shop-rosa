import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import RootStackParamList from './types';

// Componenti
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { PolicyScreen } from '../screens/PolicyScreen';
import { ProductScreen } from '../screens/ProductScreen';
import { TermsScreen } from '../screens/TermsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Header />

      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Terms" component={TermsScreen} />
        <Stack.Screen name="Policy" component={PolicyScreen} />
      </Stack.Navigator>

      <Footer />
    </NavigationContainer>
  );
};
