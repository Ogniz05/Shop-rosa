import React from 'react';
import { Product, ProductCard } from './ProductCard';

const DEMO_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Cappotto lana premium',
    price: 129.9,
    image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Giacca bomber',
    price: 89.9,
    image: 'https://images.unsplash.com/photo-1520975954732-35dd22f475f2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Maglione cashmere',
    price: 79.9,
    image: 'https://images.unsplash.com/photo-1520975928316-218f2ec790d1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Pantalone dritto',
    price: 59.9,
    image: 'https://images.unsplash.com/photo-1520975693416-d1e281eda33a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Camicia oversize',
    price: 49.9,
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '6',
    name: 'Sneakers minimal',
    price: 99.9,
    image: 'https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=1200&auto=format&fit=crop',
  },
];

export const ProductList: React.FC<{ items?: Product[] }> = ({ items = DEMO_PRODUCTS }) => {
  return (
    <div className="container">
      <div className="row g-4">
        {items.map((p) => (
          <div key={p.id} className="col-6 col-md-4 col-lg-3">
            <ProductCard {...p} />
          </div>
        ))}
      </div>
    </div>
  );
};
