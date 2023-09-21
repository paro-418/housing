'use client';
import React, { useState } from 'react';
import Button from '@/components/Button/page';
import DropDown from '@/components/DropDown/page';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import SelectOptions from '@/components/SelectOptions/page';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import CheckBoxGroup from '@/components/CheckBoxGroup/page';

interface NavFormsInterface {
  className?: string;
}
const NavForms: React.FC<NavFormsInterface> = ({ className }) => {
  const [expand, setExpand] = useState<boolean>(false);
  const [otherFeatureExpand, setOtherFeatureExpand] = useState<boolean>(false);
  const toggleExpand = () => setExpand(!expand);
  const toggleOtherFeatures = () => setOtherFeatureExpand(!otherFeatureExpand);

  const submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <div className={className}>
      <form
        className='w-[80%] pt-4  mx-auto flex flex-col gap-4 overflow-visible'
        onSubmit={submitForm}
      >
        {/* <div> */}
        <div className=' flex gap-4 '>
          <span className='bg-white flex gap-4 items-center px-1 w-1/2'>
            <AiOutlineSearch className='text-2xl ' />
            <input
              type='text'
              placeholder='Enter Keyword...'
              className='flex-grow p-2'
            />
          </span>

          <DropDown
            label='Status'
            options={['For Lease', 'For Leas', 'For Lea']}
          />
          <DropDown
            label='Type'
            options={['residential', 'apartment', 'independent house', 'villa']}
          />
          <Button
            callFunction={toggleExpand}
            className='text-white p-2  flex gap-2 items-center justify-between'
          >
            <FiSettings />
            <span className='font-semibold'>Advance</span>
          </Button>

          <Button className='bg-secondaryColor text-white flex-grow'>
            search
          </Button>
        </div>

        <div
          className={` duration-200 ${
            expand
              ? 'h-fit pointer-events-auto opacity-100'
              : 'h-0 pointer-events-none opacity-0'
          }`}
        >
          <div
            className={`border-2  border-green-600 duration-200  ${
              expand ? 'h-[30vh]' : 'h-0'
            }`}
          >
            <div className='border-2 flex gap-4 border-red-800'>
              <SelectOptions
                className=' basis-[20%] '
                options={['1', '2', '3', '4']}
                placeHolder='bedrooms'
              />
              <SelectOptions
                className=' basis-[20%] '
                options={['1', '2', '3', '4']}
                placeHolder='bedrooms'
              />
              <input
                placeholder='Min. Area'
                type='number'
                className=' basis-[20%] p-2 rounded-md'
              />
              <input
                placeholder='Max. Area'
                type='number'
                className=' basis-[20%] p-2 rounded-md'
              />
              <input
                placeholder='Property ID'
                type='number'
                className=' basis-[20%] p-2 rounded-md'
              />
            </div>

            <div className='text-white'>
              <div className='font-light'>
                <span className='font-semibold'>price range</span> from{' '}
                <span className='font-semibold'>&#8377;200</span> to{' '}
                <span className='font-semibold'> &#8377; 200000000</span>
              </div>
            </div>
          </div>
          <Button
            callFunction={toggleOtherFeatures}
            className='my-4 flex items-center text-white gap-2'
          >
            <AiOutlinePlusSquare />
            <span>Others Features</span>
          </Button>
          <CheckBoxGroup
            className={`my-4 ${
              otherFeatureExpand
                ? 'h-fit pointer-events-auto opacity-100'
                : 'h-0 pointer-events-none opacity-0'
            }`}
            options={[
              'a',
              'b',
              'c',
              'd',
              'b',
              'c',
              'd',
              'b',
              'c',
              'd',
              'b',
              'c',
              'd',

              'b',
              'c',
              'd',

              'b',
              'c',
              'd',

              'b',
              'c',
              'd',
            ]}
          />
        </div>
        {/* </div> */}
      </form>
    </div>
  );
};

export default NavForms;
