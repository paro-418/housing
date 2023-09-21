'use client';
import DropDown from '@/components/DropDown/page';
import SelectOptions from '@/components/SelectOptions/page';
import TextCheckBox from '@/components/TextCheckBox/page';
import React, { useState } from 'react';

const HomeForm = () => {
  const [selectedOption, setSelectedOption] = useState<string>('all status');
  console.log(selectedOption);
  const submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <form
      className='w-[60%] shadow-lg bg-white absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 flex flex-col justify-center items-center z-10 rounded'
      onSubmit={submitForm}
    >
      <div className='absolute bottom-full flex w-1/2 rounded  overflow-hidden '>
        <div className={`relative py-6   w-1/4  `}>
          <input
            onChange={() => setSelectedOption('All status')}
            value={selectedOption}
            type='radio'
            id='All status'
            className='absolute opacity-0 z-10 left-0 right-0 top-0 bottom-0 peer/checkbox  '
            name='option'
          />
          <label
            htmlFor='All status'
            className='flex justify-center items-center capitalize absolute left-0 right-0 top-0 bottom-0  w-full bg-secondaryLightTransparentColor opacity-90 peer-checked/checkbox:bg-white z-10 peer-checked/checkbox:text-black text-white'
          >
            All status
          </label>
        </div>
        <div className={`relative py-4    w-1/4  `}>
          <input
            onChange={() => setSelectedOption('lease')}
            value={selectedOption}
            type='radio'
            id='lease'
            className='absolute opacity-0 z-10 left-0 right-0 top-0 bottom-0 peer/checkbox  '
            name='option'
          />
          <label
            htmlFor='lease'
            className='flex justify-center items-center capitalize absolute left-0 right-0 top-0 bottom-0  w-full bg-secondaryLightTransparentColor opacity-90 peer-checked/checkbox:bg-white z-10 peer-checked/checkbox:text-black text-white'
          >
            For Lease{' '}
          </label>
        </div>

        <div
          className={`relative py-4  flex justify-center flex-grow items-center `}
        >
          <input
            onChange={() => setSelectedOption('sale')}
            value={selectedOption}
            type='radio'
            id='rent'
            className='absolute opacity-0 z-10 left-0 right-0 top-0 bottom-0 peer/checkbox  '
            name='option'
          />
          <label
            htmlFor='rent'
            className='flex justify-center items-center capitalize absolute left-0 right-0 top-0 bottom-0  w-full bg-secondaryLightTransparentColor opacity-90 peer-checked/checkbox:bg-white z-10 peer-checked/checkbox:text-black text-white'
          >
            For Rent
          </label>
        </div>
        <div
          className={`relative py-4  flex justify-center flex-grow items-center `}
        >
          <input
            onChange={() => setSelectedOption('sale')}
            value={selectedOption}
            type='radio'
            id='sale'
            className='absolute opacity-0 z-10 left-0 right-0 top-0 bottom-0 peer/checkbox  '
            name='option'
          />
          <label
            htmlFor='sale'
            className='flex justify-center items-center capitalize absolute left-0 right-0 top-0 bottom-0  w-full bg-secondaryLightTransparentColor opacity-90 peer-checked/checkbox:bg-white z-10 peer-checked/checkbox:text-black text-white'
          >
            For Sale
          </label>
        </div>
      </div>
      <div className='flex gap-4 w-full p-8 justify-between items-center'>
        <span className='flex-grow flex flex-col justify-center'>
          <h3 className='uppercase'>Looking for</h3>
          <DropDown
            label='Apartment'
            options={['Apartment', 'Residential', 'Independent house', 'Villa']}
            showTextInput={false}
            className='border-[1px] border-primaryColor py-1 rounded'
          />
        </span>
        <span className='flex-grow flex flex-col justify-center'>
          <h3 className='uppercase'>Location</h3>
          <SelectOptions
            options={['city 1', 'city 2', 'city 3', 'city 4']}
            placeHolder='city 1'
            showTextInput={false}
          />
        </span>
        <span className='flex-grow flex flex-col justify-center'>
          <h3 className='uppercase'>Property size</h3>
          <SelectOptions
            options={['city 1', 'city 2', 'city 3', 'city 4']}
            placeHolder='city 1'
            showTextInput={false}
          />
        </span>
        <span className='flex-grow flex flex-col justify-center'>
          <h3 className='uppercase'>your budget</h3>
          <SelectOptions
            options={['5000', '50000', '5000000', '50000000']}
            placeHolder='Any'
          />
        </span>
      </div>
    </form>
  );
};

export default HomeForm;
