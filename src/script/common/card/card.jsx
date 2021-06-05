import React from 'react';
import './card.scss';

const Card = ({ variant, children }) => {
  const variantClass = variant === 'dark' ? 'dark' : 'default';

  return (
    <>
      <div className={`card card__${variantClass}`}>{children}</div>
    </>
  );
};

export default Card;
