import axios from 'axios';
import { LocationParams } from './type';

export const getCurrentWeather = async (locationParams: LocationParams) => {
  const url = '/weather';
  const text =
    locationParams.lat && locationParams.lon ? `${url}?lat=${locationParams.lat}&lon=${locationParams.lon}` : '';
  const result = await axios.post(`https://todays-outfit.vercel.app/api/fetcher`, { text: text });
  return result.data;
};

export const getCurrentPollution = async (locationParams: LocationParams) => {
  const url = '/air_pollution';
  const text =
    locationParams.lat && locationParams.lon ? `${url}?lat=${locationParams.lat}&lon=${locationParams.lon}` : '';
  const result = await axios.post(`https://todays-outfit.vercel.app/api/fetcher`, { text: text });
  return result.data;
};

export const getWeeklyWeather = async (locationParams: LocationParams) => {
  const url = '/onecall';
  const text =
    locationParams.lat && locationParams.lon
      ? `${url}?lat=${locationParams.lat}&lon=${locationParams.lon}&current,minutely`
      : '';
  const result = await axios.post(`https://todays-outfit.vercel.app/api/fetcher`, { text: text });
  return result.data;
};
