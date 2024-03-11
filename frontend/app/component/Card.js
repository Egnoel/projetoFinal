import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';

const Card = ({ name, price, image, weight }) => {
  return (
    <div className="flex  bg-white w-[300px] h-[130px] rounded-md">
      <div className="w-1/2 h-full bg-red-300 rounded-md">
        <Image
          src={image}
          alt="banana"
          width={90}
          height={90}
          className="flex items-center justify-center object-cover w-full h-full rounded-md"
        />
      </div>
      <div className="flex flex-col justify-center w-1/2 px-3">
        <h1 className="text-lg font-bold">{name}</h1>
        <p className="text-xs text-gray-300">{weight}</p>
        <div className="flex items-center w-full gap-4 mt-2">
          <p className="text-sm">Kz {price}</p>
          <Button className="text-xs bg-green-400 text-slate-600 hover:bg-green-600">
            Mais
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
