import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import RootStackParamList from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const Header: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <nav>
      <span onClick={() => navigation.navigate('Home')}>MyShop</span>
      <button onClick={() => navigation.navigate('Login')}>Login</button>
    </nav>
  );
};
