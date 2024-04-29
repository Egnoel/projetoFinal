'use client';
import Banner from './component/Banner';
import { CirclePlus } from 'lucide-react';
import AddProduct from './component/AddProduct';
import { useState } from 'react';
import CardCarousel from './component/CardCarousel';
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

export default function Home() {
  const products = [
    {
      id: 1,
      name: 'Banana',
      price: 2.5,
      image: banana,
      weight: '1kg',
    },
    {
      id: 2,
      name: 'Apple',
      price: 3.5,
      image: apple,
      weight: '1kg',
    },
    {
      id: 3,
      name: 'Orange',
      price: 2.0,
      image: orange,
      weight: '1kg',
    },
    {
      id: 4,
      name: 'Mango',
      price: 3.0,
      image: mango,
      weight: '1kg',
    },
    {
      id: 5,
      name: 'Pineapple',
      price: 4.0,
      image: pineapple,
      weight: '1kg',
    },
  ];
  return (
    <div className="relative flex flex-col gap-10">
      <div className="flex flex-col w-full h-full">
        <Banner />
        <div className="flex flex-col items-center w-full gap-6">
          <CardFormal products={products} />
          <CardInformal products={products} />
        </div>
      </div>
      <Dialog>
        <DialogTrigger className="fixed bottom-0 z-10 flex items-center justify-center w-16 h-16 m-1 duration-500 ease-out bg-black rounded-full right-2 transition-margin hover:m-3 ">
          <CirclePlus className="w-8 h-8 text-white" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar Produto</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
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
