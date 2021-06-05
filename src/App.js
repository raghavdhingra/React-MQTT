import React, { useEffect, useRef, useState } from 'react';
import mqtt from 'mqtt';
import './App.css';

let client = null;

const App = () => {
  const BtnRef = useRef();
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    client = mqtt.connect('ws://mqtt.raghavdhingra.com', {
      username: 'raghavdhingra',
      password: 'qwerty1234',
      protocol: 'ws',
      port: '3033',
    });
    client.subscribe('yo');
    client.on('connect', (data) => {
      setIsConnected(true);
    });
    client.on('message', (topic, payload, packet) => {
      console.log('===');
      console.log(topic);
      console.log(new TextDecoder().decode(payload));
      console.log(packet);
    });
  }, []);

  useEffect(() => {
    BtnRef.current.addEventListener('mousedown', () => {
      client.publish('yo', 'Button press ho gya!');
    });
    BtnRef.current.addEventListener('mouseup', () => {
      client.publish('yo', 'kyu bhai! Button Upr aa gya');
    });
  }, [BtnRef]);

  // useEffect(() => {
  //   document.addEventListener('keydown', (e) => {
  //     console.log(e);
  //     // client.publish('yo', 'Key Press ho gyi!');
  //   });
  // }, []);
  // const sendPacket = () => {
  //   client.publish('yo', 'kyu bhai! pahuch gya packet!');
  // };

  return (
    <>
      <div className="connection-header">Internet Controlled Car</div>
      <div className="connection-header">
        <div
          className={isConnected ? 'header-connected' : 'header-not-connected'}
        >
          {isConnected ? 'Connected' : 'Not Connected'}
        </div>
      </div>
      <div
        ref={BtnRef}
        //  onClick={sendPacket}
        className="btn"
      >
        Click
      </div>
    </>
  );
};

export default App;
