import { atom } from 'recoil';

export const loginState = atom({
  key: 'loginState',
  default: false,
});

export const loadingState = atom({
  key: 'loading',
  default: false,
});

export const warningAlert = atom({
  key: 'warning',
  default: '',
});
export const successAlert = atom({
  key: 'success',
  default: '',
});
export const infoAlert = atom({
  key: 'info',
  default: '',
});
export const errorAlert = atom({
  key: 'error',
  default: '',
});

export const credentialAtom = atom({
  key: 'credentialAtom',
  default: {
    username: 'raghavdhingra',
    password: 'qwerty1234',
  },
});
