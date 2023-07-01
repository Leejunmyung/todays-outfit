import { QueryKey, useQuery } from '@tanstack/react-query';
import { getCurrentPollution, getCurrentWeather } from './Api';
import { WeatherData, AirPollutionData } from './type';
import { useRecoilValue } from 'recoil';
import { currentLocation } from '../recoil/atom';

export const useGetWeather = () => {
  const weatherParams = useRecoilValue(currentLocation);
  return useQuery<WeatherData, QueryKey>(['weather'], () => {
    return getCurrentWeather(weatherParams);
  });
};

export const useGetPollution = () => {
  const pollutionParams = useRecoilValue(currentLocation);
  return useQuery<AirPollutionData, QueryKey>(['pollution'], () => {
    return getCurrentPollution(pollutionParams);
  });
};

// export const useGetWeather = () => {
//   return useMutation(async (params: WeatherParams) => {
//     const result = await getCurrentWeather(params);
//     return result;
//   });
// };
