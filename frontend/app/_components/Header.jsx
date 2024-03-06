'use client';

import { Button, Navbar } from 'flowbite-react';
import Image from 'next/image';
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';

function Component() {
  const { user } = useUser();
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <Image
          src="/favicon.svg"
          className="h-6 mr-3 sm:h-9"
          alt="Flowbite React Logo"
          fill
        />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {!user ? (
          <Link href="/sign-up">
            <Button className="flex items-center p-2 bg-blue-500 rounded-lg shadow-sm hover:bg-blue-600">
              Get Started
            </Button>
          </Link>
        ) : (
          <UserButton />
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
