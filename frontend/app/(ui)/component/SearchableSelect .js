'use client';
import React, { useState } from 'react';
import { Check, ChevronsUpDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const SearchableSelect = ({
  options,
  label,
  setSelectedValue,
  selectedValue,
  setEstablishmentId,
}) => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="mx-auto">
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="mx-auto"
        >
          {selectedValue
            ? options.find((option) => option.name === selectedValue)?.name
            : `${label}`}
          <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[130px] p-0">
        <div className="flex flex-col w-full gap-3">
          <div className="flex items-center w-full gap-1">
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
                  option.name === selectedValue ? 'bg-green-400 text-white' : ''
                }
                flex items-center justify-between w-full h-10 px-2 border rounded-md hover:bg-green-400 hover:cursor-pointer hover:text-white
                `}
                onClick={() => {
                  setSelectedValue(option.name);
                  setEstablishmentId(option._id);
                  setOpen(false);
                  setSearchQuery('');
                }}
              >
                <p className="text-sm">{option.name}</p>
                {option.name === selectedValue && (
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

export default SearchableSelect;
