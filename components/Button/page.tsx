import { ButtonInterface } from '../../types/types';
import React from 'react';

const Button: React.FC<ButtonInterface> = ({
  children,
  className,
  callFunction,
  id,
}) => {
  return (
    <button id={id} onClick={callFunction} className={className}>
      {children}
    </button>
  );
};

export default Button;
