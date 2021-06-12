import React from 'react';
import './loader.scss';

const Loader = ({ className, variant }) => {
  const variantClass = {
    default: 'default',
    dark: 'dark',
  };

  return (
    <div className={`loader__container  ${className || ''}`}>
      <div
        className={`loader loader--${
          variantClass[variantClass[variant] || variantClass.default]
        }`}
      ></div>
    </div>
  );
};

export default Loader;
