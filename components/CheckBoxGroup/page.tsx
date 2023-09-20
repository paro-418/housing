import React from 'react';

interface CheckBoxGroupInterface {
  options: string[];
  className?: string;
}

const CheckBoxGroup: React.FC<CheckBoxGroupInterface> = ({
  options = [],
  className,
}) => {
  return (
    <div className={`grid grid-cols-6 gap-4 px-1 ${className}`}>
      {options.map((option) => {
        return (
          <div
            key={option}
            className='flex text-white  justify-start items-center gap-4 '
          >
            <input type='checkbox' id={option} className='scale-150' />
            <label className='text-xl' htmlFor={option}>
              {option}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default CheckBoxGroup;
