import React from 'react';
import Container from '../../common/container/container';
import Navbar from '../../common/navbar/navbar';
import './dashboard.scss';

const Dashboard = ({ children }) => {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
};

export default Dashboard;
