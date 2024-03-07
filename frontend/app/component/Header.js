'use client';
import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';

const Header = () => {
  const { user } = useUser();
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];
  return (
    <div className="fixed z-10 flex items-center justify-between w-full px-4 py-2 bg-white">
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
      {!user ? (
        <Link href="/sign-up">
          <Button className="bg-blue-500 shadow-sm hover:bg-blue-600">
            Get Started
          </Button>
        </Link>
      ) : (
        <UserButton />
      )}
    </div>
  );
};

export default Header;
