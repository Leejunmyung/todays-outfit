import { baseApi } from './Fetcher';
import { WeatherParams } from './type';

export const getCurrentWeather = async (weatherParams: WeatherParams) => {
  const params = {
    lat: weatherParams.lat,
    lon: weatherParams.lon,
  };
  const result = await baseApi.get(`/current`, { params });
  return result.data.data[0];
};