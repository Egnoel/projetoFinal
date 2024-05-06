import React from 'react';
import CardCarousel from './CardCarousel';

const CardInformal = ({ products }) => {
  return (
    <div className="flex flex-col w-full h-48 py-2 mt-3 bg-white rounded-xl">
      <CardCarousel products={products} />
    </div>
  );
};

export default CardInformal;
