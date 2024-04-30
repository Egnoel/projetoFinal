'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Header = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Lojas', href: '/stores' },
  ];
  const [user, setUser] = useState({});
  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')));
    } else {
      window.location.href = '/login';
    }
  }, []);
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
        <div className="flex items-center gap-1 px-1 border rounded-md">
          <input type="text" className="outline-none " />
          <button>
            <Search />
          </button>
        </div>
        {!user ? (
          <Link href="/sign-up">
            <Button className="bg-blue-500 shadow-sm hover:bg-blue-600">
              Get Started
            </Button>
          </Link>
        ) : (
          <div className="flex flex-row gap-2 items-center">
            <Avatar>
              <AvatarImage src={user.image} alt="user" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Link href={`/profile/${user.id}`}>{user.firstName}</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
