'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element';
register();
// import { Controller } from 'swiper/modules';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useSwiper } from 'swiper/react';

import 'swiper/css';

import { SliderInterface } from '@/types/types';
import Button from '../Button/page';
// import { ImageError } from 'next/dist/server/image-optimizer';
// import Image from 'next/image';
// import React, { useCallback, useEffect, useState } from 'react';
// import Button from '../Button/page';

const Slider = ({ slides }) => {
  const swiper = useSwiper();
  return (
    <div className='p-10 border-4 relative border-green-500 flex gap-4'>
      <div className='basis-1/4'></div>
      {/* <div className='basis-3/4 relative flex border-4 border-red-700'> */}
      <swiper-container
        className='border-2 border-blue-600 w-[60vw]'
        slides-per-view='3'
        speed='500'
        loop='true'
        css-mode='true'
      >
        {/* <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide> */}
        {slides.map((slide) => (
          <swiper-slide
            key={slide.name}
            className='border-2 py-2 px-4 border-green-500'
          >
            <div>
              <h1>{slide.name}</h1>
              <p>{slide.date}</p>
              <p>{slide.description}</p>
              <p>{slide.avatarUrl}</p>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
      {/* <Swiper
          spaceBetween={20}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className='border-2 border-blue-600 w-[60vw]  '
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.name}
              className='border-2 py-2 px-4 border-green-500'
            >
              <div>
                <h1>{slide.name}</h1>
                <p>{slide.date}</p>
                <p>{slide.description}</p>
                <p>{slide.avatarUrl}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
      <Button
        callFunction={() => swiper.slidePrev()}
        className='absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 left-0 bg-secondaryColor text-2xl p-2 text-white rounded-full'
      >
        <AiOutlineLeft />
      </Button>
      <Button
        callFunction={() => swiper.slideNext()}
        className='absolute top-1/2 -translate-y-1/2 translate-x-1/2 z-10  right-0 bg-secondaryColor text-2xl p-2 text-white rounded-full'
      >
        <AiOutlineRight />
      </Button>
      {/* </div> */}
    </div>
  );
};

// const Slider: React.FC<SliderInterface> = ({ className, slides }) => {
//   //   const [currentSlide, setCurrentSlide] = useState<number>(0);

//   //   const goToNextSlide = useCallback(() => {
//   //     setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//   //   }, [slides]);

//   //   const goToPreviousSlide = useCallback(() => {
//   //     setCurrentSlide((prevSlide) =>
//   //       prevSlide === 0 ? slides.length - 1 : prevSlide - 1
//   //     );
//   //   }, [slides]);

//   // useEffect(() => {
//   //   const interval = setInterval(goToNextSlide, 2000);
//   //   return () => clearInterval(interval);
//   // }, [goToNextSlide]);

//   return (
//     <></>
//     // <div className='slide-container max-w-[1120px] w-full bg-gray-700 p-16'>
//     //   <div className='slide-content'>
//     //     <div className='class-wrapper'>
//     //       <div className='card rounded bg-gray-400 w-[320px]'>
//     //         <div className='image-content  relative rounded p-4 flex flex-col items-center gap-4'>
//     //           <span className='overlay absolute left-0 top-0 h-full w-full bg-secondaryColor '></span>
//     //           <div className='card-image relative h-[200px] w-[200px]'>
//     //             <Image
//     //               src='/images/furniture4.jpg'
//     //               alt='human'
//     //               width={200}
//     //               height={200}
//     //               className='object-cover'
//     //             />
//     //           </div>
//     //         </div>
//     //         <div className='card-content  p-4 flex flex-col items-center'>
//     //           <h2 className='name text-lg font-semibold'>name</h2>
//     //           <p className='description text-base text-center'>
//     //             any description
//     //           </p>
//     //           <Button className='border-none text-base py-2 px-4 rounded m-4 hover:bg-primaryColor cursor-pointer transition-all duration-300 ease'>
//     //             view more
//     //           </Button>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>

//     // <section
//     //   className={`flex flex-col md:flex-row gap-0 justify-between    ${className}  md:mt-10  lg:mt-16  bg-primaryBlue text-white h-[35vh] md:h-[30vh] lg:h-[35vh]`}
//     // >
//     //   <h2 className='p-5 flex gap-2 md:flex-col md:text-2xl lg:text-4xl font-bold bg-black justify-center md:p-8 lg:p-16'>
//     //     <span>what our</span>
//     //     <span className='flex gap-4 '>
//     //       client says
//     //       <Image
//     //         src='/icons/rightarrow.png'
//     //         alt='hero'
//     //         width={30}
//     //         height={5}
//     //         className='invert hidden lg:block'
//     //         loading='lazy'
//     //       />
//     //     </span>
//     //   </h2>

//     //   <div className='flex gap-4 md:gap-8 basis-[75%] p-5 md:p-6 lg:p-16'>
//     //     <button onClick={goToPreviousSlide} className='focus:outline-none'>
//     //       <Image
//     //         src='/icons/prevnext.png'
//     //         alt='previous feedback'
//     //         width={50}
//     //         height={50}
//     //         className='invert rotate-180 hidden lg:block '
//     //       />
//     //       <Image
//     //         src='/icons/prevnext.png'
//     //         alt='previous feedback'
//     //         width={30}
//     //         height={30}
//     //         className='invert rotate-180 lg:hidden'
//     //       />
//     //       prev
//     //     </button>

//     //     <article className='basis-[65%]  flex-grow   rounded-lg  flex flex-col  lg:flex-row  lg:items-center md:gap-4 lg:gap-16 justify-center '>
//     //       <blockquote className=' lg:mb-4 lg:basis-[70%]  text-[0.8rem] md:text-base lg:text-xl'>
//     //         {slides[currentSlide].description}
//     //       </blockquote>
//     //       <div className='basis-[30%] '>
//     //         <p className='text-[0.8rem] md:text-sm lg:text-lg'>
//     //           {slides[currentSlide].name}
//     //         </p>
//     //       </div>
//     //     </article>
//     //     <button onClick={goToNextSlide} className='focus:outline-none'>
//     //       <Image
//     //         src='/icons/prevnext.png'
//     //         alt='previous feedback'
//     //         width={50}
//     //         height={50}
//     //         className='invert hidden lg:block'
//     //       />
//     //       <Image
//     //         src='/icons/prevnext.png'
//     //         alt='previous feedback'
//     //         width={30}
//     //         height={30}
//     //         className='invert  lg:hidden'
//     //       />
//     //       next
//     //     </button>
//     //   </div>
//     // </section>
//   );
// };

export default Slider;
