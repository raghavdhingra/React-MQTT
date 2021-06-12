import React from 'react';
import './card.scss';

const Card = ({ variant, children, isShadow }) => {
  const variantClass = {
    dark: 'dark',
    default: 'default',
  };

  return (
    <div
      className={`card card__${
        variantClass[variant] || variantClass.default
      } card__${isShadow ? 'shadow' : ''}`}
    >
      {children}
    </div>
  );
};

export default Card;
