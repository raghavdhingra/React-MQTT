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

  function absorbEvent_(event) {
    var e = event || window.event;
    e.stopPropagation && e.stopPropagation();
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
  }

  return (
    <button
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={(e) => {
        onMouseDown();
        absorbEvent_(e);
      }}
      onTouchMove={absorbEvent_}
      onTouchCancel={absorbEvent_}
      onTouchEnd={(e) => {
        onMouseUp();
        absorbEvent_(e);
      }}
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
