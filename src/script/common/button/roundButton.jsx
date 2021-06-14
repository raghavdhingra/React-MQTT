import React from 'react';

const RoundButton = ({
  className,
  onClick,
  title,
  variant,
  margin,
  children,
  onMouseDown,
  onMouseUp,
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
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={onMouseDown}
      onTouchEnd={onMouseUp}
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
