'use client';
import React from 'react';
import Image from 'next/image';

const LeftSide = ({ product }) => {
  const [selectedImage, setSelectedImage] = React.useState(0);
  if (!product || !product.images || product.images.length === 0) {
    return <div>No images available</div>;
  }
  return (
    <div className="flex flex-col gap-16 items-center w-[70%]">
      <div className="w-full h-[300px] mt-5">
        <Image
          src={product.images[selectedImage]}
          alt="product"
          width={300}
          height={300}
          className="w-full h-full rounded-[12px] object-cover"
        />
      </div>
      <div className="flex flex-row justify-between w-full">
        {product.images.map((image, index) => (
          <Image
            src={image}
            key={index}
            alt="image"
            width={64}
            height={64}
            className={`w-16 h-16 object-cover rounded-[12px] hover:cursor-pointer hover:opacity-50 ${
              index === selectedImage
                ? 'border border-[#ff7d1a] opacity-50'
                : ''
            }`}
            onClick={() => setSelectedImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
