'use client';
import Button from '@/components/Button/page';
import React, { useState } from 'react';
import { BsLayoutThreeColumns } from 'react-icons/bs';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import PropertyPageCardHolder from '../PropertyPageCardHolder/page';
import PropertySideNavigation from '../PropertySideNavigation/page';
import { usePathname } from 'next/navigation';
import { IoIosArrowForward } from 'react-icons/io';

import Link from 'next/link';

const PropertyContainer = () => {
  const [isRow, setIsRow] = useState(false);
  const pathname = usePathname();

  const pathArray = pathname.slice(1).split('/');

  const pathMaker = (index: number) => {
    let path: string[] = [];
    for (let i = 0; i <= index; i++) {
      path.push(pathArray[i]);
    }
    return `/${path.join('/')}`;
  };

  return (
    <div className='px-28'>
      <div className=' w-full flex justify-between items-center my-10'>
        <div className='flex flex-col gap-3'>
          <span className='flex items-center gap-2'>
            <Link href='/' className='text-secondaryColor cursor-pointer'>
              home
            </Link>
            <IoIosArrowForward />
            {pathArray.map((path, i) => (
              <>
                <Link
                  key={path}
                  href={pathMaker(i)}
                  className='text-secondaryColor cursor-pointer'
                >
                  {pathArray[i]}
                </Link>
                <IoIosArrowForward />
              </>
            ))}
          </span>
          <h1 className='text-2xl'>Residential</h1>
        </div>
        <span className='flex gap-4 items-center'>
          <Button
            callFunction={() => setIsRow(true)}
            className={`  ${isRow ? 'text-secondaryColor ' : 'text-black'}`}
          >
            <BsLayoutThreeColumns className='rotate-90 text-2xl' />
          </Button>
          <Button
            callFunction={() => setIsRow(false)}
            className={`  ${!isRow ? 'text-secondaryColor ' : 'text-black'}`}
          >
            <HiOutlineSquares2X2 className=' text-3xl' />
          </Button>
        </span>
      </div>
      <div className='flex gap-8  py-10'>
        <PropertyPageCardHolder row={isRow} />
        <PropertySideNavigation />
      </div>
    </div>
  );
};

export default PropertyContainer;
