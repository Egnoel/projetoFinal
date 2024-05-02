'use client';
import Image from 'next/image';
import add from '../assets/add.jpg';
import { useEffect, useState } from 'react';
import SearchableSelect from './SearchableSelect ';
import UploadImage from './UploadImage';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { CirclePlus } from 'lucide-react';
import { createProduct, getEstablishments } from '@/app';
import SearchableAddress from './SearchableAddress';

const AddProduct = ({ fetchProducts }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState('');
  const [selectedStore, setSelectedStore] = useState('');
  const [images, setImages] = useState([]);
  const [EstablishmentId, setEstablishmentId] = useState(0);
  const [description, setDescription] = useState('');
  const [stores, setStores] = useState();

  const fetchStores = async () => {
    const { data } = await getEstablishments();
    console.log(data);
    setStores(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct({
        name,
        description,
        price,
        images,
        EstablishmentId,
      });
      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStores();
  }, []);

  return (
    <div className="flex flex-col gap-3 ">
      <Dialog>
        <DialogTrigger className="fixed bottom-0 z-10 flex items-center justify-center w-16 h-16 m-1 duration-500 ease-out bg-black rounded-full right-2 transition-margin hover:m-3 ">
          <CirclePlus className="w-8 h-8 text-white" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar Produto</DialogTitle>
            <DialogDescription>Adicione um novo produto.</DialogDescription>
          </DialogHeader>
          <form action="" method="post" className="flex flex-col w-full gap-2">
            <div className="flex items-center w-full gap-2">
              <span>Name</span>
              <input
                type="text"
                name="productName"
                id=""
                className="border rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex items-center w-full gap-2">
              <span>Price</span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
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
                  type="button"
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
                  <SearchableSelect
                    options={stores}
                    label={'Estabelecimentos'}
                    setSelectedValue={setSelectedStore}
                    selectedValue={selectedStore}
                    setEstablishmentId={setEstablishmentId}
                  />
                </div>
                <div className="flex flex-row items-center gap-2">
                  <span>Endereço</span>
                  <SearchableAddress
                    options={stores?.map((store) => store.address[0])}
                    label={'Endereço'}
                    setSelectedValue={setSelectedAddress}
                    selectedValue={selectedAddress}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center w-full">
              <UploadImage setImages={setImages} />
            </div>
            <div className="flex flex-col w-full">
              <span>Descrição</span>
              <textarea
                name=""
                id=""
                cols="30"
                rows="4"
                className="w-full border border-black rounded-md outline-none"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </form>
          <DialogFooter>
            <button
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
              type="submit"
              onClick={handleSubmit}
            >
              Adicionar
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddProduct;
