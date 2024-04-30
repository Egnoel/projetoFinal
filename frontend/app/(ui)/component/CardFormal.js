import React from 'react';
import CardCarousel from './CardCarousel';

const CardFormal = ({ products }) => {
  return (
    <div className="flex flex-col w-full h-48 gap-4 py-2 bg-white rounded-xl">
      <h1 className="px-2 text-2xl font-bold">Estabelecimentos</h1>
      <CardCarousel products={products} />
    </div>
  );
};

export default CardFormal;
