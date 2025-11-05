import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import RootStackParamList from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const Footer: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  // ✅ Stile principale del footer
  const footerStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#212529',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem 0',
    fontSize: '0.9rem',
    zIndex: 10,
  };

  // ✅ Stile dei link (privacy, termini)
  const linkStyle: React.CSSProperties = {
    color: '#bbb',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    margin: '0 0.3rem',
  };

  // ✅ Hover dinamico per i link
  const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.currentTarget.style.color = '#fff';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.currentTarget.style.color = '#bbb';
  };

  return (
    <footer style={footerStyle}>
      <div>© {new Date().getFullYear()} MyShop — Tutti i diritti riservati</div>
      <div>
        <span
          style={linkStyle}
          onClick={() => navigation.navigate('Policy')}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Privacy Policy
        </span>
        {' | '}
        <span
          style={linkStyle}
          onClick={() => navigation.navigate('Terms')}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Termini e Condizioni
        </span>
      </div>
    </footer>
  );
};
