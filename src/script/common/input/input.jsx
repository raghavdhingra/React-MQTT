import React from 'react';
import './input.scss';

const Input = ({ placeholder, type, value, onChange, margin }) => {
  return (
    <>
      <input
        className={`input input__${margin}Margin`}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
