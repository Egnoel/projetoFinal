import React from 'react';
import FilterComponent from '../component/FilterComponent';
import CardCarousel from '../component/CardCarousel';
import banana from '../assets/yellow-banana-fruit.jpg';
import pineapple from '../assets/pineapple.jpg';
import apple from '../assets/apple.jpg';
import orange from '../assets/orange.jpg';
import mango from '../assets/mango.jpg';

const page = () => {
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
    <div className="flex flex-col w-full h-full gap-12">
      <div className="flex flex-col w-full gap-3 h-1/2">
        <FilterComponent tipo={'formal'} />
        <CardCarousel products={products} />
      </div>
      <div className="flex flex-col w-full gap-3 h-1/2">
        <FilterComponent tipo={'informal'} />
        <CardCarousel products={products} />
      </div>
    </div>
  );
};

export default page;
