'use client';
import Banner from './component/Banner';

import AddProduct from './component/AddProduct';
import { useCallback, useEffect, useState } from 'react';
import CardFormal from './component/CardFormal';
import CardInformal from './component/CardInformal';
import { useRouter } from 'next/navigation';
import { getProducts } from '..';

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [formalProducts, setFormalProducts] = useState([]);
  const [informalProducts, setInformalProducts] = useState([]);
  const fetchProducts = useCallback(() => {
    getProducts().then((response) => {
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
  }, []); // Add an empty array as the second argument
  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')));
    } else {
      router.push('/login');
    }
    fetchProducts();
  }, [fetchProducts, router]);

  return (
    <div className="relative flex flex-col gap-10">
      <div className="flex flex-col w-full h-full">
        <Banner />
        <div className="flex flex-col items-center w-full gap-6">
          <CardFormal products={formalProducts} />
          <CardInformal products={informalProducts} />
        </div>
      </div>
      {user && user.userType === 'admin' && (
        <AddProduct fetchProducts={fetchProducts} />
      )}
    </div>
  );
}
