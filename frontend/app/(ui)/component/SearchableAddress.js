'use client';
import React, { useState } from 'react';
import { Check, ChevronsUpDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const SearchableAddress = ({
  options,
  label,
  setSelectedValue,
  selectedValue,
}) => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const filteredOptions = options.filter((option) =>
    option.address.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="mx-auto text-wrap">
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="mx-auto text-wrap"
        >
          {selectedValue
            ? options.find((option) => option.address === selectedValue)
                ?.address
            : `${label}`}
          <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[130px] p-0">
        <div className="flex flex-col w-full gap-3">
          <div className="flex items-center w-full gap-1 mt-1">
            <Search />
            <input
              type="text"
              className="w-full"
              onChange={handleInputChange}
            />
          </div>
          <div>
            {filteredOptions.map((option) => (
              <div
                key={option._id}
                className={`
                ${
                  option.address === selectedValue
                    ? 'bg-green-400 text-white'
                    : ''
                }
                flex flex-wrap items-center justify-between w-full h-auto px-1 border rounded-md hover:bg-green-400 hover:cursor-pointer hover:text-white
                `}
                onClick={() => {
                  setSelectedValue(option.address);
                  setOpen(false);
                  setSearchQuery('');
                }}
              >
                <p className="text-sm text-wrap">{option.address}</p>
                {option.address === selectedValue && (
                  <Check className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SearchableAddress;
