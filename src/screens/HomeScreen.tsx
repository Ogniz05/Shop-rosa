import React from 'react';
import { ProductList } from '../components/ProductList';

export const HomeScreen: React.FC = () => {
  return (
    <div>
      <h1>Nuova Collezione</h1>
      <p>Linee pulite, colori neutri, qualità senza compromessi.</p>
      <button>Scopri ora</button>
      <ProductList />
    </div>
  );
};
