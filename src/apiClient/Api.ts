import axios from 'axios';
import { LocationParams } from './type';

export const getCurrentWeather = async (locationParams: LocationParams) => {
  const params = {
    lat: locationParams.lat,
    lon: locationParams.lon,
  };
  const url = '/weather';
  const result = await axios.get(`https://todays-outfit.vercel.app/api/fetcher`, { url: url, params: params });
  return result.data;
};

export const getCurrentPollution = async (locationParams: LocationParams) => {
  const params = {
    lat: locationParams.lat,
    lon: locationParams.lon,
  };
  const url = '/air_pollution';
  const result = await axios.get(`https://todays-outfit.vercel.app/api/fetcher`, { url: url, params: params });
  return result.data;
};

export const getWeeklyWeather = async (locationParams: LocationParams) => {
  const params = {
    lat: locationParams.lat,
    lon: locationParams.lon,
    exclude: 'current,minutely',
  };
  const url = '/onecall';
  const result = await axios.get(`https://todays-outfit.vercel.app/api/fetcher`, { url: url, params: params });
  return result.data;
};
