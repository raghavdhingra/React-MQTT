import React from 'react';
import ReactDOM from 'react-dom';
import Base from './script/components/base';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Base />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
