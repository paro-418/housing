'use client';
import React, { useEffect, useState } from 'react';
import { FiTriangle } from 'react-icons/fi';
import Button from '../Button/page';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const scrollFunction = () => {
      if (window.scrollY >= 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', scrollFunction);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Button
      callFunction={scrollToTop}
      id='scrollToTopBtn'
      className={`${
        visible
          ? 'opacity-100 pointer-events-auto visible'
          : 'opacity-0 pointer-events-none invisible'
      } duration-100 fixed flex justify-center items-center bottom-[3rem] right-[4rem] w-[3rem] h-[3rem] rounded-md bg-secondaryColor text-white cursor-pointer`}
    >
      <FiTriangle />
    </Button>
  );
};

export default ScrollButton;
