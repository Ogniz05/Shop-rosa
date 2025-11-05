import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import RootStackParamList from '../navigation/types';

type Navigation = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export const ProductCard: React.FC<Product> = ({ id, name, price, image }) => {
  const navigation = useNavigation<Navigation>();

  return (
    <div className="card h-100 shadow-sm border-0">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          style={{
            width: '100%',
            height: 'auto',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
          }}
          onClick={() => navigation.navigate('Product', { id })}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
      </div>

      <div className="card-body text-center">
        <h6 className="fw-semibold mb-2">{name}</h6>
        <p className="fw-bold mb-3">€ {price.toFixed(2)}</p>
        <button
          className="btn btn-primary btn-sm w-100"
          onClick={() => alert(`Aggiunto al carrello: ${name}`)}
        >
          Aggiungi al carrello
        </button>
      </div>
    </div>
  );
};
