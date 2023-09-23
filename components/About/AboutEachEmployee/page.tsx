import { AboutEachEmployeeInterface } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillFacebook,
} from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';

const AboutEachEmployee: React.FC<AboutEachEmployeeInterface> = ({
  designation = 'no designation',
  imageUrl = 'no image',
  name = 'no name',
  facebookUrl = null,
  instagramUrl = null,
  linkedUrl = null,
  twitterUrl = null,
  description,
  paragraph1,
  paragraph2,
}) => {
  return (
    <div className='border-[1px] border-primaryDarkColor/20 flex gap-4  shadow-xl  rounded-md opacity-100 p-3 '>
      <div className='overflow-hidden basis-1/3 rounded-md h-[40vh] relative group/employee '>
        <Image
          src={imageUrl}
          alt={name}
          fill={true}
          className='object-cover '
          loading='lazy'
        />
        <div className='h-1/3  absolute py-3 px-4 bottom-0 left-0 text-white bg-gradient-to-t from-black/90 w-full   flex justify-between items-end  '>
          <span className={`flex  mt-auto gap-0 duration-500 flex-col `}>
            <span className='mt-auto text-xl'>{name}</span>
            <span className='mt-auto text-base text-gray-300'>
              {designation}
            </span>
          </span>
          <span className=' translate-x-[150%]  group-hover/employee:translate-x-0  duration-150 text-2xl flex justify-center items-center gap-3'>
            <Link
              className={`cursor-pointer hover:text-[#00acee] ${
                twitterUrl ? 'block' : 'hidden'
              }`}
              href={twitterUrl ? twitterUrl : '#'}
            >
              <AiOutlineTwitter />
            </Link>
            <Link
              className={`cursor-pointer hover:text-[#d62976] ${
                instagramUrl ? 'block' : 'hidden'
              }`}
              href={instagramUrl ? instagramUrl : '#'}
            >
              <AiOutlineInstagram />
            </Link>
            <Link
              className={`cursor-pointer hover:text-[#0072b1] ${
                linkedUrl ? 'block' : 'hidden'
              }`}
              href={linkedUrl ? linkedUrl : '#'}
            >
              <BiLogoLinkedin />{' '}
            </Link>
            <Link
              className={`cursor-pointer hover:text-[#3b5998] ${
                facebookUrl ? 'block' : 'hidden'
              }`}
              href={facebookUrl ? facebookUrl : '#'}
            >
              <AiFillFacebook />
            </Link>
          </span>
        </div>
      </div>
      <div className='flex flex-col gap-3 basis-2/3 '>
        <p className='text-base text-gray-500'>{description}</p>
        <p className='text-base text-gray-500'>{paragraph1}</p>
        <p className='text-base text-gray-500'>{paragraph2}</p>
      </div>
    </div>
  );
};

export default AboutEachEmployee;
