import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Card = ({ name, price, image, weight, id }) => {
  return (
    <div className="flex  bg-[#f0f5fb] w-[300px] h-[130px] rounded-md shadow-sm hover:shadow-md ">
      <div className="flex items-center justify-center w-1/2 h-full rounded-md">
        <Image
          src={image}
          alt="banana"
          width={90}
          height={90}
          className=" object-cover w-[90%] h-[90%] rounded-md"
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
