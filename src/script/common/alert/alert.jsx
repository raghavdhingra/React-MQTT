import React from 'react';
import './alert.scss';

const Alert = ({ children, type }) => {
  const typeClass = type || 'info'; // info, error, warning, success

  return (
    <>
      <div className={`alert alert__${typeClass}`}>{children}</div>
    </>
  );
};

export default Alert;
