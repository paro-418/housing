import Button from '@/components/Button/page';
import React from 'react';

const ContactForm = () => {
  return (
    <form className='basis-[70%] bg-white border-[1px] p-8  flex flex-col gap-6'>
      <h1 className=''>
        Contact Us for the any questions or info. We would be happy to serve
        you.
      </h1>

      <div className='flex flex-col gap-4'>
        <div className='flex gap-5 justify-between w-full items-center'>
          <span className='flex flex-col gap-1 basis-1/2'>
            <label className='font-semibold capitalize' htmlFor='fname'>
              First name <sub className='text-red-400 text-xl'>*</sub>
            </label>
            <input
              id='fname'
              name='fname'
              className='p-2 rounded-sm border-[1px] '
              type='text'
              placeholder='enter your name'
            />
          </span>
          <span className='flex flex-col gap-1 basis-1/2'>
            <label className='font-semibold capitalize' htmlFor='lname'>
              last name <sub className='text-red-400 text-xl'>*</sub>
            </label>
            <input
              id='lname'
              name='lname'
              className='p-2 rounded-sm border-[1px] '
              type='text'
              placeholder='enter your last name'
            />
          </span>
        </div>
        <span className='w-full flex flex-col gap-1'>
          <label className='font-semibold capitalize' htmlFor='email'>
            Email <sub className='text-red-400 text-xl'>*</sub>
          </label>
          <input
            id='email'
            name='email'
            className='p-2 rounded-sm border-[1px] '
            type='email'
            placeholder='enter your email'
          />
        </span>
        <span className='w-full flex flex-col gap-1'>
          <label className='font-semibold capitalize' htmlFor='email'>
            Message <sub className='text-red-400 text-xl'>*</sub>
          </label>
          <textarea
            id='email'
            name='email'
            className='p-2 rounded-sm border-[1px] '
            placeholder='enter your message'
          />
        </span>
        <span className='w-full flex flex-col gap-1'>
          <label className='font-semibold capitalize' htmlFor='gpdr'>
            GPDR Agreement
          </label>
          <span className='flex items-center gap-2'>
            <input type='checkbox' id='gpdr' name='gpdr' />
            <label className='font-light' htmlFor='gpdr'>
              I consent to having this website store my submitted information
            </label>
          </span>
        </span>
      </div>
      <Button className='text-white font-semibold w-full py-2 px-4 rounded-md bg-secondaryColor'>
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
