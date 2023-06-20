import { selector } from 'recoil';
import { textState } from './atom';

export const exampleCountState = selector({
  key: 'exampleCountState',
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});
