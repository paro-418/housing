'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaShower } from 'react-icons/fa';
import { TbSofa } from 'react-icons/tb';
import { BsCarFront } from 'react-icons/bs';
import { GiThermometerScale } from 'react-icons/gi';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Button from '../Button/page';

interface PropertySliderPreviewerInterface {
  imagesArray: string[];
  description: string;
  tag: string | null;
  price: number;
  rooms: number;
  showers: number;
  parkings: number;
  area: number;
}

const PropertySliderPreviewer: React.FC<PropertySliderPreviewerInterface> = ({
  area,
  description,
  imagesArray,
  parkings,
  price,
  rooms,
  showers,
  tag,
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const changeCurrentImageHandler = (arg: number) => {
    setCurrentImage((prev) => {
      if (arg < 0 && prev <= 0) return 0;
      if (arg < 0 && prev > 0) return prev - 1;
      if (arg > 0 && prev == imagesArray.length - 1) return prev;
      return prev + 1;
    });
  };
  return (
    <div className='relative border-4 border-blue-400  hover:bg-white'>
      <Image
        src={imagesArray[currentImage]}
        alt='furniture'
        width={400}
        height={400}
        className='hover:bg-white'
      />

      <Button
        callFunction={() => changeCurrentImageHandler(-1)}
        className='absolute hover:cursor-pointer top-1/2 p-2 -translate-y-1/2 left-[1rem] border-[1px] border-primaryColor/50 z-50'
      >
        <AiOutlineLeft />
      </Button>
      <Button
        callFunction={() => changeCurrentImageHandler(1)}
        className='absolute hover:cursor-pointer top-1/2 p-2 -translate-y-1/2 right-[1rem] border-[1px] border-primaryColor/50'
      >
        <AiOutlineRight />
      </Button>

      <div className='absolute p-4 bottom-0 left-0 text-white bg-gradient-to-t from-black/80 w-full pointer-events-none flex flex-col gap-1'>
        <span className='bg-black/75 text-white text-xs p-1 rounded uppercase w-fit'>
          {tag}
        </span>
        <p>{description}</p>
        <span>&#8377; {price}</span>
        <div className='flex  gap-4 '>
          <span className='flex gap-1 items-center'>
            <TbSofa /> {rooms}
          </span>
          <span className='flex gap-1 items-center'>
            <FaShower /> {showers}
          </span>
          <span className='flex gap-1 items-center'>
            <BsCarFront /> {parkings}
          </span>
          <span className='flex gap-1 items-center'>
            <GiThermometerScale /> {area} sqft
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertySliderPreviewer;
