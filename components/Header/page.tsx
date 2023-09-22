import React from 'react';
import Button from '../Button/page';

const HeaderPage = () => {
  return (
    <header className='border-4 z-10   border-green-800'>
      <div className='border-2 border-red-600 flex py-8 '>
        <div className='basis-1/2'></div>
        <div className='basis-1/2 flex justify-between items-center'>
          <h1>logo</h1>
          <Button className='uppercase bg-secondaryColor p-2 rounded-md text-white mr-56'>
            create a listing
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HeaderPage;
