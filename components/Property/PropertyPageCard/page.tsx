import Image from 'next/image';
import React, { useState } from 'react';
import Button from '../../Button/page';
import { AiOutlineLeft, AiOutlineRight, AiOutlineHeart } from 'react-icons/ai';
import { BsCarFront, BsPerson } from 'react-icons/bs';
import { GoPaperclip } from 'react-icons/go';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { FcLike } from 'react-icons/fc';
import { MdOutlineOpenInFull, MdOutlineCloseFullscreen } from 'react-icons/md';
import Link from 'next/link';
import { TbSofa } from 'react-icons/tb';
import { FaShower } from 'react-icons/fa6';
import { GiThermometerScale } from 'react-icons/gi';

interface PropertyPageCardInterface {
  imagesArray: string[];
  row?: boolean;
}

const PropertyPageCard: React.FC<PropertyPageCardInterface> = ({
  imagesArray,
  row = false,
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
    <div className='bg-white shadow'>
      <div className={`flex ${row ? 'flex-row' : 'flex-col'}`}>
        <div
          className={`relative  ${row ? 'basis-1/3' : 'w-full'} ${
            row ? 'h-[30vh]' : 'h-[55vh]'
          } `}
        >
          <Image
            src={imagesArray[currentImage]}
            alt='furniture'
            fill={true}
            objectFit='cover'
            loading='lazy'
          />
          <Button
            callFunction={() => changeCurrentImageHandler(-1)}
            className={`absolute  ${
              row ? 'text-lg' : 'text-2xl'
            } bg-primaryDarkColor  text-white font-bold hover:cursor-pointer top-1/2 p-2 -translate-y-1/2 left-0 border-2 border-primaryColor/50`}
          >
            <AiOutlineLeft />
          </Button>
          <Button
            callFunction={() => changeCurrentImageHandler(1)}
            className={`absolute  ${
              row ? 'text-lg' : 'text-2xl'
            } bg-primaryDarkColor  text-white font-bold hover:cursor-pointer top-1/2 p-2 -translate-y-1/2 right-0 border-2 border-primaryColor/50`}
          >
            <AiOutlineRight />
          </Button>
          <div className='absolute p-4 bottom-0 left-0 text-white bg-gradient-to-t from-black/80 w-full pointer-events-none flex justify-between items-center'>
            <span>rs 2501545</span>
            <span className='flex items-center justify-between gap-4 text-xl'>
              <Button className='cursor-pointer'>
                <MdOutlineCloseFullscreen />
              </Button>
              <Button className='cursor-pointer'>
                <AiOutlineHeart />
              </Button>
              <Button className='cursor-pointer'>
                <IoIosAddCircleOutline />
              </Button>
            </span>
          </div>
          <span
            className={`text-[.7rem] bg-primaryDarkColor p-1 rounded text-white w-fit uppercase absolute top-4 right-4  ${
              row ? 'hidden' : 'block'
            }`}
          >
            status
          </span>
        </div>
        <div className='flex-grow'>
          <div className={` ${row ? 'p-5' : 'p-3 pt-2'} flex flex-col gap-2`}>
            <span
              className={`text-[.7rem] bg-primaryDarkColor p-1 rounded text-white w-fit uppercase  ${
                row ? 'block' : 'hidden'
              }`}
            >
              status
            </span>
            <Link href='#' className='text-lg hover:text-secondaryColor'>
              name
            </Link>
            <div className='flex justify-between  w-full'>
              <span className='flex flex-col gap-2'>
                <div className='flex text-gray-600  gap-4 '>
                  <span className='flex gap-1 items-center'>
                    <TbSofa /> 2
                  </span>
                  <span className='flex gap-1 items-center'>
                    <FaShower /> 2
                  </span>
                  <span className='flex gap-1 items-center'>
                    <BsCarFront /> 1
                  </span>
                  <span className='flex gap-1 items-center'>
                    <GiThermometerScale /> 1120 sqft
                  </span>
                </div>
                <span className='uppercase text-sm font-semibold'>villa</span>
              </span>
              <Link
                href='#'
                className='bg-secondaryColor py-1 px-2 rounded font-semibold text-white h-fit w-fit mt-auto'
              >
                Details
              </Link>
            </div>
          </div>
          <div
            className={`flex justify-between items-center p-4 border-t-[1px] border-t-gray-300`}
          >
            <Link
              href='to-who-listed-this'
              className='hover:text-secondaryColor flex items-center gap-3'
            >
              <BsPerson /> company.in
            </Link>
            <span className='flex items-center gap-3'>
              <GoPaperclip />1 month ago
            </span>
          </div>
        </div>
      </div>

      {/* if row wise */}
    </div>
  );
};

export default PropertyPageCard;
