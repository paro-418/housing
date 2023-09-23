import Link from 'next/link';
import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

const StickyNavigation = () => {
  return (
    <nav className='bg-primaryColor sticky top-0 z-10 flex justify-center items-center '>
      <ul className='list-none text-white uppercase flex  w-fit   text-sm items-stretch'>
        <li className='border-[1px] border-tertiaryColor px-8 py-2 flex items-center'>
          <Link href='/'>home</Link>
        </li>
        <li className='gap-1 group/properties relative  border-[1px] border-tertiaryColor px-8 py-2 flex items-center'>
          <span>properties</span>
          <RiArrowDropDownLine className='text-4xl' />
          <div className='hidden group-hover/properties:flex hover:flex  bg-white absolute top-full w-full  flex-col z-20 border-[1px] border-primaryColor  '>
            <Link
              className='uppercase text-primaryColor hover:text-white  p-4  hover:bg-secondaryLightTransparentColor '
              href='/properties/villa'
            >
              villa
            </Link>
            <Link
              className='uppercase text-primaryColor hover:text-white  p-4  hover:bg-secondaryLightTransparentColor '
              href='/properties/apartment'
            >
              apartment
            </Link>
            <Link
              className='uppercase text-primaryColor hover:text-white  p-4  hover:bg-secondaryLightTransparentColor '
              href='/properties/independent-house'
            >
              independent house
            </Link>
          </div>
        </li>
        <li className='border-[1px] border-tertiaryColor px-8 py-2 flex items-center'>
          <Link href='/about'>about</Link>
        </li>
        <li className='border-[1px] border-tertiaryColor px-8 py-2 flex items-center'>
          <Link href='/contact'>contact us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default StickyNavigation;
