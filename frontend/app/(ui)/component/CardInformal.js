import React from 'react';
import CardCarousel from './CardCarousel';

const CardInformal = ({ products }) => {
  return (
    <div className="flex w-full h-48 mt-3 bg-white py-7 rounded-xl">
      <CardCarousel products={products} />
    </div>
  );
};

export default CardInformal;
