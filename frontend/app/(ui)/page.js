'use client';
import Banner from './component/Banner';
import { CirclePlus } from 'lucide-react';
import AddProduct from './component/AddProduct';
import { useCallback, useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import banana from './assets/yellow-banana-fruit.jpg';
import pineapple from './assets/pineapple.jpg';
import apple from './assets/apple.jpg';
import orange from './assets/orange.jpg';
import mango from './assets/mango.jpg';
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
      <Dialog>
        {user && user.userType === 'admin' && (
          <DialogTrigger className="fixed bottom-0 z-10 flex items-center justify-center w-16 h-16 m-1 duration-500 ease-out bg-black rounded-full right-2 transition-margin hover:m-3 ">
            <CirclePlus className="w-8 h-8 text-white" />
          </DialogTrigger>
        )}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar Produto</DialogTitle>
            <DialogDescription>Adicione um novo produto.</DialogDescription>
          </DialogHeader>
          <AddProduct />
          <DialogFooter>
            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
              Adicionar
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
