export const BASE_BROKER_URL = 'mqtt.raghavdhingra.com';

export const PROTOCOL_TYPE =
  process.env.NODE_ENV === 'development' ? 'ws' : 'wss';

export const PORT_NUMBER =
  process.env.NODE_ENV === 'development' ? '3033' : '8083';

export const PUBLISH_EVENT = {
  up: 'up',
  down: 'down',
  right: 'right',
  left: 'left',
};

export const BASE_PUBLISH_EVENT = 'car/remote/';

export const BUTTON_KEY = {
  up: 'button_up',
  down: 'button_down',
  right: 'button_right',
  left: 'button_left',
};

export const MOUSE_EVENT = {
  up: 'mouse_up',
  down: 'mouse_down',
};
