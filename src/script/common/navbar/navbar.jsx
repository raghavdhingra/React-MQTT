import React from 'react';
import { useRecoilState } from 'recoil';
import {
  credentialAtom,
  loadingState,
  loginState,
  successAlert,
} from '../../RecoilAtom/state';
import { useHistory } from 'react-router-dom';
import Button from '../button/button';
import './navbar.scss';

const Navbar = ({ className }) => {
  const [credentials, setCredentials] = useRecoilState(credentialAtom);
  const [isLoading, setIsLoading] = useRecoilState(loadingState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const [successMsg, setSuccessMsg] = useRecoilState(successAlert);
  const history = useHistory();

  const logoutSession = () => {
    if (isLoggedIn) {
      setCredentials({ username: '', password: '' });
      setIsLoading(false);
      setIsLoggedIn(false);
      if (successMsg === 'Successfully Logged out') {
        setSuccessMsg('Successfully Logged out');
      }
    }
  };

  return (
    <div className={`navbar ${className || ''}`}>
      <Button
        title='Home'
        className='not-center'
        onClick={() => history.push('/dashboard')}
        variant='warning'
      />
      <div className='navbar__leftFlex'>
        <span className='navbar__username'>🏠 {credentials.username}</span>
        <Button
          title='Logout'
          onClick={logoutSession}
          isDisabled={isLoading}
          isLoading={isLoading}
          variant='danger'
        />
      </div>
    </div>
  );
};

export default Navbar;
