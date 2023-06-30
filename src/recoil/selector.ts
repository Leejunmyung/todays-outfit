import { selector } from 'recoil';
import { currentLocation } from './atom';

export const exampleCountState = selector({
  key: 'exampleCountState',
  get: ({ get }) => {
    const text = get(currentLocation);
    return text;
  },
});
