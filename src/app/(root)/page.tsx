"use client";

import useWindowDimensions from '@/lib/useWindowDimensions';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  const { width } = useWindowDimensions();

  return (
    <div className='flex flex-col lg:flex-row overflow-x-hidden items-center justify-between space-y-12 pt-28 pb-16 min-h-screen min-w-screen'>

      {/* Right Section - Image */}
      <div className='flex items-center justify-center mt-6 md:mt-0 md:w-1/2'>
        <div className='border-4 border-gray-300 p-0.5 rounded-md'>
          <Image src={"/poster.jpg"} alt={'poster'} width={width > 1024 ? 400 : 300} height={width > 1024 ? 600 : 500} className='rounded-md' />
        </div>
      </div>
      {/* Left Section - Results */}
      <div className='flex flex-col items-center justify-center flex-1 md:w-1/2 md:overflow-auto'>
        <div className='space-y-5'>
          <h2 className='text-3xl font-medium'>Check Results</h2>
          <div className='space-y-4'>
            {["LP", "UP", "HS"].map((section) => (
              <div key={section}>
                <Link href={`/${section.toLocaleLowerCase()}`} className='w-56 h-10 bg-gray-200 text-center'>
                  <div className='w-64 h-10 bg-gray-200 p-2 text-center'>
                    <h3 className='text-xl font-medium'>
                      {section}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
