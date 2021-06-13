import React, { useEffect } from 'react';
import Login from './Login/Login';
import Dashboard from './Dashboard/dashboard';
import { useRecoilState } from 'recoil';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Alert from '../common/alert/alert';
import {
  errorAlert,
  infoAlert,
  loginState,
  successAlert,
  warningAlert,
} from '../RecoilAtom/state';
import AppList from './Dashboard/AppList/dashboardAppList';
import InternetCarRemote from './Dashboard/internetCarRemote/internetCarRemote';

const Base = () => {
  const history = useHistory();
  const location = useLocation();
  const [isLoggedIn] = useRecoilState(loginState);
  const [errorMsg, setErrorMsg] = useRecoilState(errorAlert);
  const [successMsg, setSuccessMsg] = useRecoilState(successAlert);
  const [infoMsg, setInfoMsg] = useRecoilState(infoAlert);
  const [warningMsg, setWarningMsg] = useRecoilState(warningAlert);

  useEffect(() => {
    if (!isLoggedIn && location.pathname !== 'login') {
      history.push('/login');
    }
  }, [isLoggedIn, history, location.pathname]);

  return (
    <>
      <div className='alert__container'>
        {errorMsg && (
          <Alert
            type='error'
            title={errorMsg}
            handleDismiss={() => setErrorMsg('')}
          />
        )}
        {infoMsg && (
          <Alert
            type='info'
            title={infoMsg}
            handleDismiss={() => setInfoMsg('')}
          />
        )}
        {warningMsg && (
          <Alert
            type='warning'
            title={warningMsg}
            handleDismiss={() => setWarningMsg('')}
          />
        )}
        {successMsg && (
          <Alert
            type='success'
            title={successMsg}
            handleDismiss={() => setSuccessMsg('')}
          />
        )}
      </div>

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
