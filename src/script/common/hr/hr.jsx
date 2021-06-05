import React from 'react';
import './hr.scss';

const Hr = ({ variant }) => {
  const variantClass = variant === 'dark' ? 'dark' : 'default';

  return (
    <>
      <div className={`hr hr__${variantClass}`} />
    </>
  );
};

export default Hr;
