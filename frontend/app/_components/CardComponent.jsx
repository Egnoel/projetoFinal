import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

const CardComponent = () => {
  return (
    <Card className="w-[350px] overflow-hidden transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
      <CardHeader className="relative p-4">
        <Image
          src={'/Blackberries.jpg'}
          width={300}
          height={300}
          alt="product"
        />
        <div className="absolute top-0 left-0 p-2 text-white rounded-xl bg-gradient-to-r from-blue-500 to-purple-500">
          New Arrival
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="mb-2 text-xl font-semibold">
          Product Title
        </CardTitle>
        <CardDescription className="mb-4 text-gray-600">
          Product Description goes here. Provide a brief overview of the
          product.
        </CardDescription>
        <p className="mb-2 text-gray-700">$99.99</p>
      </CardContent>
      <CardFooter className="p-4 bg-gray-100">
        <button className="px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-700">
          Add to Cart
        </button>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
