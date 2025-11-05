import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import RootStackParamList from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const Header: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const headerStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '60px',
    backgroundColor: '#212529',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 1rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    zIndex: 1000,
  };

  const navLinksStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1rem',
  };

  const linkStyle: React.CSSProperties = {
    cursor: 'pointer',
    color: '#ddd',
    fontWeight: 500,
  };

  return (
    <header style={headerStyle}>
      <span
        style={{ fontSize: '1.5rem', fontWeight: 700, cursor: 'pointer' }}
        onClick={() => navigation.navigate('Home')}
      >
        MyShop
      </span>

      <nav style={navLinksStyle}>
        <span style={linkStyle} onClick={() => navigation.navigate('Home')}>
          Home
        </span>
        <span style={linkStyle} onClick={() => navigation.navigate('Login')}>
          Login
        </span>
      </nav>
    </header>
  );
};
