import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Button from '../Button/page';
const HeaderPage = () => {
  return (
    <header>
      <div className='border-2 border-red-600 flex py-8'>
        <div className='basis-1/2'></div>
        <div className='basis-1/2 flex justify-between items-center'>
          <h1>logo</h1>
          <Button className='uppercase bg-secondaryColor p-2 rounded-md text-white mr-56'>
            create a listing
          </Button>
        </div>
      </div>
      <div className='border-4 border-red-600'>
        <nav className='bg-primaryColor flex justify-center items-center '>
          <ul className='list-none text-white uppercase flex  w-fit   text-sm items-stretch'>
            <li className='border-[1px] border-tertiaryColor px-8 py-2 flex items-center'>
              home
            </li>
            <li className='gap-1  border-[1px] border-tertiaryColor px-8 py-2 flex items-center'>
              <span>properties</span>
              <RiArrowDropDownLine className='text-4xl' />
            </li>
            <li className='border-[1px] border-tertiaryColor px-8 py-2 flex items-center'>
              about
            </li>
            <li className='border-[1px] border-tertiaryColor px-8 py-2 flex items-center'>
              contact us
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderPage;
