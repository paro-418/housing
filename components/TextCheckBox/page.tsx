import { TextCheckBoxInterface } from '@/types/types';
import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { RiArrowDownSLine } from 'react-icons/ri';

const TextCheckBox: React.FC<TextCheckBoxInterface> = ({
  label,
  className,
  toggleChecked,
  checked,
  hideCheckIcon = false,
  showDownArrow = false,
}) => {
  return (
    <div
      className={`relative w-fit flex justify-between items-center py-2  ${className}`}
    >
      <span className='capitalize'>{label}</span>
      <input
        type='checkbox'
        className='absolute left-0 right-0 top-0 bottom-0 peer/checkbox opacity-0 '
        onChange={toggleChecked}
        // checked={checked}
      />
      {showDownArrow && <RiArrowDownSLine />}
      {!hideCheckIcon && (
        <AiOutlineCheckCircle
          className={`peer-checked/checkbox:block hidden text-xl`}
        />
      )}
    </div>
  );
};

export default TextCheckBox;
