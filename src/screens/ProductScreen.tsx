import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import RootStackParamList from '../navigation/types';

type R = RouteProp<RootStackParamList, 'Product'>;
type Nav = NativeStackNavigationProp<RootStackParamList>;

export const ProductScreen: React.FC = () => {
  const route = useRoute<R>();
  const navigation = useNavigation<Nav>();
  const { id } = route.params;

  const productName = `Prodotto #${id}`;

  return (
    <div id="app-shell" className="container">
      {/* 🔙 Bottone “torna alla home” */}
      <button
        className="btn btn-outline-secondary mb-4"
        onClick={() => navigation.navigate('Home')}
      >
        ← Torna alla Home
      </button>

      {/* 🔷 Layout prodotto */}
      <div className="row g-4">
        <div className="col-12 col-md-6">
          <img
            src="https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1600&auto=format&fit=crop"
            alt={productName}
            style={{ width: '100%', borderRadius: 12 }}
          />
        </div>

        <div className="col-12 col-md-6">
          <h2 className="mb-2">{productName}</h2>
          <p className="text-muted">
            Descrizione breve del prodotto, materiali e vestibilità.
          </p>

          <div className="d-flex align-items-center gap-3 my-3">
            <span className="h4 m-0">€ 99,90</span>
            <button className="btn btn-primary">Aggiungi al carrello</button>
          </div>

          <hr />
          <p className="small text-muted">
            Composizione: 100% cotone. Lavaggio a 30°.
          </p>
        </div>
      </div>
    </div>
  );
};
