import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Card = ({ name, price, image, weight, id }) => {
  return (
    <div className="flex bg-[#f0f5fb] w-full h-full rounded-md shadow-sm hover:shadow-2xl ">
      <div className="flex ml-3 w-1/2  rounded-md">
        <Image
          src={image}
          alt="product"
          width={120}
          height={70}
          className=" object-cover w-[70%] rounded-md"
        />
      </div>
      <div className="flex flex-col justify-center w-1/2 px-3">
        <h1 className="text-lg font-bold">{name}</h1>
        <p className="text-xs text-gray-300">{weight}</p>
        <div className="flex items-center w-full gap-4 mt-2">
          <p className="text-sm">Kz {price}</p>
          <Button className="text-xs bg-green-400 text-slate-600 hover:bg-green-600">
            <Link href={`/product/${id}`}>Mais</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
