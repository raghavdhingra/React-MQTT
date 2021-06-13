import React, { useEffect } from 'react';
import './alert.scss';

const Alert = ({ title, type, handleDismiss }) => {
  const typeClass = {
    info: 'info',
    error: 'error',
    warning: 'warning',
    success: 'success',
  };

  useEffect(() => {
    if (handleDismiss) {
      setTimeout(() => {
        handleDismiss();
      }, 2000);
    }
    // eslint-disable-next-line
  }, []);

  return title ? (
    <div className={`alert alert__${typeClass[type] || typeClass.info}`}>
      {title}
    </div>
  ) : null;
};

export default Alert;
