import axios from 'axios';
import { baseApi } from './Fetcher';
import { LocationParams } from './type';

export const getCurrentWeather = async (locationParams: LocationParams) => {
  const params = {
    lat: locationParams.lat,
    lon: locationParams.lon,
  };
  const result = await axios.get('https://todays-outfit.vercel.app/api/translate', { params });
  console.log(result);
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
