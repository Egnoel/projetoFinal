'use client';
import Image from 'next/image';
import React from 'react';
import banana from '../../assets/yellow-banana-fruit.jpg';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ComparePrices from '@/app/component/ComparePrices';
import LeftSide from '@/app/component/LeftSide';
import RightSide from '@/app/component/RightSide';

const ProductPage = ({ params }) => {
  const { id } = params;
  return (
    <div className="flex row justify-center  w-[80%] h-full gap-4">
      <div className="flex items-center justify-center flex-1">
        <LeftSide />
      </div>
      <div className="flex justify-center flex-1">
        <RightSide />
      </div>
    </div>
  );
};

export default ProductPage;
