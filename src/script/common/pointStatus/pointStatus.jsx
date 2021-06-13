import React from 'react';
import './pointStatus.scss';

const PointStatus = ({ className, isConnected }) => {
  return (
    <div
      className={`point_status point_status--${
        isConnected ? 'connected' : 'not-connected'
      } ${className || ''}`}
    ></div>
  );
};

export default PointStatus;
