import axios from 'axios';
import { LocationParams } from './type';

export const getCurrentWeather = async (locationParams: LocationParams) => {
  const querys = {
    lat: locationParams.lat,
    lon: locationParams.lon,
  };
  const text = locationParams.lat && locationParams.lon ? locationParams.lat + locationParams.lon : '';
  const url = '/weather';
  const result = await axios.post(`https://todays-outfit.vercel.app/api/fetcher`, { url: url, text: text });
  return result.data;
};

export const getCurrentPollution = async (locationParams: LocationParams) => {
  const params = {
    lat: locationParams.lat,
    lon: locationParams.lon,
  };
  const text = locationParams.lat && locationParams.lon ? locationParams.lat + locationParams.lon : '';
  const url = '/air_pollution';
  const result = await axios.post(`https://todays-outfit.vercel.app/api/fetcher`, { url: url, text: text });
  return result.data;
};

export const getWeeklyWeather = async (locationParams: LocationParams) => {
  const params = {
    lat: locationParams.lat,
    lon: locationParams.lon,
    exclude: 'current,minutely',
  };
  const text =
    locationParams.lat && locationParams.lon ? locationParams.lat + locationParams.lon + 'current,minutely' : '';
  const url = '/onecall';
  const result = await axios.post(`https://todays-outfit.vercel.app/api/fetcher`, { url: url, text: text });
  return result.data;
};
