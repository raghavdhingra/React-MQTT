import React from 'react';
import './card.scss';

const Card = ({ variant, children, shadow }) => {
  const variantClass = variant === 'dark' ? 'dark' : 'default';
  const shadowClass = shadow ? 'shadow' : '';

  return (
    <>
      <div className={`card card__${variantClass} card__${shadowClass}`}>
        {children}
      </div>
    </>
  );
};

export default Card;
