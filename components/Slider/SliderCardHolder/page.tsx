'use client';
import React, { useEffect } from 'react';
import Button from '@/components/Button/page';
import Image from 'next/image';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useState } from 'react';
import { SliderInterface } from '@/types/types';

const SliderCardHolder: React.FC<SliderInterface> = ({ slides }) => {
  const [translateValue, setTranslateValue] = useState(0);
  const [timesSwiped, setTimesSwiped] = useState(0);

  const changeTranslateValue = (arg: number) => {
    setTimesSwiped((prev) => prev - arg);
    const slideContainer = document.getElementById(
      'slide-container'
    ) as HTMLDivElement;
    const width = slideContainer.offsetWidth * arg;
    const cards = document.querySelectorAll(
      '.card'
    ) as NodeListOf<HTMLDivElement>;

    if (timesSwiped === slides.length - 2 || timesSwiped < 0) {
      console.log(timesSwiped);
      cards.forEach((card) => {
        card.style.transform = `translateX(0px)`;
      });
      setTranslateValue(0);
      setTimesSwiped(0);

      return;
    }

    cards.forEach((card) => {
      console.log(translateValue);
      card.style.transform = `translateX(${translateValue + width / 3}px)`;
    });
    setTranslateValue((prev) => prev + width / 3);
  };

  return (
    <div
      id='slide-container'
      className={`relative rounded-md p-4  flex gap-11  overflow-hidden basis-[75%] shadow-lg `}
    >
      {slides.map(({ name, date, description, avatarUrl }) => (
        <Button
          key={name}
          id='card'
          className=' flex card duration-200 flex-col gap-3 min-w-[30%] shadow-lg border-[1px] p-4'
        >
          <div className='gap-4 w-full  flex '>
            <Image
              src={'/' + `${avatarUrl ? avatarUrl : ''}`}
              alt={name}
              className='rounded-full'
              width={50}
              height={50}
            />
            <div className='flex flex-col gap-[0.1rem]'>
              <span className='font-bold capitalize'>{name}</span>
              <span>{date}</span>
            </div>
          </div>
          <span className='min-h-[10rem]'>
            <p className=''>{description}</p>
          </span>
        </Button>
      ))}

      <Button
        callFunction={() => changeTranslateValue(1)}
        className={`  absolute   bg-secondaryColor/90  text-white font-bold hover:cursor-pointer top-1/2 p-4 -translate-y-1/2  left-0  rounded-full justify-center items-center`}
      >
        <AiOutlineLeft />
      </Button>
      <Button
        callFunction={() => changeTranslateValue(-1)}
        className={`  absolute  bg-secondaryColor/90  text-white font-bold hover:cursor-pointer top-1/2 p-4 -translate-y-1/2 right-0 rounded-full`}
      >
        <AiOutlineRight />
      </Button>
    </div>
  );
};

export default SliderCardHolder;
