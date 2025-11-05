import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import RootStackParamList from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const Footer: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <footer>
      <p>© {new Date().getFullYear()} MyShop — Tutti i diritti riservati</p>
      <p>
        <span onClick={() => navigation.navigate('Policy')}>Privacy Policy</span> |{' '}
        <span onClick={() => navigation.navigate('Terms')}>Termini e Condizioni</span>
      </p>
    </footer>
  );
};
