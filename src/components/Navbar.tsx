"use client";

import Image from 'next/image'
import React from 'react'
import useWindowDimensions from '@/lib/useWindowDimensions';
import Link from 'next/link';

const Navbar = () => {
  const { width } = useWindowDimensions();

  return (
    <div className='flex items-center justify-between px-2 py-2 lg:px-12 lg:py-2 border-b border-gray-300 fixed top-0 left-0 right-0 z-50 bg-gray-50'>
      <div className='flex items-center space-x-2 lg:space-x-12'>
        <div>
          <Link href={'/'}><Image src={"/logo.png"} alt={'logo'} width={width > 1024 ? 90 : 80} height={width > 768 ? 90 : 80} /></Link>
        </div>
        <div>
          <Link href={'/'}><h2 className='text-2xl font-medium flex items-center'><Image src={"/met.png"} alt={'MET'} width={width > 768 ? 200 : 120} height={width > 1024 ? 200 : 120} className={"inline"} /> - <Image src={"/arts-fest.png"} alt={'MET'} width={width > 768 ? 200 : 125} height={width > 768 ? 200 : 125} className={"inline"} /></h2></ Link>
        </div>
      </div>
      {width > 1024 && (
        <div className='flex items-center justify-center pr-0 lg:pr-12'>
          <div>
            <h2 className='text-xl font-medium lg:text-2xl lg:font-medium'></h2>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
