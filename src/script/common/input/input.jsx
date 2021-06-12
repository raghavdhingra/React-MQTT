import React from 'react';
import './input.scss';

const Input = ({ placeholder, type, value, onChange, margin, isDisabled }) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <>
      <input
        className={`input input__${margin}Margin`}
        placeholder={placeholder}
        type={type}
        value={value}
        disabled={isDisabled}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
