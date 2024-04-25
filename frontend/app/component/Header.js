'use client';
import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Search } from 'lucide-react';

const Header = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Lojas', href: '/stores' },
  ];
  return (
    <div className="fixed z-10 flex items-center justify-between w-full px-4 bg-white">
      <div className="flex items-center justify-center gap-3">
        <Image src="/logo.jpg" alt="Logo" width={50} height={50} className="" />
        <span>Mais Barato</span>
      </div>
      <nav>
        <ul className="flex items-center space-x-4">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="hover:text-blue-500 hover:cursor-pointer"
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button>
            <Search />
          </button>
          <input type="text" className="border rounded-md outline-none" />
        </div>
        <Link href="/sign-up">
          <Button className="bg-blue-500 shadow-sm hover:bg-blue-600">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
