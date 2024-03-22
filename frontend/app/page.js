'use client';
import Banner from './component/Banner';
import CardList from './component/CardList';
import { CirclePlus } from 'lucide-react';
import AddProduct from './component/AddProduct';
import { useState } from 'react';

export default function Home() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="flex flex-row gap-10">
      <div className="flex flex-col w-4/5 h-full gap-5">
        <Banner />
        <CardList />
      </div>
      <div className="relative flex flex-col w-1/5 h-[500px] gap-10">
        <div
          className={`transition-opacity duration-500 ${
            clicked ? 'opacity-100' : 'opacity-0'
          } ${clicked ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
          <AddProduct />
        </div>
        <button
          onClick={() => setClicked(!clicked)}
          className="absolute bottom-0 right-0 z-10 flex items-center justify-center w-16 h-16 m-1 duration-500 ease-out bg-black rounded-full transition-margin hover:m-5 "
        >
          <CirclePlus className="w-8 h-8 text-white" />
        </button>
      </div>
    </div>
  );
}
