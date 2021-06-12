import React from 'react';
import ReactDOM from 'react-dom';
import Base from './script/components/base';
import { RecoilRoot } from 'recoil';
import { HashRouter } from 'react-router-dom';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <HashRouter>
        <Base />
      </HashRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
