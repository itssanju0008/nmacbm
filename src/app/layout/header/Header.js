'use client'
import React from 'react';
import HeaderLayout2 from "../../layout/header/HeaderLayout2"
import Header1 from "../../layout/header/HeaderLauout1";
import { usePathname } from 'next/navigation';

const Header = () => {
    const router = usePathname() ;
  return (
    <>
    {
        router.includes('naturopathic-medicine')?<HeaderLayout2/>:<Header1/>
    }
   
    </>
  )
}

export default Header
