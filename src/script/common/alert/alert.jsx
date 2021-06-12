import React, { useEffect } from 'react';
import './alert.scss';

const Alert = ({ title, type, handleDismiss }) => {
  const typeClass = type || 'info'; // info, error, warning, success

  useEffect(() => {
    if (handleDismiss) {
      setTimeout(() => {
        handleDismiss();
      }, 4000);
    }
  }, [handleDismiss]);

  return (
    <>
      <div className={`alert alert__${typeClass}`}>{title}</div>
    </>
  );
};

export default Alert;
