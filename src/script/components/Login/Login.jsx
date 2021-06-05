import React from 'react';
import Header from '../../common/header/header';
import Body from '../../common/body/body';
import Button from '../../common/button/button';
import Input from '../../common/input/input';
import Hr from '../../common/hr/hr';
import Card from '../../common/card/card';
import Container from '../../common/container/container';
import './Login.scss';

const Login = () => {
  return (
    <>
      <Container>
        <Card variant='dark'>
          <Header>Login</Header>
          <Hr />
          <Body>
            <Input
              placeholder='Username'
              type='text'
              value='raghavdhingra'
            ></Input>
            <Input placeholder='Password' margin='top'></Input>
            <Button title='Check In' margin='top' />
          </Body>
        </Card>
      </Container>
    </>
  );
};

export default Login;
