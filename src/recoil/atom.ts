import { atom } from 'recoil';
import { AirPollutionData, WeatherData } from '../apiClient/type';

export const weatherData = atom<WeatherData | null>({
  key: 'weatherData',
  default: null,
});

export const airPollutionData = atom<AirPollutionData | null>({
  key: 'airPollutionData',
  default: null,
});

export const weeklyWeatherData = atom<WeeklyWeatherData | null>({
  key: 'weeklyWeatherData',
  default: null,
});
