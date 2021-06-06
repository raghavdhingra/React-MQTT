import React from 'react';
import mqtt from 'mqtt';
import { atom, useRecoilState } from 'recoil';
import Header from '../../common/header/header';
import Body from '../../common/body/body';
import Button from '../../common/button/button';
import Input from '../../common/input/input';
import Hr from '../../common/hr/hr';
import Card from '../../common/card/card';
import Container from '../../common/container/container';
import Alert from '../../common/alert/alert';

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

  const establishConnection = () => {
    if (loginCredentials.username && loginCredentials.password) {
      const mqttValidation = mqtt.connect('ws://mqtt.raghavdhingra.com', {
        username: 'raghavdhingrs',
        password: 'qwerty1234',
        protocol: 'ws',
        port: '3033',
      });
      mqttValidation.on('error', () => {});
      mqttValidation.on('connect', (a) => {
        console.log(a);
      });
    } else {
      alert('No');
    }
  };

  return (
    <>
      <Container>
        <Alert>YO</Alert>
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
