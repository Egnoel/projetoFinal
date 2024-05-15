'use client';
import React, { useState, useEffect, useCallback } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Image from 'next/image';
import Link from 'next/link';
import { compareProductPrices } from '@/app';

const ComparePrices = ({ productName }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await compareProductPrices(productName);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching product prices:', error);
    } finally {
      setLoading(false);
    }
  }, [productName]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Product</TableCell>
          <TableCell>Store</TableCell>
          <TableCell>Price</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product._id}>
            <TableCell className="flex items-center gap-2 font-medium">
              <Image
                src={product.images[0]}
                width={50}
                height={50}
                alt="product"
                className="object-cover"
              />
              <Link href={`/product/${product._id}`} className="text-blue-500">
                {product.name}
              </Link>
            </TableCell>
            <TableCell>
              {product.establishment ? product.establishment.name : 'N/A'}
            </TableCell>
            <TableCell>{product.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ComparePrices;
