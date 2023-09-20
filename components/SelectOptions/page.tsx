'use client';
import React, { useState, useEffect, useRef } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

interface SelectOptionsInterface {
  className?: string;
  options: string[];
}

const SelectOptions: React.FC<SelectOptionsInterface> = ({
  className,
  options = [],
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [expand, setExpand] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [searchedWord, setSearchedWord] = useState<string | null>(null);

  // const [opened, setOpened] = useState<boolean>(false);

  const expandHandler = () => {
    setSearchedWord(null);
    setExpand(!expand);
  };
  useEffect(() => {
    setSearchedWord(null);
    if (options.length > 0) setSelectedOption(options[0]);
  }, [options]);

  const searchInput = () => {
    if (inputRef.current) {
      setSearchedWord(inputRef.current?.value.trim().toLowerCase());
    }
  };
  return (
    <div
      onClick={expandHandler}
      className={`relative flex items-center justify-between   bg-white border-[1px] border-primaryColor  p-3 rounded ${className} cursor-pointer `}
    >
      <span className=''>{selectedOption}</span>
      <RiArrowDownSLine />
      {expand && (
        <div
          className='absolute top-full left-0 w-full
      border-[1px] border-primaryColor rounded-lg overflow-hidden mt-2 bg-white'
        >
          <div className='p-3'>
            <input
              ref={inputRef}
              onClick={(e) => e.stopPropagation()}
              type='text'
              className='w-full border-[1px] border-primaryColor p-2'
              onChange={searchInput}
            />
          </div>

          <div className='flex flex-col overflow-hidden max-h-[30vh] overflow-y-scroll'>
            {!searchedWord &&
              options.map((option) => (
                <span
                  key={option}
                  onClick={() => setSelectedOption(option)}
                  className='p-3 hover:bg-secondaryLightColor'
                >
                  {option}
                </span>
              ))}
            {searchedWord &&
              options.map((option) => (
                <span
                  key={option}
                  onClick={() => setSelectedOption(option)}
                  className={`p-3 hover:bg-secondaryLightColor  ${
                    option.trim().toLowerCase().includes(searchedWord)
                      ? 'block'
                      : 'hidden'
                  }`}
                >
                  {option}
                </span>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectOptions;
