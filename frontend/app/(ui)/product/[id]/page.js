'use client';
import React, { useState, useEffect, useCallback } from 'react';

import { getProduct } from '@/app';
import LeftSide from '../../component/LeftSide';
import RightSide from '../../component/RightSide';

const ProductPage = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState({});
  const fetchProduct = useCallback(async () => {
    const { data } = await getProduct(id);
    setProduct(data);
  }, [id]);
  useEffect(() => {
    fetchProduct();
    console.log(product);
  }, [fetchProduct, product]);

  return (
    <div className="flex row justify-center items-center  w-[80%] h-full gap-4">
      <div className="flex items-center justify-center flex-1">
        <LeftSide product={product} />
      </div>
      <div className="flex justify-center flex-1">
        <RightSide product={product} />
      </div>
    </div>
  );
};

export default ProductPage;
