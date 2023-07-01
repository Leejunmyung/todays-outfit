import { atom } from 'recoil';
import { LocationState } from './type';

export const currentLocation = atom<LocationState>({
  key: 'currentLocation',
  default: {
    lat: 37.566535,
    lon: 126.9779692,
  },
});
