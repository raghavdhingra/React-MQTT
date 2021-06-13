import React, { useEffect, useState } from 'react';
import mqtt from 'mqtt';
import { useRecoilState } from 'recoil';
import Card from '../../../common/card/card';
import Container from '../../../common/container/container';
import {
  credentialAtom,
  errorAlert,
  loadingState,
  successAlert,
  warningAlert,
} from '../../../RecoilAtom/state';
import Header from '../../../common/header/header';
import PointStatus from '../../../common/pointStatus/pointStatus';

let MqttClient = null;
const InternetCarRemote = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [credentials] = useRecoilState(credentialAtom);
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useRecoilState(loadingState);
  // eslint-disable-next-line
  const [errorMsg, setErrorMsg] = useRecoilState(errorAlert);
  // eslint-disable-next-line
  const [successMsg, setSuccessMsg] = useRecoilState(successAlert);
  // eslint-disable-next-line
  const [warningMsg, setWarningMsg] = useRecoilState(warningAlert);

  useEffect(() => {
    setWarningMsg('Connecting to Car...');
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (credentials.username && credentials.password) {
      setIsLoading(true);
      const protocolType =
        process.env.NODE_ENV === 'development' ? 'ws' : 'wss';
      const portNumber =
        process.env.NODE_ENV === 'development' ? '3033' : '8083';
      MqttClient = mqtt.connect(`${protocolType}://mqtt.raghavdhingra.com`, {
        username: credentials.username,
        password: credentials.password,
        protocol: protocolType,
        port: portNumber,
      });
      MqttClient.on('connect', () => {
        setIsConnected(true);
        setIsLoading(false);
        setSuccessMsg('Connected to the Car');
      });
      MqttClient.on('error', () => {
        setIsConnected(false);
        setIsLoading(false);
        setErrorMsg('Disconnected from the Car');
      });
    } else {
      setIsConnected(false);
      setIsLoading(false);
      setSuccessMsg('Error while connection');
    }
    // eslint-disable-next-line
  }, [credentials]);

  return (
    <Container>
      <Card isShadow variant='dark'>
        <Header>
          <PointStatus isConnected={isConnected} /> YO
        </Header>
      </Card>
    </Container>
  );
};

export default InternetCarRemote;
