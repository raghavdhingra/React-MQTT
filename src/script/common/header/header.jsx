import React from 'react';
import './header.scss';

const Header = ({ children }) => {
  return (
    <>
      <div className='header'>{children}</div>
    </>
  );
};

export default Header;
