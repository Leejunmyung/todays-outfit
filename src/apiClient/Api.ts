import { baseApi } from './Fetcher';
import { LocationParams } from './type';

export const getCurrentWeather = async (weatherParams: LocationParams) => {
  const params = {
    lat: weatherParams.lat,
    lon: weatherParams.lon,
  };
  const result = await baseApi.get(`/weather`, { params });
  return result.data;
};

export const getCurrentPollution = async (pollutionParams: LocationParams) => {
  const params = {
    lat: pollutionParams.lat,
    lon: pollutionParams.lon,
  };
  const result = await baseApi.get(`/air_pollution`, { params });
  return result.data;
};
