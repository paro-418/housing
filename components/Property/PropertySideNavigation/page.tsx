import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const PropertySideNavigation = () => {
  return (
    <div className='basis-[30%] flex flex-col gap-8'>
      <div className=' p-4 flex flex-col gap-4 justify-between min-h-[20vh] bg-white '>
        <h3 className='font-semibold'>Featured Listings</h3>
        <div></div>
      </div>
      <div className=' p-4 flex flex-col gap-4 justify-between min-h-[20vh] bg-white'>
        <h3 className='font-semibold'>Property type</h3>
        <span className='flex flex-col gap-2'>
          <Link
            className='text-secondaryColor flex gap-3 items-center '
            href='/properties/residential'
          >
            <IoIosArrowForward />
            Residential
          </Link>
          <Link
            className='text-secondaryColor flex gap-3 items-center '
            href='/properties/apartment'
          >
            <IoIosArrowForward />
            Apartment
          </Link>
          <Link
            className='text-secondaryColor flex gap-3 items-center '
            href='/properties/villa'
          >
            <IoIosArrowForward />
            Villa
          </Link>
        </span>
      </div>
      <div className=' p-4 flex flex-col gap-4 justify-between min-h-[20vh] bg-white'>
        <h3 className='font-semibold'>Cities</h3>
        <span>
          <Link
            className='text-secondaryColor flex gap-3 items-center '
            href='/city/bengalore'
          >
            <IoIosArrowForward />
            Bengalore
          </Link>
        </span>
      </div>
    </div>
  );
};

export default PropertySideNavigation;
