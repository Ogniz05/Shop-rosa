import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBrowserHistory } from 'history';
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

// Crea la history del browser
const history = createBrowserHistory();

// Definisci lo stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  const linking = {
    enabled: true,
    prefixes: ['/'],
    config: {
      screens: {
        Home: '',
        Login: 'login',
        Product: 'product/:id',
        Terms: 'terms',
        Policy: 'policy',
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Header />

      <main>
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
      </main>

      <Footer />
    </NavigationContainer>
  );
};
