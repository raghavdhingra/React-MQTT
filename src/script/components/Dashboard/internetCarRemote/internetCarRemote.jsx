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
import {
  BASE_BROKER_URL,
  PORT_NUMBER,
  PROTOCOL_TYPE,
  BASE_PUBLISH_EVENT,
  ARROW_WIDTH,
  BUTTON_KEY,
  MOUSE_EVENT,
  PUBLISH_EVENT,
} from '../../../utility';

let MqttClient = null;
let isUpKey_down = false;
let isDownKey_down = false;
let isLeftKey_down = false;
let isRightKey_down = false;

const InternetCarRemote = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isKeyboardListener, setIsKeyboardListener] = useState(false);

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

  const triggerCar = (buttonKey, mouseEvent) => {
    if (isConnected) {
      if (buttonKey === BUTTON_KEY.up) {
        if (mouseEvent === MOUSE_EVENT.up) {
          MqttClient.publish(`${BASE_PUBLISH_EVENT}${PUBLISH_EVENT.up}`, '0');
        } else if (mouseEvent === MOUSE_EVENT.down) {
          MqttClient.publish(`${BASE_PUBLISH_EVENT}${PUBLISH_EVENT.up}`, '1');
        }
      } else if (buttonKey === BUTTON_KEY.left) {
        if (mouseEvent === MOUSE_EVENT.up) {
          MqttClient.publish(`${BASE_PUBLISH_EVENT}${PUBLISH_EVENT.left}`, '0');
        } else if (mouseEvent === MOUSE_EVENT.down) {
          MqttClient.publish(`${BASE_PUBLISH_EVENT}${PUBLISH_EVENT.left}`, '1');
        }
      } else if (buttonKey === BUTTON_KEY.right) {
        if (mouseEvent === MOUSE_EVENT.up) {
          MqttClient.publish(
            `${BASE_PUBLISH_EVENT}${PUBLISH_EVENT.right}`,
            '0'
          );
        } else if (mouseEvent === MOUSE_EVENT.down) {
          MqttClient.publish(
            `${BASE_PUBLISH_EVENT}${PUBLISH_EVENT.right}`,
            '1'
          );
        }
      } else if (buttonKey === BUTTON_KEY.down) {
        if (mouseEvent === MOUSE_EVENT.up) {
          MqttClient.publish(`${BASE_PUBLISH_EVENT}${PUBLISH_EVENT.down}`, '0');
        } else if (mouseEvent === MOUSE_EVENT.down) {
          MqttClient.publish(`${BASE_PUBLISH_EVENT}${PUBLISH_EVENT.down}`, '1');
        }
      }
    }
  };

  const connectToMQTT = () => {
    setWarningMsg('Connecting to Car...');
    if (credentials.username && credentials.password) {
      setIsLoading(true);
      MqttClient = mqtt.connect(`${PROTOCOL_TYPE}://${BASE_BROKER_URL}`, {
        username: credentials.username,
        password: credentials.password,
        protocol: PROTOCOL_TYPE,
        port: PORT_NUMBER,
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

  const addKeyboardListener = () => {
    setInfoMsg(
      'Keyboard is engaged. Now, you can control the car with the arrow keys.'
    );
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp') {
        if (!isUpKey_down) {
          isUpKey_down = true;
          triggerCar(BUTTON_KEY.up, MOUSE_EVENT.down);
        }
      } else if (e.key === 'ArrowLeft') {
        if (!isLeftKey_down) {
          isLeftKey_down = true;
          triggerCar(BUTTON_KEY.left, MOUSE_EVENT.down);
        }
      } else if (e.key === 'ArrowRight') {
        if (!isRightKey_down) {
          isRightKey_down = true;
          triggerCar(BUTTON_KEY.right, MOUSE_EVENT.down);
        }
      } else if (e.key === 'ArrowDown') {
        if (!isDownKey_down) {
          isDownKey_down = true;
          triggerCar(BUTTON_KEY.down, MOUSE_EVENT.down);
        }
      }
    });
    document.addEventListener('keyup', (e) => {
      if (e.key === 'ArrowUp') {
        isUpKey_down = false;
        triggerCar(BUTTON_KEY.up, MOUSE_EVENT.up);
      } else if (e.key === 'ArrowLeft') {
        isLeftKey_down = false;
        triggerCar(BUTTON_KEY.left, MOUSE_EVENT.up);
      } else if (e.key === 'ArrowRight') {
        isRightKey_down = false;
        triggerCar(BUTTON_KEY.right, MOUSE_EVENT.up);
      } else if (e.key === 'ArrowDown') {
        isDownKey_down = false;
        triggerCar(BUTTON_KEY.down, MOUSE_EVENT.up);
      }
    });
  };

  const removeKeyboardListener = () => {
    setWarningMsg(
      'Keyboard is disengaged. You can not use the keyboard as a controller.'
    );
    document.addEventListener('keydown', null);
    document.addEventListener('keyup', null);
  };

  useEffect(() => {
    if (isKeyboardListener) {
      addKeyboardListener();
    } else {
      removeKeyboardListener();
    }
    // eslint-disable-next-line
  }, [isKeyboardListener]);

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
      <Card isShadow className='dashboard__flex'>
        <Button
          variant='success'
          className='dashboard__mobile_disable'
          title={isKeyboardListener ? 'Disengage Keyboard' : 'Engage Keyboard'}
          onClick={() => setIsKeyboardListener(!isKeyboardListener)}
        />
        <Button
          variant='info'
          isDisabled={isLoading}
          isLoading={isLoading}
          title={isConnected ? 'Disconnect' : 'Connect'}
          onClick={isConnected ? disconnectMQTT : connectToMQTT}
        />
      </Card>
    </Container>
  );
};

export default InternetCarRemote;
