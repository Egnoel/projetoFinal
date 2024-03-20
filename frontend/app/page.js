import Image from 'next/image';
import Banner from './component/Banner';
import CardList from './component/CardList';
import { CirclePlus } from 'lucide-react';
import AddProduct from './component/AddProduct';

export default function Home() {
  return (
    <div className="flex flex-row gap-10">
      <div className="flex flex-col w-4/5 h-full gap-5">
        <Banner />
        <CardList />
      </div>
      <div className="flex flex-col w-1/5 h-full gap-10 ">
        <AddProduct />
      </div>
    </div>
  );
}
