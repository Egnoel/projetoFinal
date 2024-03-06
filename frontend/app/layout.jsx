'use client';
import { Outfit } from 'next/font/google';
import React, { useContext, useEffect, useState } from 'react';
import { ClerkProvider, currentUser, useUser } from '@clerk/nextjs';
import './globals.css';
import { UserDetailsProvider } from './_Context/UserDetailsContext';
import { Toaster } from '@/components/ui/toaster';
import GlobalApi from './_utils/GlobalApi';
import SideNav from './_components/SideNav';
import Header from './_components/Header';

const inter = Outfit({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [userDetail, setUserDetail] = useState();
  const user = async () => await currentUser();
  const [toggleSideBar, setToggleSideBar] = useState(true);
  return (
    <ClerkProvider>
      <UserDetailsProvider>
        <html lang="en">
          <body className={`${inter.className} w-full h-full`}>
            {/* Header  */}
            <Header />
            {children}
            <Toaster />
          </body>
        </html>
      </UserDetailsProvider>
    </ClerkProvider>
  );
}
