import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Button from '../Button/page';
import NavForms from '../Forms/NavForms/page';
import Link from 'next/link';
const HeaderPage = () => {
  return (
    <header className='border-4  border-green-800'>
      <div className='border-2 border-red-600 flex py-8 '>
        <div className='basis-1/2'></div>
        <div className='basis-1/2 flex justify-between items-center'>
          <h1>logo</h1>
          <Button className='uppercase bg-secondaryColor p-2 rounded-md text-white mr-56'>
            create a listing
          </Button>
        </div>
      </div>

      <nav className='bg-primaryColor flex justify-center items-center '>
        <ul className='list-none text-white uppercase flex  w-fit   text-sm items-stretch'>
          <li className='border-[1px] border-tertiaryColor px-8 py-2 flex items-center'>
            home
          </li>
          <li className='gap-1 group/properties relative  border-[1px] border-tertiaryColor px-8 py-2 flex items-center'>
            <span>properties</span>
            <RiArrowDropDownLine className='text-4xl' />
            <div className='hidden group-hover/properties:flex  bg-white absolute top-full w-full  flex-col   '>
              <Link
                className='uppercase text-primaryColor hover:text-white  p-4  hover:bg-secondaryLightTransparentColor '
                href='#'
              >
                villa
              </Link>
              <Link
                className='uppercase text-primaryColor hover:text-white  p-4  hover:bg-secondaryLightTransparentColor '
                href='#'
              >
                apartment
              </Link>
              <Link
                className='uppercase text-primaryColor hover:text-white  p-4  hover:bg-secondaryLightTransparentColor '
                href='#'
              >
                independent house
              </Link>
            </div>
          </li>
          <li className='border-[1px] border-tertiaryColor px-8 py-2 flex items-center'>
            about
          </li>
          <li className='border-[1px] border-tertiaryColor px-8 py-2 flex items-center'>
            contact us
          </li>
        </ul>
      </nav>

      {/* <NavForms className='border-4 sticky top-0 left-0 border-secondaryLightColor bg-primaryColor' /> */}
    </header>
  );
};

export default HeaderPage;
