import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../loader/loader';
import './button.scss';

const Button = ({
  title,
  margin,
  variant,
  isLink,
  href,
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
    info: 'info',
    success: 'success',
  };

  return (
    <div className={`button__container button--${className || ''}`}>
      {!isLink ? (
        <button
          className={`button button__${margin}Margin button__${
            variantClass[variant] || variantClass.primary
          }`}
          onClick={onClick}
          disabled={isDisabled}
        >
          {isLoading ? <Loader /> : <span>{title}</span>}
        </button>
      ) : (
        <Link
          className={`button button__${margin}Margin button__${
            variantClass[variant] || variantClass.primary
          }`}
          to={isDisabled ? '' : href}
        >
          {isLoading ? <Loader /> : <span>{title}</span>}
        </Link>
      )}
    </div>
  );
};

export default Button;
