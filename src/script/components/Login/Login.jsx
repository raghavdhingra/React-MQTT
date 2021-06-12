import React from 'react';
import mqtt from 'mqtt';
import { useRecoilState } from 'recoil';
import Header from '../../common/header/header';
import Body from '../../common/body/body';
import Button from '../../common/button/button';
import Input from '../../common/input/input';
import Hr from '../../common/hr/hr';
import Card from '../../common/card/card';
import Container from '../../common/container/container';
import { credentialAtom, baseStateAtom } from '../../RecoilAtom/state';

import './Login.scss';

const Login = () => {
  const [credentials, setCredentials] = useRecoilState(credentialAtom);
  const [loginState, setLoginState] = useRecoilState(baseStateAtom);

  const changeValue = (key, val) => {
    setCredentials({ ...credentials, [key]: val });
  };

  const establishConnection = () => {
    setLoginState({ ...loginState, isLoading: true });

    if (credentials.username && credentials.password) {
      const mqttValidation = mqtt.connect('ws://mqtt.raghavdhingra.com', {
        username: credentials.username,
        password: credentials.password,
        protocol: 'ws',
        port: '3033',
      });
      mqttValidation.on('error', () => {
        setLoginState({
          ...loginState,
          isLoggedIn: false,
          error: 'Invalid Credentials',
          isLoading: false,
        });
      });
      mqttValidation.on('connect', () => {
        setLoginState({
          ...loginState,
          isLoggedIn: true,
          success: 'Connection Established',
          isLoading: false,
        });
      });
    } else {
      setLoginState({
        ...loginState,
        isLoggedIn: false,
        error: 'Empty Credential found',
        isLoading: false,
      });
    }
  };

  return (
    <Container>
      <Card>
        <Card variant='dark' isShadow>
          <Header>Login</Header>
          <Hr />
          <Body>
            <Input
              placeholder='Username'
              type='text'
              isDisabled={loginState.isLoading}
              value={credentials.username}
              onChange={(e) => changeValue('username', e)}
            />
            <Input
              placeholder='Password'
              isDisabled={loginState.isLoading}
              type='password'
              value={credentials.password}
              margin='top'
              onChange={(e) => changeValue('password', e)}
            />
            <Button
              isDisabled={loginState.isLoading}
              isLoading={loginState.isLoading}
              title='Check In'
              margin='top'
              onClick={establishConnection}
            />
          </Body>
        </Card>
      </Card>
    </Container>
  );
};

export default Login;
