import React from 'react';
import './button.scss';

const Button = ({ title, margin, variant, onClick }) => {
  const variantColor = variant || 'primary';

  return (
    <div className='button__container'>
      <button
        className={`button button__${margin}Margin button__${variantColor}`}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
