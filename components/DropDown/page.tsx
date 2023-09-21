'use client';
import React, { useRef, useState } from 'react';
import TextCheckBox from '../TextCheckBox/page';
import Button from '../Button/page';
import { DropDownInterface } from '@/types/types';

const DropDown: React.FC<DropDownInterface> = ({
  label,
  options = [],
  className,
  showSelectDeselectAll = true,
  showTextInput = true,
}) => {
  const [checked, setChecked] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [searchedWord, setSearchedWord] = useState<string | null>(null);

  const showDropDown = () => {
    setChecked(!checked);
  };
  const searchInput = () => {
    if (inputRef.current) {
      setSearchedWord(inputRef.current?.value.trim().toLowerCase());
    }
  };
  return (
    <div className={`relative  bg-white px-3 flex-grow ${className}`}>
      <TextCheckBox
        hideCheckIcon
        label={label}
        toggleChecked={showDropDown}
        className='w-full hover:bg-none'
        showDownArrow
      />

      {checked && (
        <div
          className={`absolute left-0 border-[1px] border-primaryColor  bg-white `}
        >
          {showTextInput && (
            <input
              type='text'
              className='border-[1px] border-secondaryColor p-2 m-2 rounded-sm'
              ref={inputRef}
              onChange={searchInput}
            />
          )}
          {showSelectDeselectAll && (
            <div className='flex items-center border-[1px] border-gray-200 w-fit mx-auto my-3 rounded overflow-hidden'>
              <Button className='capitalize hover:bg-gray-100 border-[1px] border-gray-200 text-xs p-2'>
                select all
              </Button>
              <Button className='capitalize hover:bg-gray-100 border-[1px] border-gray-200 text-xs p-2'>
                deselect all
              </Button>
            </div>
          )}

          <div className=''>
            {!searchedWord &&
              options.map((option) => (
                <TextCheckBox
                  key={option}
                  label={option}
                  className={`hover:bg-secondaryLightColor w-full p-2 `}
                  //   checked={!!selectAll}
                />
              ))}
            {searchedWord &&
              options.map((option) => (
                <TextCheckBox
                  //   checked={!!selectAll}
                  key={option}
                  label={option}
                  className={`hover:bg-secondaryLightColor w-full p-2 ${
                    option.trim().toLowerCase().includes(searchedWord)
                      ? 'block'
                      : 'hidden'
                  }`}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
