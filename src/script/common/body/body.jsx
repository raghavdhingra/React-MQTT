import React from 'react';
import './body.scss';

const Body = ({ children }) => {
  return (
    <>
      <div className='body'>{children}</div>
    </>
  );
};

export default Body;
