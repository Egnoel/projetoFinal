'use client';
import Image from 'next/image';
import React from 'react';
import banana from '../../assets/yellow-banana-fruit.jpg';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ComparePrices from '@/app/component/ComparePrices';
import { useRouter } from 'next/navigation';

const ProductPage = ({ params }) => {
  const router = useRouter();
  const { id } = params;
  return (
    <div className="flex flex-col  w-[80%] h-full gap-4">
      <div className="flex w-full">
        <Image
          src={banana}
          alt="Logo"
          width={50}
          height={50}
          className="object-fill w-1/2"
        />
        <div className="flex flex-col w-1/2 px-6">
          <h1 className="text-3xl font-bold">Banana</h1>
          <span>Store</span>
          <p>Description of the product</p>
          <p className="text-xl">R$ 2.50</p>
        </div>
      </div>
      <div className="flex items-center w-full">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="flex items-center gap-4">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="compare">Compare</TabsTrigger>
          </TabsList>
          <TabsContent value="description">{id}</TabsContent>
          <TabsContent value="compare">
            <ComparePrices id={id} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductPage;
