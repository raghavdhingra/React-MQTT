import React from 'react';
import './header.scss';

const Header = ({ children, align }) => {
  const alignClass = {
    center: 'center',
    default: 'default',
  };
  return (
    <div
      className={`header header--${alignClass[align] || alignClass.default}`}
    >
      {children}
    </div>
  );
};

export default Header;
