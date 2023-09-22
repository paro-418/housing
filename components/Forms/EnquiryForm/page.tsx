'use client';
import Button from '@/components/Button/page';
import SelectOptions from '@/components/SelectOptions/page';
import React, { SyntheticEvent } from 'react';

interface EnquiryFormInterface {
  className?: string;
}

const SmallContainer = ({ children }: { children: React.ReactNode }) => (
  <div className='flex flex-col  gap-2'>{children}</div>
);
const EnquiryForm: React.FC<EnquiryFormInterface> = ({ className }) => {
  const showValue = (x: string | null) => {
    // console.log('xxxxxxxxxxxxxxxxx', x);
  };
  return (
    <div className={className}>
      <form
        className='text-black flex flex-col gap-4'
        onSubmit={(e: SyntheticEvent) => e.preventDefault()}
      >
        <SmallContainer>
          <h2 className='capitalize text-2xl'>Company Enquiry form</h2>
          <p className='text-lg font-light'>
            Send us your query & we will get back to you as soon as possible
          </p>
        </SmallContainer>
        <SmallContainer>
          <h4 className='font-bold text-lg capitalize'>
            Enquiry type <span className='text-red-600'>*</span>{' '}
          </h4>
          <SelectOptions
            showTextInput={false}
            placeHolder='Select'
            options={['Rent', 'Lease', 'Sell']}
            exportChosenValue={showValue}
          />
        </SmallContainer>

        <SmallContainer>
          <h4 className='font-bold text-lg capitalize'>
            Information <span className='text-red-600'>*</span>{' '}
          </h4>
          <SelectOptions
            exportChosenValue={showValue}
            showTextInput={false}
            placeHolder="I'm a"
            options={['agent', 'owner', 'tenant']}
          />

          <div className='grid  grid-cols-2 gap-2'>
            <input
              className=' border-[1px] border-primaryColor p-3 rounded-md'
              type='text'
              placeholder='First Name'
            />
            <input
              className=' border-[1px] border-primaryColor p-3 rounded-md'
              type='text'
              placeholder='Last Name'
            />
          </div>
          <input
            className=' border-[1px] border-primaryColor p-3 rounded-md'
            type='email'
            placeholder='Email Address'
          />
          <input
            className=' border-[1px] border-primaryColor p-3 rounded-md'
            type='number'
            placeholder='Phone number'
            maxLength={10}
          />
        </SmallContainer>
        <SmallContainer>
          <h4 className='font-bold text-lg capitalize'>Location</h4>
          <div className='grid grid-cols-2 gap-2'>
            <SelectOptions
              showTextInput={false}
              placeHolder='Select'
              options={['Bengalore']}
              exportChosenValue={showValue}
            />
            <input
              className=' border-[1px] border-primaryColor p-3 rounded-md'
              placeholder='Zip Code'
              maxLength={6}
              type='number'
            />
          </div>
        </SmallContainer>
        <SmallContainer>
          <h4 className='font-bold text-lg capitalize'>Property</h4>
          <SelectOptions
            showTextInput={false}
            placeHolder='Select Type'
            options={['Residential', 'Apartment', 'Independent house', 'Villa']}
            exportChosenValue={showValue}
          />
          <div className='grid grid-cols-2 gap-2'>
            <input
              className=' border-[1px] border-primaryColor p-3 rounded-md'
              placeholder='Max Price'
              type='number'
            />
            <input
              className=' border-[1px] border-primaryColor p-3 rounded-md'
              placeholder='Minimum size (Sq Ft)'
              type='number'
            />
            <input
              className=' border-[1px] border-primaryColor p-3 rounded-md'
              placeholder='Number of beds'
              type='number'
            />
            <input
              className=' border-[1px] border-primaryColor p-3 rounded-md'
              placeholder='Number of baths'
              type='number'
            />
          </div>
        </SmallContainer>
        <SmallContainer>
          <h4 className='font-bold text-lg capitalize'>GDPR Agreement</h4>
          <div className='flex gap-3 items-center '>
            <input type='checkbox' id='consent' />
            <label htmlFor='consent'>
              I consent to having this website store my submitted information
            </label>
          </div>
        </SmallContainer>

        <Button
          className='bg-secondaryColor rounded-md text-white py-3 font-semibold'
          type='submit'
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default EnquiryForm;
