import React from 'react';
import Loader from '../loader/loader';
import './button.scss';

const Button = ({ title, margin, variant, onClick, isDisabled, isLoading }) => {
  const variantColor = variant || 'primary';

  return (
    <div className='button__container'>
      <button
        className={`button button__${margin}Margin button__${variantColor}`}
        onClick={onClick}
        disabled={isDisabled}
      >
        {isLoading ? <Loader /> : <span>{title}</span>}
      </button>
    </div>
  );
};

export default Button;
