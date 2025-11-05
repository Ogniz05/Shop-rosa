import React from 'react';
import { ProductList } from '../components/ProductList';

export const HomeScreen: React.FC = () => {
  return (
    <>
      {/* HERO */}
      <section className="hero mb-5 text-center">
        <div className="hero-banner">
          <h1>Nuova Collezione</h1>
          <p>Linee pulite, colori neutri, qualità senza compromessi.</p>
          <button className="btn btn-primary btn-sm">Scopri ora</button>
        </div>
      </section>

      {/* GRIGLIA PRODOTTI */}
      <section className="mb-5">
        <ProductList />
      </section>
    </>
  );
};
