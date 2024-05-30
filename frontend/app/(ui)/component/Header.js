'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const Header = () => {
  const router = useRouter();
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Lojas', href: '/stores' },
  ];
  const [user, setUser] = useState({});
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setUser(JSON.parse(localStorage.getItem('user')));
    } else {
      router.push('/login');
    }
  }, [router]);
  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    router.push('/login');
  };
  const handleSearch = (e) => {
    router.push(`/results/${searchText}`);
  };
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
          <input
            type="text"
            className="outline-none "
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>
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
          <div className="flex flex-row items-center gap-2">
            <Avatar>
              <AvatarImage src={user.image} alt="user" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <Popover>
              <PopoverTrigger>
                <span className="">{user.firstName}</span>
              </PopoverTrigger>
              <PopoverContent className="flex flex-col w-20 gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <span className="hover:cursor-pointer">Perfil</span>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Perfil</DialogTitle>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                <button type="button" onClick={logout}>
                  Sair
                </button>
              </PopoverContent>
            </Popover>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
