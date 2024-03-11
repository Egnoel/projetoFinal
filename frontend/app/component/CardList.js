import React from 'react';
import Card from './Card';
import banana from '../assets/yellow-banana-fruit.jpg';
import pineapple from '../assets/pineapple.jpg';
import apple from '../assets/apple.jpg';
import orange from '../assets/orange.jpg';
import mango from '../assets/mango.jpg';

const CardList = () => {
  const products = [
    {
      id: 1,
      name: 'Banana',
      price: 2.5,
      image: banana,
      weight: '1kg',
    },
    {
      id: 2,
      name: 'Apple',
      price: 3.5,
      image: apple,
      weight: '1kg',
    },
    {
      id: 3,
      name: 'Orange',
      price: 2.0,
      image: orange,
      weight: '1kg',
    },
    {
      id: 4,
      name: 'Mango',
      price: 3.0,
      image: mango,
      weight: '1kg',
    },
    {
      id: 5,
      name: 'Pineapple',
      price: 4.0,
      image: pineapple,
      weight: '1kg',
    },
  ];
  return (
    <div className="flex flex-wrap w-full gap-4">
      {products.map((product) => (
        <Card
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          weight={product.weight}
        />
      ))}
    </div>
  );
};

export default CardList;
