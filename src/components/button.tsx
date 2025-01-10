import React, { FC } from 'react';

interface ButtonProps {
  value: string;
  className: string;
  onClick: (value: string) => void;
}

const Button: FC<ButtonProps> = ({ value, className, onClick }) => (
  <button className={`button ${className}`} onClick={() => onClick(value)}>
    {value}
  </button>
);

export default Button;
