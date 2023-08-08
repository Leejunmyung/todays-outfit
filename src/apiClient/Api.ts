import { baseApi } from './Fetcher';
import { LocationParams } from './type';

export const getCurrentWeather = async (locationParams: LocationParams) => {
  const params = {
    lat: locationParams.lat,
    lon: locationParams.lon,
  };
  const result = await baseApi.get(`/weather`, { params });
  return result.data;
};

export const getCurrentPollution = async (locationParams: LocationParams) => {
  const params = {
    lat: locationParams.lat,
    lon: locationParams.lon,
  };
  const result = await baseApi.get(`/air_pollution`, { params });
  return result.data;
};

export const getWeeklyWeather = async (locationParams: LocationParams) => {
  const params = {
    lat: locationParams.lat,
    lon: locationParams.lon,
    exclude: 'current,minutely',
  };
  const result = await baseApi.get(`/onecall`, { params });
  return result.data;
};
