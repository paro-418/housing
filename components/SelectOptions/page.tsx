'use client';
import { SelectOptionsInterface } from '@/types/types';
import React, { useState, useEffect, useRef } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

const SelectOptions: React.FC<SelectOptionsInterface> = ({
  className,
  options = [],
  showTextInput = true,
  placeHolder,
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
    if (placeHolder) setSelectedOption(null);
  }, [placeHolder]);

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
      <span className={`${!selectedOption && 'text-gray-400'}`}>
        {selectedOption ? selectedOption : placeHolder}
      </span>
      <RiArrowDownSLine />
      {expand && (
        <div
          className='absolute top-full left-0 w-full
      border-[1px] z-50 border-primaryColor rounded-lg overflow-hidden mt-2 bg-white'
        >
          {showTextInput && (
            <div className='p-3'>
              <input
                ref={inputRef}
                onClick={(e) => e.stopPropagation()}
                type='text'
                className='w-full border-[1px] border-primaryColor p-2'
                onChange={searchInput}
              />
            </div>
          )}

          <div className='flex flex-col overflow-hidden max-h-[30vh] overflow-y-scroll'>
            <span
              key={placeHolder}
              onClick={() => setSelectedOption(null)}
              className='p-3 hover:bg-secondaryLightColor'
            >
              {placeHolder}
            </span>
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
