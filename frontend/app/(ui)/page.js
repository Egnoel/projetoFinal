'use client';
import Banner from './component/Banner';
import { jwtDecode } from 'jwt-decode';
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

  const isTokenExpired = (token) => {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
    return decodedToken.exp < currentTime;
  };
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
    });
  }, []); // Add an empty array as the second argument
  useEffect(() => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      console.log('token', token);
      if (isTokenExpired(token)) {
        localStorage.removeItem('token'); // Remove the expired token
        router.push('/login'); // Redirect to the login page
      } else {
        setUser(JSON.parse(localStorage.getItem('user')));
      }
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
          <div className="flex flex-col w-full gap-3">
            <h1 className="px-2 text-2xl font-bold">Estabelecimentos</h1>
            <CardFormal products={formalProducts} />
          </div>
          <div className="flex flex-col w-full gap-3">
            <h1 className="px-2 text-2xl font-bold">Comunidade</h1>
            <CardInformal products={informalProducts} />
          </div>
        </div>
      </div>
      {user && <AddProduct fetchProducts={fetchProducts} />}
    </div>
  );
}
