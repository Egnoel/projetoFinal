import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Card from './Card';

const CardCarousel = ({ products }) => {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-[95%] ml-4"
    >
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem
            key={product._id}
            className="flex flex-row items-center gap-2 md:basis-1/2 lg:basis-1/3"
          >
            <Card
              name={product.name}
              price={product.price}
              image={product.images[0] || product.images[1]}
              weight={product.description}
              id={product._id}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
};

export default CardCarousel;
