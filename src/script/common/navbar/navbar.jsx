import React from 'react';
import { useRecoilState } from 'recoil';
import { credentialAtom, baseStateAtom } from '../../RecoilAtom/state';
import { useHistory } from 'react-router-dom';
import Button from '../button/button';
import './navbar.scss';

const Navbar = ({ className }) => {
  const [credentials, setCredentials] = useRecoilState(credentialAtom);
  const [loginState, setLoginState] = useRecoilState(baseStateAtom);
  const history = useHistory();

  const logoutSession = () => {
    setCredentials({ username: '', password: '' });
    setLoginState({
      ...loginState,
      isLoading: false,
      success: 'Successfully Logged out',
      isLoggedIn: false,
    });
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
          isDisabled={loginState.isLoading}
          isLoading={loginState.isLoading}
          variant='danger'
        />
      </div>
    </div>
  );
};

export default Navbar;
