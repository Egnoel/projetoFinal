'use client';
import React, { useState, useEffect } from 'react';
import { Check, ChevronsUpDown, Search } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const SearchableSelect = ({ options, label }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    options.map((option) => console.log(option));
  }, [options]);
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const filteredOptions = options.filter((option) =>
    option.value.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[130px] "
        >
          {value
            ? options.find((option) => option.value === value)?.label
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
                key={option.id}
                className={`
                ${option.value === value ? 'bg-green-400 text-white' : ''}
                flex items-center justify-between w-full h-10 px-2 border rounded-md hover:bg-green-400 hover:cursor-pointer hover:text-white
                `}
                onClick={() => {
                  setValue(option.value);
                  setOpen(false);
                  setSearchQuery('');
                }}
              >
                <p className="text-sm">{option.label}</p>
                {option.value === value && (
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
