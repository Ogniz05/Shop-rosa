import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import RootStackParamList from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Giacca di pelle',
    price: '€199',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3cbb?w=800',
  },
  {
    id: 2,
    name: 'Camicia bianca',
    price: '€49',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800',
  },
  {
    id: 3,
    name: 'Pantaloni beige',
    price: '€79',
    image: 'https://images.unsplash.com/photo-1544441892-24c1e9f0f0b4?w=800',
  },
  {
    id: 4,
    name: 'Sneakers classiche',
    price: '€89',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800',
  },
];

export const ProductList: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const container = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.5rem',
  };

  const card = {
    border: '1px solid #e9ecef',
    borderRadius: '16px',
    backgroundColor: '#fff',
    overflow: 'hidden',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const img = {
    width: '100%',
    height: '280px',
    objectFit: 'cover' as const,
    display: 'block',
  };

  const body = {
    textAlign: 'center' as const,
    padding: '1rem',
  };

  return (
    <div style={container}>
      {products.map((p) => (
        <div
          key={p.id}
          style={card}
          onClick={() => navigation.navigate('Product', { id: String(p.id) })}
        >
          <img src={p.image} alt={p.name} style={img} />
          <div style={body}>
            <h6 style={{ fontWeight: 600 }}>{p.name}</h6>
            <p style={{ color: '#6c757d' }}>{p.price}</p>
            <button className="btn btn-outline-dark btn-sm">Vedi Dettagli</button>
          </div>
        </div>
      ))}
    </div>
  );
};
