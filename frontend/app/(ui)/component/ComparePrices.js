import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Image from 'next/image';
import banana from '../assets/yellow-banana-fruit.jpg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ComparePrices = () => {
  const invoices = [
    {
      invoice: 'INV001',
      paymentStatus: 'Amazon',
      totalAmount: '$250.00',
      paymentMethod: '10km',
    },
    {
      invoice: 'INV002',
      paymentStatus: 'Aliexpress',
      totalAmount: '$150.00',
      paymentMethod: '2km',
    },
    {
      invoice: 'INV003',
      paymentStatus: 'BestBuy',
      totalAmount: '$350.00',
      paymentMethod: '33km',
    },
    {
      invoice: 'INV004',
      paymentStatus: 'Walmart',
      totalAmount: '$450.00',
      paymentMethod: '23km',
    },
    {
      invoice: 'INV005',
      paymentStatus: 'Ebay',
      totalAmount: '$550.00',
      paymentMethod: '12km',
    },
    {
      invoice: 'INV006',
      paymentStatus: 'Buitanda',
      totalAmount: '$200.00',
      paymentMethod: '4km',
    },
    {
      invoice: 'INV007',
      paymentStatus: 'Kero',
      totalAmount: '$300.00',
      paymentMethod: '10m',
    },
  ];
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[250px]">Product</TableHead>
          <TableHead>Store</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Distância</TableHead>
          <TableHead className=""></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="flex items-center gap-2 font-medium">
              <Image
                src={banana}
                alt="product image"
                width={50}
                height={50}
                className="object-cover"
              />
              <Link href={`${invoice.invoice}`} className="text-blue-500">
                {invoice.invoice}
              </Link>
            </TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="">
              <Button className="bg-blue-500 shadow-sm hover:bg-blue-600">
                Add
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ComparePrices;
