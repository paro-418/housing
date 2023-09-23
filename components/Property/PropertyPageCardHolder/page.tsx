import React from 'react';
import PropertyPageCard from '../PropertyPageCard/page';

interface PropertyPageCardHolderInterface {
  row?: boolean;
}
const PropertyPageCardHolder: React.FC<PropertyPageCardHolderInterface> = ({
  row = false,
}) => {
  return (
    <div className='basis-[70%]  flex flex-col gap-4'>
      <div className='flex justify-between items-center'>
        <span className='font-light text-lg'>4 properties</span>
        <span className='flex justify-center items-center gap-3'>
          <label htmlFor='sort' className='flex items-center gap-2'>
            sort by :
          </label>
          <select id='sort' className='p-3 rounded-md'>
            <option value='default'>Default Order</option>
            <option value='increasing'>Price - Low to High</option>
            <option value='decreasing'>Price - High to Low</option>
            <option value='featured first'>Featured Listings first</option>
            <option value='oldest'>Date - Old to New</option>
            <option value='newest'>Date - New to Old</option>
          </select>
        </span>
      </div>

      <div className={`grid gap-12  ${row ? 'grid-cols-1' : 'grid-cols-2'}`}>
        <PropertyPageCard
          row={row}
          imagesArray={[
            '/images/furniture5.jpg',
            '/images/furniture4.jpg',
            '/images/furniture5.jpg',
            '/images/furniture4.jpg',
          ]}
        />
        <PropertyPageCard
          row={row}
          imagesArray={[
            '/images/furniture5.jpg',
            '/images/furniture4.jpg',
            '/images/furniture5.jpg',
            '/images/furniture4.jpg',
          ]}
        />
      </div>
    </div>
  );
};

export default PropertyPageCardHolder;
