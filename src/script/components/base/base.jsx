import React, { useEffect } from 'react';
import Login from '../Login/Login';
import { atom, useRecoilState } from 'recoil';
import { Route, Switch, useHistory } from 'react-router-dom';
import Alert from '../../common/alert/alert';

const baseState = atom({
  key: 'baseState',
  default: {
    isLoggedIn: false,
    error: '',
    info: '',
    success: '',
    warning: '',
  },
});

const Base = () => {
  const history = useHistory();
  const [loginState, setLoginState] = useRecoilState(baseState);

  useEffect(() => {
    if (loginState.isLoggedIn) {
      history.push('/dashboard');
    } else {
      history.push('/login');
    }
  }, [loginState, history]);

  return (
    <Switch>
      <Route path='/login' exact>
        <Login />
      </Route>
      <Route path='/dashboard' exact component={Login} />
      {loginState.error && <Alert />}
    </Switch>
  );
};

export default Base;
