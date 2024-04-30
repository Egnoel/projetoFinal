'use client';
import Image from 'next/image';
import add from '../assets/add.jpg';
import { useState } from 'react';
import SearchableSelect from './SearchableSelect ';
import { ComboboxDemo } from './ComboBox';
import UploadImage from './UploadImage';

const AddProduct = () => {
  const [price, setPrice] = useState(0);
  const [selectedValue, setSelectedValue] = useState(null);

  const locations = [
    {
      id: 1,
      value: 'são paulo',
      label: 'São Paulo',
    },
    {
      id: 2,
      value: 'morro bento',
      label: 'Morro Bento',
    },
    {
      id: 3,
      value: 'talatona',
      label: 'Talatona',
    },
    {
      id: 4,
      value: 'cazenge',
      label: 'Cazenga',
    },
  ];
  const stores = [
    {
      id: 1,
      value: 'amazon',
      label: 'Amazon',
    },
    {
      id: 2,
      value: 'kero',
      label: 'Kero',
    },
    {
      id: 3,
      value: 'kandando',
      label: 'Kandando',
    },
    {
      id: 4,
      value: 'freshmart',
      label: 'FreshMart',
    },
    {
      id: 5,
      value: 'kibabo',
      label: 'Kibabo',
    },
    {
      id: 6,
      value: 'casa dos frescos',
      label: 'Casa dos Frescos',
    },
  ];
  return (
    <div className="flex flex-col gap-3 ">
      <form
        action=""
        method="post"
        className="flex flex-col w-full gap-2"
        onSubmit={(e) => {
          e.preventDefault(); // prevent form submission
        }}
      >
        <div className="flex items-center w-full gap-2">
          <span>Name</span>
          <input
            type="text"
            name="productName"
            id=""
            className="border rounded-md"
          />
        </div>
        <div className="flex items-center w-full gap-2">
          <span>Price</span>
          <div className="flex items-center gap-1">
            <button
              className="w-6 text-center border rounded-md"
              onClick={() => {
                if (price > 0) {
                  setPrice(price - 1);
                }
              }}
            >
              -
            </button>
            <div className="flex border rounded-md">
              <input
                type="number"
                name="productPrice"
                id=""
                className="text-center outline-none w-28"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
              <span>KZ</span>
            </div>
            <button
              className="w-6 text-center border rounded-md"
              onClick={() => setPrice(price + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full gap-2">
          <span>Localização</span>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center gap-2">
              <span>Estabelecimento</span>
              <SearchableSelect options={stores} label={'Estabelecimentos'} />
            </div>
            <div className="flex flex-row items-center gap-2">
              <span>Endereço</span>
              <SearchableSelect options={locations} label={'Endereço'} />
            </div>
          </div>
        </div>
        <div className="flex items-center w-full">
          <UploadImage />
        </div>
        <div className="flex flex-col w-full">
          <span>Descrição</span>
          <textarea
            name=""
            id=""
            cols="30"
            rows="4"
            className="w-full border border-black rounded-md outline-none"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
