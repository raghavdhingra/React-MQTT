import React from 'react';
import Loader from '../loader/loader';
import './button.scss';

const Button = ({
  title,
  margin,
  variant,
  onClick,
  isDisabled,
  isLoading,
  className,
}) => {
  const variantClass = {
    primary: 'primary',
    secondary: 'secondary',
    danger: 'danger',
    warning: 'warning',
  };

  return (
    <div className={`button__container button--${className}`}>
      <button
        className={`button button__${margin}Margin button__${
          variantClass[variant] || variantClass.primary
        }`}
        onClick={onClick}
        disabled={isDisabled}
      >
        {isLoading ? <Loader /> : <span>{title}</span>}
      </button>
    </div>
  );
};

export default Button;
