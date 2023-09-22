import React from 'react';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { FaLocationDot } from 'react-icons/fa6';
import Button from '../Button/page';
import Link from 'next/link';

const FooterPage = () => {
  return (
    <footer className='w-screen bg-primaryColor text-white '>
      <div className='flex gap-8 p-40 border-red-600 border-2 font-light'>
        <div className='basis-1/3 flex flex-col gap-4'>
          <h2 className='text-2xl font-semibold capitalize'>contact us</h2>
          <p className='flex gap-1'>
            <span className='text-lg'>
              <FaLocationDot />
            </span>
            address addres saddr essaddressa ddress addressad dressa
            ddressaddress address address address address
          </p>
          <span className='flex gap-1 items-center'>
            <span className='text-lg'>
              <AiOutlinePhone />
            </span>
            9999999999
          </span>
          <span className='flex gap-1 items-center'>
            <span className='text-lg'>
              <AiOutlineMail />
            </span>
            abc@gmail.com
          </span>
        </div>

        <div className='flex-grow flex flex-col gap-4 border-green-600 border-2'>
          <h2 className='text-2xl font-semibold capitalize'>News letter</h2>
          <span className='flex items-center gap-6 border-yellow-600 border-2'>
            <input
              type='email'
              className='p-2 rounded basis-2/3 text-black font-normal'
              placeholder='enter your email'
            />
            <Button className='bg-secondaryColor font-semibold px-4 py-2 rounded-md cursor-pointer'>
              submit
            </Button>
          </span>
        </div>
      </div>
      <div className='bg-primaryDarkColor py-4 px-28 font-normal flex justify-between items-center'>
        <span className='flex items-center justify-between basis-1/2'>
          <p>© Company - All rights reserved </p>
          <p>
            developed by{' '}
            <Link className='hover:text-secondaryColor' href='#'>
              Webvantage
            </Link>
          </p>
        </span>
        <Link className='hover:text-secondaryColor' href='#'>
          Privacy policy
        </Link>
      </div>
    </footer>
  );
};

export default FooterPage;
