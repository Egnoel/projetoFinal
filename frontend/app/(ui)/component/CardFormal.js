import React from 'react';
import CardCarousel from './CardCarousel';

const CardFormal = ({ products }) => {
  return (
    <div className="flex w-full h-56 bg-white py-7 rounded-xl">
      <CardCarousel products={products} />
    </div>
  );
};

export default CardFormal;
