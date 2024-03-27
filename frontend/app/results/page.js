import React from 'react';
import FilterComponent from '../component/FilterComponent';
import CardCarousel from '../component/CardCarousel';

const page = () => {
  return (
    <div className="flex flex-col w-full h-full gap-3">
      <div className="flex flex-col w-full gap-3 h-1/2">
        <FilterComponent />
        <CardCarousel />
      </div>
      <div className="flex flex-col w-full gap-3 h-1/2">
        <FilterComponent />
        <CardCarousel />
      </div>
    </div>
  );
};

export default page;
