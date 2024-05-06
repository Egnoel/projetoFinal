import React from 'react';
import CardCarousel from './CardCarousel';

const CardFormal = ({ products }) => {
  return (
    <div className="flex flex-col w-full h-56 py-2 bg-white rounded-xl">
      <CardCarousel products={products} />
    </div>
  );
};

export default CardFormal;
