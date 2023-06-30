import { atom } from 'recoil';
import { LocationState } from './type';

export const currentLocation = atom<LocationState>({
  key: 'currentLocation',
  default: {
    lat: 0,
    lon: 0,
  },
});
