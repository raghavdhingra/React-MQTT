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
  const BUTTON_KEY = {
    up: 'button_up',
    down: 'button_down',
    right: 'button_right',
    left: 'button_left',
  };
  const MOUSE_EVENT = {
    up: 'mouse_up',
    down: 'mouse_down',
  };

  const triggerCar = (buttonKey, mouseEvent) => {
    if (isConnected) {
      if (buttonKey === BUTTON_KEY.up) {
        if (mouseEvent === MOUSE_EVENT.up) {
          MqttClient.publish('car/remote/up', '0');
        } else if (mouseEvent === MOUSE_EVENT.down) {
          MqttClient.publish('car/remote/up', '1');
        }
      } else if (buttonKey === BUTTON_KEY.left) {
        if (mouseEvent === MOUSE_EVENT.up) {
          MqttClient.publish('car/remote/left', '0');
        } else if (mouseEvent === MOUSE_EVENT.down) {
          MqttClient.publish('car/remote/left', '1');
        }
      } else if (buttonKey === BUTTON_KEY.right) {
        if (mouseEvent === MOUSE_EVENT.up) {
          MqttClient.publish('car/remote/right', '0');
        } else if (mouseEvent === MOUSE_EVENT.down) {
          MqttClient.publish('car/remote/right', '1');
        }
      } else if (buttonKey === BUTTON_KEY.down) {
        if (mouseEvent === MOUSE_EVENT.up) {
          MqttClient.publish('car/remote/down', '0');
        } else if (mouseEvent === MOUSE_EVENT.down) {
          MqttClient.publish('car/remote/down', '1');
        }
      }
    }
  };

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
  }, []);

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
              onMouseDown={() => triggerCar(BUTTON_KEY.up, MOUSE_EVENT.down)}
              onMouseUp={() => triggerCar(BUTTON_KEY.up, MOUSE_EVENT.up)}
            >
              <img src={ARROW} alt='down_arrow' width={ARROW_WIDTH} />
            </RoundButton>
          </div>
          <div className='dashboard__card-grid-2 dashboard__center-align'>
            <RoundButton
              variant='danger'
              className='dashboard__btn-left'
              onMouseDown={() => triggerCar(BUTTON_KEY.left, MOUSE_EVENT.down)}
              onMouseUp={() => triggerCar(BUTTON_KEY.left, MOUSE_EVENT.up)}
            >
              <img src={ARROW} alt='down_arrow' width={ARROW_WIDTH} />
            </RoundButton>
            <RoundButton
              variant='danger'
              className='dashboard__btn-right'
              onMouseDown={() => triggerCar(BUTTON_KEY.right, MOUSE_EVENT.down)}
              onMouseUp={() => triggerCar(BUTTON_KEY.right, MOUSE_EVENT.up)}
            >
              <img src={ARROW} alt='down_arrow' width={ARROW_WIDTH} />
            </RoundButton>
          </div>
          <div className='dashboard__center-align'>
            <RoundButton
              variant='danger'
              margin='auto'
              className='dashboard__btn-down'
              onMouseDown={() => triggerCar(BUTTON_KEY.down, MOUSE_EVENT.down)}
              onMouseUp={() => triggerCar(BUTTON_KEY.down, MOUSE_EVENT.up)}
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
