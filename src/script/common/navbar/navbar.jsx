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
    setLoginState({
      ...loginState,
      isLoading: false,
      success: 'Successfully Logged out',
      isLoggedIn: false,
    });
    setCredentials({ username: '', password: '' });
    history.push('/');
  };

  return (
    <div className={`navbar ${className || ''}`}>
      <div>yo</div>
      <div className='navbar__leftFlex'>
        <span className='navbar__username'>🏠 {credentials.username}</span>
        <Button title='Logout' onClick={logoutSession} />
      </div>
    </div>
  );
};

export default Navbar;
