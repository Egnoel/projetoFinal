'use client';
import React from 'react';
import Image from 'next/image';
import fish from '../assets/fish.jpg';
import add from '../assets/add.jpg';
import apple from '../assets/apple.jpg';
import garlic from '../assets/garlic.jpg';

const LeftSide = () => {
  const images = [
    {
      id: 0,
      image: fish,
      name: 'Fish',
    },
    {
      id: 1,
      image: add,
      name: 'Add',
    },
    {
      id: 2,
      image: apple,
      name: 'Apple',
    },
    {
      id: 3,
      image: garlic,
      name: 'Garlic',
    },
  ];
  const [selectedImage, setSelectedImage] = React.useState(0);
  return (
    <div className="flex flex-col gap-16 items-center w-[70%]">
      <div className="w-full h-[300px]">
        <Image
          src={images[selectedImage].image}
          alt="product"
          className="w-full h-full rounded-[12px] object-cover"
        />
      </div>
      <div className="flex flex-row justify-between w-full">
        {images.map((image) => (
          <Image
            src={image.image}
            key={image.id}
            alt="image"
            className={`w-16 h-16 object-cover rounded-[12px] hover:cursor-pointer hover:opacity-50 ${
              image.id === selectedImage
                ? 'border border-[#ff7d1a] opacity-50'
                : ''
            }`}
            onClick={() => setSelectedImage(image.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
