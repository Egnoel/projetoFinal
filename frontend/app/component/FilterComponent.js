import { ListFilter } from 'lucide-react';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const FilterComponent = () => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-lg font-semibold">Estabelecimentos</span>
      <div className="flex items-center gap-2">
        <ListFilter />
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span>Lojas</span>
            <Select>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Todos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kero">Kero</SelectItem>
                <SelectItem value="arreiou">Arreiou</SelectItem>
                <SelectItem value="freshmart">FreshMart</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <span className="">Ordenar Por</span>
            <Select>
              <SelectTrigger className="w-[125px]">
                <SelectValue placeholder="Mais recente" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kero">Mais recente</SelectItem>
                <SelectItem value="arreiou">Mais próximo</SelectItem>
                <SelectItem value="freshmart">Mais barato</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
