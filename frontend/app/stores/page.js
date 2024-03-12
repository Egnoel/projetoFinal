'use client';
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import CardList from '../component/CardList';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const Stores = () => {
  const stores = [
    {
      id: 1,
      name: 'Amazon',
    },
    {
      id: 2,
      name: 'Ebay',
    },
    {
      id: 3,
      name: 'Walmart',
    },
    {
      id: 4,
      name: 'Aliexpress',
    },
    {
      id: 5,
      name: 'Bestbuy',
    },
  ];
  const [clicked, setClicked] = useState(1);
  const [storeName, setStoreName] = useState('Amazon');
  return (
    <div className="flex flex-row items-center w-full h-full gap-10">
      <div className="flex flex-col w-1/5 h-[550px] gap-5 px-3">
        {stores.map((store) => (
          <div
            key={store.id}
            className={`
            ${store.id === clicked ? 'bg-green-400 text-white' : ''}
            flex items-center justify-between w-full h-10 px-2 border rounded-md hover:bg-green-400 hover:cursor-pointer hover:text-white
            `}
            onClick={() => {
              setClicked(store.id);
              setStoreName(store.name);
            }}
          >
            <span>{store.name}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-4/5 h-[550px] gap-10">
        <div className="flex items-center w-full h-10 gap-3 px-2 border rounded-md">
          <Search />
          <input
            type="text"
            placeholder="search"
            className="w-full bg-[#f0f5fb] outline-none border-none rounded-md px-2"
          />
        </div>
        <div className="h-[80%]">
          <CardList storeName={storeName} />
        </div>
        <Pagination>
          <PaginationContent className="flex items-center justify-between w-full">
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <div className="flex items-center">
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            </div>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};
export default Stores;
