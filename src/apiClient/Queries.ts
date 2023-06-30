import { QueryKey, useMutation, useQuery } from '@tanstack/react-query';
import { getCurrentWeather } from './Api';
import { WeatherData, WeatherParams } from './type';
import { useRecoilValue } from 'recoil';
import { currentLocation } from '../recoil/atom';

// export const useGetWeather = () => {
//   const weatherParams = useRecoilValue(currentLocation);
//   return useQuery<WeatherData, QueryKey>(['weather'], () => {
//     return getCurrentWeather(weatherParams);
//   });
// };

export const useGetWeather = () => {
  return useMutation(async (params: WeatherParams) => {
    const result = await getCurrentWeather(params);
    return result;
  });
};
