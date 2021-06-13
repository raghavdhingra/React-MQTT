import React, { useEffect, useState } from 'react';
import mqtt from 'mqtt';
import { useRecoilState } from 'recoil';
import Card from '../../../common/card/card';
import Container from '../../../common/container/container';
import {
  credentialAtom,
  errorAlert,
  infoAlert,
  loadingState,
  successAlert,
  warningAlert,
} from '../../../RecoilAtom/state';
import Header from '../../../common/header/header';
import PointStatus from '../../../common/pointStatus/pointStatus';
import RoundButton from '../../../common/button/roundButton';
import Button from '../../../common/button/button';
import ARROW from '../../../../images/arrow.svg';

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
  // eslint-disable-next-line
  const [infoMsg, setInfoMsg] = useRecoilState(infoAlert);

  const ARROW_WIDTH = '40px';

  const connectToMQTT = () => {
    setWarningMsg('Connecting to Car...');
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
  };

  const disconnectMQTT = () => {
    setIsConnected(false);
    MqttClient = null;
    setInfoMsg('Disconnected from the car');
  };

  useEffect(() => {
    connectToMQTT();
    // eslint-disable-next-line
  }, [credentials]);

  return (
    <Container>
      <Card isShadow variant='default'>
        <Header>
          <PointStatus isConnected={isConnected} />{' '}
          {isConnected ? 'Active' : 'Inactive'}
        </Header>
      </Card>
      <Card isShadow variant='default'>
        <Card variant='dark'>
          <div className='dashboard__center-align'>
            <RoundButton
              variant='danger'
              margin='auto'
              className='dashboard__img-up'
            >
              <img src={ARROW} alt='down_arrow' width={ARROW_WIDTH} />
            </RoundButton>
          </div>
          <div className='dashboard__card-grid-2 dashboard__center-align'>
            <RoundButton variant='danger' className='dashboard__btn-left'>
              <img src={ARROW} alt='down_arrow' width={ARROW_WIDTH} />
            </RoundButton>
            <RoundButton variant='danger' className='dashboard__btn-right'>
              <img src={ARROW} alt='down_arrow' width={ARROW_WIDTH} />
            </RoundButton>
          </div>
          <div className='dashboard__center-align'>
            <RoundButton
              variant='danger'
              margin='auto'
              className='dashboard__btn-down'
            >
              <img src={ARROW} alt='down_arrow' width={ARROW_WIDTH} />
            </RoundButton>
          </div>
        </Card>
      </Card>
      <Card isShadow>
        <Button
          variant='info'
          title={isConnected ? 'Disconnect' : 'Connect'}
          onClick={isConnected ? disconnectMQTT : connectToMQTT}
        />
      </Card>
    </Container>
  );
};

export default InternetCarRemote;
