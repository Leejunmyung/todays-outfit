import { QueryKey, useQuery } from '@tanstack/react-query';
import { getCurrentWeather } from './Api';
import { WeatherData, WeatherParams } from './type';

export const useGetWeather = (weatherParams: WeatherParams) => {
  const querykey: QueryKey = ['CurrentWeather'];
  const { data, isLoading, error } = useQuery<WeatherData>(querykey, () => getCurrentWeather(weatherParams));
  return [isLoading, data, error];
};
