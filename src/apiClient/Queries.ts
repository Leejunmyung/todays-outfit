import { QueryKey, useQuery } from '@tanstack/react-query';
import { getCurrentPollution, getCurrentWeather } from './Api';
import { WeatherData, AirPollutionData } from './type';
import { LocationParams } from './type';

export const useGetWeather = (locationParams: LocationParams) => {
  return useQuery<WeatherData, QueryKey>(['weather'], () => {
    return getCurrentWeather(locationParams);
  });
};

export const useGetPollution = (locationParams: LocationParams) => {
  return useQuery<AirPollutionData, QueryKey>(['pollution'], () => {
    return getCurrentPollution(locationParams);
  });
};

// export const useGetWeather = () => {
//   return useMutation(async (params: WeatherParams) => {
//     const result = await getCurrentWeather(params);
//     return result;
//   });
// };
