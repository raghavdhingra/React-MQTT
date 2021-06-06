import React, { useEffect } from 'react';
import Login from '../Login/Login';
import { atom, useRecoilState } from 'recoil';
import { Route, Switch, useHistory } from 'react-router-dom';

const loginState = atom({
  key: 'login',
  default: false,
});

const Base = () => {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/dashboard');
    } else {
      history.push('/login');
    }
  }, [isLoggedIn, history]);

  return (
    <Switch>
      <Route path='/login' exact>
        <Login />
      </Route>
      <Route path='/dashboard' exact component={Login} />
    </Switch>
  );
};

export default Base;
