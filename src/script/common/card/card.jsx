import React from 'react';
import './card.scss';

const Card = ({
  variant,
  children,
  isShadow,
  isMinHeight,
  backgroundImage,
}) => {
  const variantClass = {
    dark: 'dark',
    default: 'default',
  };

  return (
    <div
      className={`card card__${
        variantClass[variant] || variantClass.default
      } card__${isShadow ? 'shadow' : ''} card__${
        isMinHeight ? 'min_height' : ''
      } card__image card__image--${backgroundImage || ''}`}
    >
      {children}
    </div>
  );
};

export default Card;
