'ise client';
import React, { useState } from 'react';
import { Banknote } from 'lucide-react';
import { MapPin } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const RightSide = () => {
  const [count, setCount] = useState(0);
  const add = () => setCount(count + 1);
  const minus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="flex flex-col gap-10 w-[70%]">
      <div className="flex flex-col">
        <span className="text-[#ff7d1a] uppercase text-xs font-semibold">
          Shoprite Talatona
        </span>
        <h1 className="text-5xl font-bold">Peixe</h1>
        <p className="text-xs text-[#a1a1a1] font-normal">
          Descrição do peixe, vendido em kilo
        </p>
      </div>
      <div className="flex flex-col justify-center gap-1">
        <div className="flex flex-row items-center gap-2">
          <strong className="price">$125.00</strong>
          <span className="text-xs text-[#ff7d1a] font-normal bg-[#ffede0] p-2">
            50%
          </span>
        </div>
        <span className="font-xs font-bold line-through text-[#a1a1a1]">
          $250.00
        </span>
      </div>
      <div className="flex flex-row gap-4">
        <Dialog>
          <DialogTrigger>
            <button className="flex flex-row items-center justify-center bg-[#ff7d1a] text-white text-xs font-bold border-none rounded-md p-2 w-36 gap-2 hover:opacity-50 hover:cursor-pointer">
              <Banknote className="w-6 h-6 text-white" />
              <span>Comparar Preços</span>
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <button className="flex flex-row items-center justify-center bg-[#ff7d1a] text-white text-xs font-bold border-none rounded-md p-2 w-32 gap-3 hover:opacity-50 hover:cursor-pointer">
              <MapPin className="w-6 h-6 text-white" />
              <span>Direção</span>
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default RightSide;
