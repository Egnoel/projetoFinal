'use client';
import React, { useState, useEffect } from 'react';
import FilterComponent from '../../component/FilterComponent';
import CardFormal from '../../component/CardFormal';
import CardInformal from '../../component/CardInformal';
import { searchProduct } from '@/app';

const Results = ({ params }) => {
  const { searchTerm } = params;
  const [formalProducts, setFormalProducts] = useState([]);
  const [informalProducts, setInformalProducts] = useState([]);

  const fetchProductByName = (searchTerm) => {
    searchProduct(searchTerm).then((response) => {
      const products = response.data;
      const formalProducts = products.filter(
        (product) => product.Establishment.storeType === 'formal'
      );
      const informalProducts = products.filter(
        (product) => product.Establishment.storeType === 'informal'
      );
      setFormalProducts(formalProducts);
      setInformalProducts(informalProducts);
      console.log(formalProducts);
    });
  };
  useEffect(() => {
    fetchProductByName(searchTerm);
  }, [searchTerm]);
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex flex-col w-full gap-3">
        <FilterComponent tipo={'formal'} />
        <CardFormal products={formalProducts} />
      </div>
      <div className="flex flex-col w-full gap-3">
        <FilterComponent tipo={'informal'} />
        <CardInformal products={informalProducts} />
      </div>
    </div>
  );
};

export default Results;
