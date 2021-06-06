import React from 'react';
import Header from '../../common/header/header';
import Body from '../../common/body/body';
import Button from '../../common/button/button';
import Input from '../../common/input/input';
import Hr from '../../common/hr/hr';
import Card from '../../common/card/card';
import Container from '../../common/container/container';
import { atom, useRecoilState } from 'recoil';
import mqtt from 'mqtt';
import './Login.scss';

const loginState = atom({
  key: 'loginCredentials',
  default: {
    username: 'raghavdhingra',
    password: 'qwerty1234',
  },
});

const Login = () => {
  const [loginCredentials, setLoginCredentials] = useRecoilState(loginState);
  const changeValue = (key, val) => {
    setLoginCredentials({ ...loginCredentials, [key]: val });
  };

  const establishConnection = () => {};

  return (
    <>
      <Container>
        <Card>
          <Card variant='dark' shadow>
            <Header>Login</Header>
            <Hr />
            <Body>
              <Input
                placeholder='Username'
                type='text'
                value={loginCredentials.username}
                onChange={(e) => changeValue('username', e)}
              />
              <Input
                placeholder='Password'
                type='password'
                value={loginCredentials.password}
                margin='top'
                onChange={(e) => changeValue('password', e)}
              />
              <Button
                title='Check In'
                margin='top'
                onClick={establishConnection}
              />
            </Body>
          </Card>
        </Card>
      </Container>
    </>
  );
};

export default Login;
