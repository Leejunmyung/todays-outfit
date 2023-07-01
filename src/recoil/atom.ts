import { atom } from 'recoil';
import { LocationState } from './type';
import { WeatherData } from '../apiClient/type';

export const currentLocation = atom<LocationState>({
  key: 'currentLocation',
  default: {
    lat: 37.566535,
    lon: 126.9779692,
  },
});

export const weatherData = atom<WeatherData | null>({
  key: 'weatherData',
  default: null,
});

// export const pollutionData
