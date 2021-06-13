import React, { useEffect } from 'react';
import Login from './Login/Login';
import Dashboard from './Dashboard/dashboard';
import { useRecoilState } from 'recoil';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Alert from '../common/alert/alert';
import { baseStateAtom } from '../RecoilAtom/state';
import AppList from './Dashboard/AppList/dashboardAppList';
import InternetCarRemote from './Dashboard/internetCarRemote/internetCarRemote';

const Base = () => {
  const history = useHistory();
  const location = useLocation();
  const [loginState, setLoginState] = useRecoilState(baseStateAtom);

  useEffect(() => {
    if (!loginState.isLoggedIn && location.pathname !== 'login') {
      history.push('/login');
    }
  }, [loginState.isLoggedIn, history, location.pathname]);

  const handleDismiss = (key) => {
    setLoginState({ ...loginState, [key]: '' });
  };

  return (
    <>
      {loginState.error && (
        <Alert
          type='error'
          title={loginState.error}
          handleDismiss={() => handleDismiss('error')}
        />
      )}
      {loginState.info && (
        <Alert
          type='info'
          title={loginState.info}
          handleDismiss={() => handleDismiss('info')}
        />
      )}
      {loginState.warning && (
        <Alert
          type='warning'
          title={loginState.warning}
          handleDismiss={() => handleDismiss('warning')}
        />
      )}
      {loginState.success && (
        <Alert
          type='success'
          title={loginState.success}
          handleDismiss={() => handleDismiss('success')}
        />
      )}
      <Switch>
        <Route path='/login' exact>
          <Login />
        </Route>
        <Route path='/dashboard'>
          <Route path='/dashboard' exact>
            <Dashboard>
              <AppList className='app_list__container' />
            </Dashboard>
          </Route>
          <Route path='/dashboard/internet-car-remote' exact>
            <Dashboard>
              <InternetCarRemote />
            </Dashboard>
          </Route>
        </Route>
      </Switch>
    </>
  );
};

export default Base;
