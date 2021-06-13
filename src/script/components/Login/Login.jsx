import React, { useEffect } from 'react';
import mqtt from 'mqtt';
import { useHistory } from 'react-router';
import { useRecoilState } from 'recoil';
import Header from '../../common/header/header';
import Body from '../../common/body/body';
import Button from '../../common/button/button';
import Input from '../../common/input/input';
import Hr from '../../common/hr/hr';
import Card from '../../common/card/card';
import Container from '../../common/container/container';
import {
  credentialAtom,
  loginState,
  loadingState,
  errorAlert,
  successAlert,
  warningAlert,
} from '../../RecoilAtom/state';

import './Login.scss';

const Login = () => {
  const [credentials, setCredentials] = useRecoilState(credentialAtom);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const [isLoading, setIsLoading] = useRecoilState(loadingState);
  // eslint-disable-next-line
  const [errorMsg, setErrorMsg] = useRecoilState(errorAlert);
  // eslint-disable-next-line
  const [successMsg, setSuccessMsg] = useRecoilState(successAlert);
  // eslint-disable-next-line
  const [warningMsg, setWarningMsg] = useRecoilState(warningAlert);

  const history = useHistory();

  const changeValue = (key, val) => {
    setCredentials({ ...credentials, [key]: val });
  };

  useEffect(() => {
    if (isLoggedIn) {
      history.replace('/dashboard');
    }
  }, [history, isLoggedIn]);

  const establishConnection = () => {
    setIsLoading(true);
    setWarningMsg('Connection is Progress...');

    if (credentials.username && credentials.password) {
      const protocolType =
        process.env.NODE_ENV === 'development' ? 'ws' : 'wss';
      const portNumber =
        process.env.NODE_ENV === 'development' ? '3033' : '8083';
      const mqttValidation = mqtt.connect(
        `${protocolType}://mqtt.raghavdhingra.com`,
        {
          username: credentials.username,
          password: credentials.password,
          protocol: protocolType,
          port: portNumber,
        }
      );
      mqttValidation.on('error', () => {
        setIsLoading(false);
        setErrorMsg('Invalid Credentials');
        setIsLoggedIn(false);
      });
      mqttValidation.on('connect', () => {
        setIsLoading(false);
        setSuccessMsg('Connection Established');
        setIsLoggedIn(true);
      });
    } else {
      setIsLoading(false);
      setErrorMsg('Empty Credential');
      setIsLoggedIn(false);
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
              isDisabled={isLoading}
              value={credentials.username}
              onChange={(e) => changeValue('username', e)}
            />
            <Input
              placeholder='Password'
              isDisabled={isLoading}
              type='password'
              value={credentials.password}
              margin='top'
              onChange={(e) => changeValue('password', e)}
            />
            <Button
              isDisabled={isLoading}
              isLoading={isLoading}
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
