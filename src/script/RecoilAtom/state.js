import { atom } from 'recoil';

export const baseStateAtom = atom({
  key: 'baseStateAtom',
  default: {
    isLoggedIn: false,
    isLoading: false,
    error: '',
    info: '',
    success: '',
    warning: '',
  },
});

export const credentialAtom = atom({
  key: 'credentialAtom',
  default: {
    username: 'raghavdhingra',
    password: 'qwerty1234',
  },
});
