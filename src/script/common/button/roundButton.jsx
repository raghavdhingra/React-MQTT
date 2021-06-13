import React from 'react';

const RoundButton = ({
  className,
  onClick,
  title,
  variant,
  margin,
  children,
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
    <button
      onClick={onClick}
      className={`button button--round button__${margin}Margin button__${
        variant ? variantClass[variant] : variantClass.primary
      } ${className || ''}`}
    >
      {title}
      {children}
    </button>
  );
};

export default RoundButton;
